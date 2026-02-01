import {
    MapPin,
    Mail,
    Phone,
    Linkedin,
    Github,
    Calendar,
    Globe,
} from "lucide-react";

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100 py-8 flex justify-center items-center print:bg-white print:p-0">
            <div className="w-[8.27in] h-[11.69in] bg-white shadow-2xl print:shadow-none p-6 mx-auto overflow-hidden">
                {/* Header Section */}
                <header className="text-center mb-4">
                    <h1 className="text-4xl font-bold text-gray-800 mb-1 uppercase">
                        Ritik Singh
                    </h1>
                    <p className="text-lg text-gray-600 mb-2">
                        Frontend Developer | React.js Specialist
                    </p>

                    {/* Contact Info */}
                    <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-600 mb-2">
                        <div className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            <a
                                href="tel:+919519718746"
                                className="hover:text-blue-600 transition-colors"
                            >
                                +91 9519718746
                            </a>
                        </div>
                        <div className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            <a
                                href="mailto:singhritik2675@gmail.com"
                                className="hover:text-blue-600 transition-colors"
                            >
                                singhritik2675@gmail.com
                            </a>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>Kanpur, Uttar Pradesh, India</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-wrap justify-center gap-2">
                        <a
                            href="https://linkedin.com/in/ritik-singhh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs hover:bg-blue-100 transition"
                        >
                            <Linkedin className="w-3 h-3" />
                            <span>LinkedIn</span>
                        </a>
                        <a
                            href="https://github.com/RikSin7"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs hover:bg-blue-100 transition"
                        >
                            <Github className="w-3 h-3" />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://ritikportfoliosingh.netlify.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs hover:bg-blue-100 transition"
                        >
                            <Globe className="w-3 h-3" />
                            <span>Portfolio</span>
                        </a>
                    </div>
                </header>

                {/* Professional Summary */}
                <section className="mb-4">
                    <h2 className="text-lg font-bold text-gray-800 mb-1 border-b border-gray-200 pb-0.5">
                        PROFESSIONAL SUMMARY
                    </h2>
                    <p className="text-gray-700 leading-snug text-sm text-justify">
                        Frontend Developer with expertise in{" "}
                        <span className="font-semibold text-gray-900">
                            React.js
                        </span>
                        ,{" "}
                        <span className="font-semibold text-gray-900">
                            JavaScript
                        </span>{" "}
                        and responsive design. Strong experience in{" "}
                        <span className="font-semibold text-gray-900">
                            REST API integration
                        </span>
                        , state management, component rendering, and{" "}
                        <span className="font-semibold text-gray-900">
                            performance optimization
                        </span>
                        . Proven ability to significantly boost user engagement
                        through clean design and{" "}
                        <span className="font-semibold text-gray-900">
                            scalable solutions
                        </span>
                        .
                    </p>
                </section>

                {/* Skills Section */}
                <section className="mb-3">
                    <h2 className="text-lg font-bold text-gray-800 mb-1 border-b border-gray-200 pb-0.5">
                        TECHNICAL SKILLS
                    </h2>

                    <div className="grid md:grid-cols-2 gap-x-6 gap-y-0.5 text-xs">
                        {/* Left Column */}
                        <div>
                            <div className="mb-1.5">
                                <h3 className="font-semibold text-base text-gray-700 mb-0.5">
                                    Frontend & Mobile
                                </h3>
                                <div className="flex flex-wrap gap-1">
                                    {[
                                        "React.js",
                                        "JavaScript",
                                        "TypeScript",
                                        "React Native",
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-1.5 py-[1px] bg-gray-100 text-gray-700 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-1.5">
                                <h3 className="font-semibold text-base text-gray-700 mb-0.5">
                                    Testing & Quality
                                </h3>
                                <div className="flex flex-wrap gap-1">
                                    {["Jest", "React Testing Library"].map(
                                        (skill) => (
                                            <span
                                                key={skill}
                                                className="px-1.5 py-[1px] bg-gray-100 text-gray-700 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="mb-1.5">
                                <h3 className="font-semibold text-base text-gray-700 mb-0.5">
                                    UI Styling & Animation
                                </h3>
                                <div className="flex flex-wrap gap-1">
                                    {[
                                        "Tailwind CSS",
                                        "Vanilla CSS",
                                        "Motion",
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-1.5 py-[1px] bg-gray-100 text-gray-700 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div>
                            <div className="mb-1.5">
                                <h3 className="font-semibold text-base text-gray-700 mb-0.5">
                                    State Management
                                </h3>
                                <div className="flex flex-wrap gap-1">
                                    {["Redux", "Zustand", "Context API"].map(
                                        (skill) => (
                                            <span
                                                key={skill}
                                                className="px-1.5 py-[1px] bg-gray-100 text-gray-700 rounded-full"
                                            >
                                                {skill}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>

                            <div className="mb-1.5">
                                <h3 className="font-semibold text-base text-gray-700 mb-0.5">
                                    Backend Exposure
                                </h3>
                                <div className="flex flex-wrap gap-1">
                                    {[
                                        "Node.js",
                                        "Express.js",
                                        "MongoDB",
                                        "Mongoose",
                                        "REST APIs",
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-1.5 py-[1px] bg-gray-100 text-gray-700 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-1.5">
                                <h3 className="font-semibold text-base text-gray-700 mb-0.5">
                                    Tools & Technologies
                                </h3>
                                <div className="flex flex-wrap gap-1">
                                    {[
                                        "Git",
                                        "Figma",
                                        "Postman",
                                        "WebSockets",
                                    ].map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-1.5 py-[1px] bg-gray-100 text-gray-700 rounded-full"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="mb-4">
                    <h2 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-200 pb-0.5">
                        WORK EXPERIENCE
                    </h2>

                    <div className="mb-3">
                        <div className="flex justify-between items-start mb-1">
                            <div>
                                <h3 className="text-base font-semibold text-gray-800">
                                    Frontend Developer - LogiQlink Technologies
                                </h3>
                                <p className="text-gray-600 text-xs">
                                    Indore, Madhya Pradesh
                                </p>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-gray-600 whitespace-nowrap ml-4">
                                <Calendar className="w-3 h-3" />
                                <span>Mar 2025 - Present</span>
                            </div>
                        </div>

                        <ul className="space-y-0.5 text-gray-700 ml-5 list-disc marker:text-gray-500 text-xs leading-relaxed">
                            <li>
                                Led the end-to-end frontend development for the
                                official company website and integrated admin
                                panel used by 10+ internal staff daily to manage
                                operations using{" "}
                                <span className="font-semibold text-gray-900">
                                    React.js
                                </span>
                                ,{" "}
                                <span className="font-semibold text-gray-900">
                                    Redux
                                </span>
                                , and{" "}
                                <span className="font-semibold text-gray-900">
                                    Tailwind CSS
                                </span>
                                .
                            </li>
                            <li>
                                Developed a{" "}
                                <span className="font-semibold text-gray-900">
                                    cross-platform stock analysis mobile
                                    application
                                </span>{" "}
                                using{" "}
                                <span className="font-semibold text-gray-900">
                                    React Native
                                </span>
                                , featuring{" "}
                                <span className="font-semibold text-gray-900">
                                    real-time data visualization
                                </span>{" "}
                                and complex financial charting.
                            </li>
                            <li>
                                Architected a scalable logistics dashboard using{" "}
                                <span className="font-semibold text-gray-900">
                                    React.js
                                </span>{" "}
                                and{" "}
                                <span className="font-semibold text-gray-900">
                                    Recoil
                                </span>
                                , boosting operational efficiency by{" "}
                                <span className="font-semibold text-gray-900">
                                    30%
                                </span>{" "}
                                via reduced manual data entry for B2B clients.
                            </li>
                            <li>
                                Collaborated with backend engineers on{" "}
                                <span className="font-semibold text-gray-900">
                                    API contracts
                                </span>
                                ,{" "}
                                <span className="font-semibold text-gray-900">
                                    request/response schemas
                                </span>
                                , and{" "}
                                <span className="font-semibold text-gray-900">
                                    error handling
                                </span>{" "}
                                to ensure reliable frontend-backend integration.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mb-4">
                    <h2 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-200 pb-0.5">
                        PROJECTS
                    </h2>

                    <div className="space-y-3">
                        {/* Project 1 */}
                        <div>
                            <div className="flex justify-between items-start mb-0.5">
                                <h3 className="text-base font-semibold text-gray-800">
                                    BingeBank - Content Discovery Platform
                                </h3>
                                <div className="flex gap-2">
                                    <a
                                        href="https://bingebank.vercel.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-[10px] hover:bg-blue-100 transition"
                                    >
                                        <Globe className="w-2.5 h-2.5" />
                                        <span>Live</span>
                                    </a>
                                    <a
                                        href="https://github.com/RikSin7/bingebank"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-[10px] hover:bg-blue-100 transition"
                                    >
                                        <Github className="w-2.5 h-2.5" />
                                        <span>Code</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                <span className="text-xs text-gray-600 font-semibold">
                                    Tech Stack:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "React.js",
                                        "Redux",
                                        "Tailwind CSS",
                                        "TMDB API",
                                        "Motion",
                                    ].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 text-[10px] py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <ul className="list-disc ml-5 space-y-0.5 text-gray-700 mb-0.5 text-xs leading-relaxed">
                                <li>
                                    Engineered a{" "}
                                    <span className="font-semibold text-gray-900">
                                        fully responsive
                                    </span>{" "}
                                    Movie/TV Show discovery app with{" "}
                                    <span className="font-semibold text-gray-900">
                                        TMDB API
                                    </span>{" "}
                                    integration.
                                </li>
                                <li>
                                    Integrated advanced features: dynamic
                                    search, trailer playback, and{" "}
                                    <span className="font-semibold text-gray-900">
                                        smart recommendations
                                    </span>
                                    .
                                </li>
                                <li>
                                    Drove higher user engagement through{" "}
                                    <span className="font-semibold text-gray-900">
                                        lazy loading
                                    </span>
                                    ,{" "}
                                    <span className="font-semibold text-gray-900">
                                        performance tuning
                                    </span>
                                    , and UX enhancements.
                                </li>
                            </ul>
                        </div>

                        {/* Project 2 */}
                        <div>
                            <div className="flex justify-between items-start mb-0.5">
                                <h3 className="text-base font-semibold text-gray-800">
                                    PerfMatch – React State Architecture Under
                                    Load
                                </h3>
                                <div className="flex gap-2">
                                    <a
                                        href="https://perfmatch.vercel.app"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-[10px] hover:bg-blue-100 transition"
                                    >
                                        <Globe className="w-2.5 h-2.5" />
                                        <span>Live</span>
                                    </a>
                                    <a
                                        href="https://github.com/RikSin7/react-architecture-under-stress"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full text-[10px] hover:bg-blue-100 transition"
                                    >
                                        <Github className="w-2.5 h-2.5" />
                                        <span>Code</span>
                                    </a>
                                </div>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                <span className="text-xs text-gray-600 font-semibold">
                                    Tech Stack:
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "React.js",
                                        "TypeScript",
                                        "Tailwind CSS",
                                        "Vite",
                                        "React Virtuoso",
                                        "Recharts",
                                    ].map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 text-[10px] py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <ul className="list-disc ml-5 space-y-0.5 text-gray-700 mb-0.5 text-xs leading-relaxed">
                                <li>
                                    Engineered a{" "}
                                    <span className="font-semibold text-gray-900">
                                        performance benchmarking
                                    </span>{" "}
                                    React application to compare efficient vs
                                    anti-pattern react state architectures.
                                </li>
                                <li>
                                    Reduced unnecessary component re-renders by{" "}
                                    <span className="font-semibold text-gray-900">
                                        over 90%
                                    </span>{" "}
                                    using{" "}
                                    <span className="font-semibold text-gray-900">
                                        state colocation
                                    </span>
                                    , memoization, and component composition.
                                </li>
                                <li>
                                    Built a responsive, data-heavy UI with{" "}
                                    <span className="font-semibold text-gray-900">
                                        virtualization
                                    </span>{" "}
                                    and{" "}
                                    <span className="font-semibold text-gray-900">
                                        real-time render metrics
                                    </span>{" "}
                                    to maintain smooth performance under heavy
                                    load.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Education Section */}
                <section className="mb-0">
                    <h2 className="text-lg font-bold text-gray-800 mb-1 border-b border-gray-200 pb-0.5">
                        EDUCATION
                    </h2>

                    <div className="space-y-1">
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-sm font-semibold text-gray-800">
                                    Bachelor of Computer Application (BCA)
                                </h3>
                                <p className="text-gray-700 text-xs">
                                    Axis Colleges, Kanpur
                                </p>
                            </div>
                            <div className="flex items-center gap-2 text-xs text-gray-600 whitespace-nowrap ml-4">
                                <Calendar className="w-3 h-3" />
                                <span>2021 – 2024</span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
