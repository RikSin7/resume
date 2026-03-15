import { useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

import {
    MapPin,
    Mail,
    Phone,
    Linkedin,
    Github,
    Calendar,
    Globe,
} from "lucide-react";

export default function Resume() {
    const [resume, setResume] = useState(null);

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "resume", "main"), (docSnap) => {
            if (docSnap.exists()) {
                setResume(docSnap.data());
            }
        });

        return () => unsub();
    }, []);

    if (!resume)
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-500">
                Loading...
            </div>
        );

    // EXPLICIT ORDERING: This stops Firebase from scrambling your skills alphabetically
    const leftColumnCategories = [
        "Frontend & Mobile",
        "Testing & Quality",
        "UI Styling & Animation",
    ];
    const rightColumnCategories = [
        "State Management",
        "Backend Exposure",
        "Tools & Technologies",
    ];

    // Helper to safely parse React's className into HTML's class
    const parseHTML = (htmlString) => {
        if (!htmlString) return "";
        return htmlString.replace(/className=/g, "class=");
    };

    return (
        <div className="min-h-screen bg-gray-100 py-8 flex justify-center items-center print:bg-white print:p-0">
            <div className="w-[8.27in] h-[11.69in] bg-white shadow-2xl print:shadow-none p-6 mx-auto overflow-hidden">
                {/* ─── Header Section ─── */}
                <header className="text-center mb-4">
                    <h1 className="text-4xl font-bold text-gray-800 mb-1 uppercase">
                        {resume.name}
                    </h1>
                    <p className="text-lg text-gray-600 mb-2">{resume.title}</p>

                    {/* Contact Info */}
                    <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            <a
                                href={`tel:${resume.contact?.phone?.replace(
                                    /\s/g,
                                    ""
                                )}`}
                                className="hover:text-blue-600 transition-colors"
                            >
                                {resume.contact?.phone}
                            </a>
                        </div>
                        <div className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            <a
                                href={`mailto:${resume.contact?.email}`}
                                className="hover:text-blue-600 transition-colors"
                            >
                                {resume.contact?.email}
                            </a>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{resume.contact?.location}</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-wrap justify-center gap-2">
                        {resume.contact?.linkedin && (
                            <a
                                href={resume.contact.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs hover:bg-blue-100 transition"
                            >
                                <Linkedin className="w-3 h-3" />
                                <span>LinkedIn</span>
                            </a>
                        )}
                        {resume.contact?.github && (
                            <a
                                href={resume.contact.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs hover:bg-blue-100 transition"
                            >
                                <Github className="w-3 h-3" />
                                <span>GitHub</span>
                            </a>
                        )}
                        {resume.contact?.portfolio && (
                            <a
                                href={resume.contact.portfolio}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs hover:bg-blue-100 transition"
                            >
                                <Globe className="w-3 h-3" />
                                <span>Portfolio</span>
                            </a>
                        )}
                    </div>
                </header>

                {/* ─── Professional Summary ─── */}
                <section className="mb-4">
                    <h2 className="text-lg font-bold text-gray-800 mb-1 border-b border-gray-200 pb-0.5">
                        PROFESSIONAL SUMMARY
                    </h2>
                    <p
                        className="text-gray-700 leading-snug text-sm text-justify"
                        dangerouslySetInnerHTML={{
                            __html: parseHTML(resume.summary),
                        }}
                    />
                </section>

                {/* ─── Skills Section ─── */}
                <section className="mb-3">
                    <h2 className="text-lg font-bold text-gray-800 mb-1 border-b border-gray-200 pb-0.5">
                        TECHNICAL SKILLS
                    </h2>

                    <div className="grid md:grid-cols-2 gap-x-6 gap-y-0.5 text-xs">
                        {/* Left Column */}
                        <div>
                            {leftColumnCategories.map((category) => {
                                const skills = resume.skills?.[category];
                                if (!skills) return null;
                                return (
                                    <div key={category} className="mb-1.5">
                                        <h3 className="font-semibold text-base text-gray-700 mb-0.5">
                                            {category}
                                        </h3>
                                        <div className="flex flex-wrap gap-1">
                                            {skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="px-1.5 py-[1px] bg-gray-100 text-gray-700 rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Right Column */}
                        <div>
                            {rightColumnCategories.map((category) => {
                                const skills = resume.skills?.[category];
                                if (!skills) return null;
                                return (
                                    <div key={category} className="mb-1.5">
                                        <h3 className="font-semibold text-base text-gray-700 mb-0.5">
                                            {category}
                                        </h3>
                                        <div className="flex flex-wrap gap-1">
                                            {skills.map((skill, i) => (
                                                <span
                                                    key={i}
                                                    className="px-1.5 py-[1px] bg-gray-100 text-gray-700 rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* ─── Experience Section ─── */}
                <section className="mb-4">
                    <h2 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-200 pb-0.5">
                        WORK EXPERIENCE
                    </h2>

                    {resume.experience?.map((exp, i) => (
                        <div key={i} className="mb-3">
                            <div className="flex justify-between items-start mb-1">
                                <div>
                                    <h3 className="text-base font-semibold text-gray-800">
                                        {exp.role}
                                    </h3>
                                    <p className="text-gray-600 text-xs">
                                        {exp.location}
                                    </p>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-gray-600 whitespace-nowrap ml-4">
                                    <Calendar className="w-3 h-3" />
                                    <span>{exp.duration}</span>
                                </div>
                            </div>

                            <ul className="space-y-0.5 text-gray-700 ml-5 list-disc marker:text-gray-500 text-xs leading-relaxed">
                                {exp.points?.map((p, idx) => (
                                    <li
                                        key={idx}
                                        dangerouslySetInnerHTML={{
                                            __html: parseHTML(p),
                                        }}
                                    />
                                ))}
                            </ul>
                        </div>
                    ))}
                </section>

                {/* ─── Projects Section ─── */}
                <section className="mb-4">
                    <h2 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-200 pb-0.5">
                        PROJECTS
                    </h2>

                    <div className="space-y-3">
                        {resume.projects?.map((proj, i) => (
                            <div key={i}>
                                <div className="flex justify-between items-start mb-0.5">
                                    <h3 className="text-base font-semibold text-gray-800">
                                        {proj.name}
                                    </h3>
                                    <div className="flex gap-2">
                                        {proj.live && (
                                            <a
                                                href={proj.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-[10px] hover:bg-blue-100 transition"
                                            >
                                                <Globe className="w-2.5 h-2.5" />
                                                <span>Live</span>
                                            </a>
                                        )}
                                        {proj.code && (
                                            <a
                                                href={proj.code}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-[10px] hover:bg-blue-100 transition"
                                            >
                                                <Github className="w-2.5 h-2.5" />
                                                <span>Code</span>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {proj.tech && proj.tech.length > 0 && (
                                    <div className="flex flex-wrap items-center gap-2 mb-1">
                                        <span className="text-xs text-gray-600 font-semibold">
                                            Tech Stack:
                                        </span>
                                        <div className="flex flex-wrap gap-2">
                                            {proj.tech.map((t, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-2 text-[10px] py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <ul className="list-disc ml-5 space-y-0.5 text-gray-700 mb-0.5 text-xs leading-relaxed">
                                    {proj.points?.map((p, idx) => (
                                        <li
                                            key={idx}
                                            dangerouslySetInnerHTML={{
                                                __html: parseHTML(p),
                                            }}
                                        />
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ─── Education Section ─── */}
                {resume.education && (
                    <section className="mb-0">
                        <h2 className="text-lg font-bold text-gray-800 mb-1 border-b border-gray-200 pb-0.5">
                            EDUCATION
                        </h2>

                        <div className="space-y-1">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800">
                                        {resume.education.degree}
                                    </h3>
                                    <p className="text-gray-700 text-xs">
                                        {resume.education.college}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-600 whitespace-nowrap ml-4">
                                    <Calendar className="w-3 h-3" />
                                    <span>{resume.education.duration}</span>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
