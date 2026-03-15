import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import {
    Save,
    User,
    Briefcase,
    Code,
    GraduationCap,
    PenTool,
} from "lucide-react";

export default function Admin() {
    const [resume, setResume] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        async function load() {
            const snap = await getDoc(doc(db, "resume", "main"));
            if (snap.exists()) setResume(snap.data());
        }
        load();
    }, []);

    if (!resume)
        return (
            <div className="min-h-screen flex items-center justify-center font-bold text-gray-500">
                Loading CMS...
            </div>
        );

    const save = async () => {
        setIsSaving(true);
        try {
            await updateDoc(doc(db, "resume", "main"), resume);
            alert("Resume updated successfully!");
        } catch (error) {
            console.error("Error saving resume:", error);
            alert("Failed to save resume.");
        }
        setIsSaving(false);
    };

    // Main Field Handlers
    const updateField = (field, value) =>
        setResume({ ...resume, [field]: value });
    const updateContact = (field, value) =>
        setResume({
            ...resume,
            contact: { ...resume.contact, [field]: value },
        });
    const updateEducation = (field, value) =>
        setResume({
            ...resume,
            education: { ...resume.education, [field]: value },
        });

    // Array Handlers
    const updateSkill = (category, index, value) => {
        const newSkills = [...resume.skills[category]];
        newSkills[index] = value;
        setResume({
            ...resume,
            skills: { ...resume.skills, [category]: newSkills },
        });
    };

    const updateExperience = (index, field, value) => {
        const newExp = [...resume.experience];
        newExp[index] = { ...newExp[index], [field]: value };
        setResume({ ...resume, experience: newExp });
    };

    const updateExperiencePoint = (expIndex, pointIndex, value) => {
        const newExp = [...resume.experience];
        const newPoints = [...newExp[expIndex].points];
        newPoints[pointIndex] = value;
        newExp[expIndex].points = newPoints;
        setResume({ ...resume, experience: newExp });
    };

    const updateProject = (index, field, value) => {
        const newProj = [...resume.projects];
        newProj[index] = { ...newProj[index], [field]: value };
        setResume({ ...resume, projects: newProj });
    };

    const updateProjectPoint = (projIndex, pointIndex, value) => {
        const newProj = [...resume.projects];
        const newPoints = [...newProj[projIndex].points];
        newPoints[pointIndex] = value;
        newProj[projIndex].points = newPoints;
        setResume({ ...resume, projects: newProj });
    };

    const updateProjectTech = (projIndex, techIndex, value) => {
        const newProj = [...resume.projects];
        const newTech = [...newProj[projIndex].tech];
        newTech[techIndex] = value;
        newProj[projIndex].tech = newTech;
        setResume({ ...resume, projects: newProj });
    };

    // Shared Styles
    const inputClass =
        "w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm";
    const labelClass =
        "block text-sm font-semibold text-gray-700 mb-1.5 capitalize";
    const cardClass =
        "bg-white shadow-sm rounded-xl p-6 md:p-8 border border-gray-200 mb-8";

    // Fixed order for rendering admin panels properly
    const orderedSkillCategories = [
        "Frontend & Mobile",
        "State Management",
        "Testing & Quality",
        "Backend Exposure",
        "UI Styling & Animation",
        "Tools & Technologies",
    ];

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Sticky Header */}
            <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm px-6 py-4 flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <PenTool className="w-6 h-6 text-blue-600" /> Resume CMS
                </h1>
                <button
                    onClick={save}
                    disabled={isSaving}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition-colors disabled:opacity-50"
                >
                    <Save className="w-4 h-4" />{" "}
                    {isSaving ? "Saving..." : "Save Changes"}
                </button>
            </div>

            <div className="max-w-4xl mx-auto px-6 space-y-8">
                {/* ─── Basic Info & Contact ─── */}
                <div className={cardClass}>
                    <div className="flex items-center gap-2 mb-6 border-b pb-4">
                        <User className="w-5 h-5 text-gray-500" />
                        <h2 className="text-xl font-bold text-gray-800">
                            Personal Information
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className={labelClass}>Full Name</label>
                            <input
                                className={inputClass}
                                value={resume.name}
                                onChange={(e) =>
                                    updateField("name", e.target.value)
                                }
                            />
                        </div>
                        <div>
                            <label className={labelClass}>Job Title</label>
                            <input
                                className={inputClass}
                                value={resume.title}
                                onChange={(e) =>
                                    updateField("title", e.target.value)
                                }
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {Object.entries(resume.contact).map(([key, value]) => (
                            <div key={key}>
                                <label className={labelClass}>{key}</label>
                                <input
                                    className={inputClass}
                                    value={value}
                                    onChange={(e) =>
                                        updateContact(key, e.target.value)
                                    }
                                />
                            </div>
                        ))}
                    </div>

                    <div>
                        <label className={labelClass}>
                            Professional Summary{" "}
                            <span className="text-gray-400 font-normal ml-2">
                                (HTML tags supported)
                            </span>
                        </label>
                        <textarea
                            className={`${inputClass} resize-y min-h-[120px]`}
                            value={resume.summary}
                            onChange={(e) =>
                                updateField("summary", e.target.value)
                            }
                        />
                    </div>
                </div>

                {/* ─── Skills ─── */}
                <div className={cardClass}>
                    <div className="flex items-center gap-2 mb-6 border-b pb-4">
                        <Code className="w-5 h-5 text-gray-500" />
                        <h2 className="text-xl font-bold text-gray-800">
                            Technical Skills
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {orderedSkillCategories.map((category) => (
                            <div
                                key={category}
                                className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                            >
                                <h3 className="font-bold text-gray-800 mb-3 capitalize">
                                    {category}
                                </h3>
                                <div className="space-y-2">
                                    {resume.skills[category]?.map(
                                        (skill, i) => (
                                            <input
                                                key={i}
                                                className={inputClass}
                                                value={skill}
                                                onChange={(e) =>
                                                    updateSkill(
                                                        category,
                                                        i,
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ─── Experience ─── */}
                <div className={cardClass}>
                    <div className="flex items-center gap-2 mb-6 border-b pb-4">
                        <Briefcase className="w-5 h-5 text-gray-500" />
                        <h2 className="text-xl font-bold text-gray-800">
                            Work Experience
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {resume.experience?.map((exp, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 p-5 rounded-xl border border-gray-200"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className={labelClass}>
                                            Role / Company
                                        </label>
                                        <input
                                            className={inputClass}
                                            value={exp.role}
                                            onChange={(e) =>
                                                updateExperience(
                                                    i,
                                                    "role",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClass}>
                                            Location
                                        </label>
                                        <input
                                            className={inputClass}
                                            value={exp.location}
                                            onChange={(e) =>
                                                updateExperience(
                                                    i,
                                                    "location",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClass}>
                                            Duration
                                        </label>
                                        <input
                                            className={inputClass}
                                            value={exp.duration}
                                            onChange={(e) =>
                                                updateExperience(
                                                    i,
                                                    "duration",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClass}>
                                        Bullet Points{" "}
                                        <span className="text-gray-400 font-normal ml-2">
                                            (HTML tags supported)
                                        </span>
                                    </label>
                                    <div className="space-y-2">
                                        {exp.points.map((point, idx) => (
                                            <input
                                                key={idx}
                                                className={inputClass}
                                                value={point}
                                                onChange={(e) =>
                                                    updateExperiencePoint(
                                                        i,
                                                        idx,
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ─── Projects ─── */}
                <div className={cardClass}>
                    <div className="flex items-center gap-2 mb-6 border-b pb-4">
                        <Code className="w-5 h-5 text-gray-500" />
                        <h2 className="text-xl font-bold text-gray-800">
                            Projects
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {resume.projects?.map((proj, i) => (
                            <div
                                key={i}
                                className="bg-gray-50 p-5 rounded-xl border border-gray-200"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <label className={labelClass}>
                                            Project Name
                                        </label>
                                        <input
                                            className={inputClass}
                                            value={proj.name}
                                            onChange={(e) =>
                                                updateProject(
                                                    i,
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClass}>
                                            Live Link URL
                                        </label>
                                        <input
                                            className={inputClass}
                                            value={proj.live || ""}
                                            onChange={(e) =>
                                                updateProject(
                                                    i,
                                                    "live",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                    <div>
                                        <label className={labelClass}>
                                            GitHub Code URL
                                        </label>
                                        <input
                                            className={inputClass}
                                            value={proj.code || ""}
                                            onChange={(e) =>
                                                updateProject(
                                                    i,
                                                    "code",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>
                                </div>

                                {proj.tech && (
                                    <div className="mb-4">
                                        <label className={labelClass}>
                                            Tech Stack (Pills)
                                        </label>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                            {proj.tech.map((techItem, idx) => (
                                                <input
                                                    key={idx}
                                                    className={inputClass}
                                                    value={techItem}
                                                    onChange={(e) =>
                                                        updateProjectTech(
                                                            i,
                                                            idx,
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div>
                                    <label className={labelClass}>
                                        Bullet Points{" "}
                                        <span className="text-gray-400 font-normal ml-2">
                                            (HTML tags supported)
                                        </span>
                                    </label>
                                    <div className="space-y-2">
                                        {proj.points.map((point, idx) => (
                                            <input
                                                key={idx}
                                                className={inputClass}
                                                value={point}
                                                onChange={(e) =>
                                                    updateProjectPoint(
                                                        i,
                                                        idx,
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ─── Education ─── */}
                {resume.education && (
                    <div className={cardClass}>
                        <div className="flex items-center gap-2 mb-6 border-b pb-4">
                            <GraduationCap className="w-5 h-5 text-gray-500" />
                            <h2 className="text-xl font-bold text-gray-800">
                                Education
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                                <label className={labelClass}>
                                    Degree / Major
                                </label>
                                <input
                                    className={inputClass}
                                    value={resume.education.degree}
                                    onChange={(e) =>
                                        updateEducation(
                                            "degree",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div>
                                <label className={labelClass}>
                                    College / University
                                </label>
                                <input
                                    className={inputClass}
                                    value={resume.education.college}
                                    onChange={(e) =>
                                        updateEducation(
                                            "college",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div>
                                <label className={labelClass}>Duration</label>
                                <input
                                    className={inputClass}
                                    value={resume.education.duration}
                                    onChange={(e) =>
                                        updateEducation(
                                            "duration",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
