import { 
    MdEmail, 
    MdPhone, 
    MdLocationOn, 
    MdCalendarToday 
} from "react-icons/md";
import { 
    FaLinkedin, 
    FaGlobe 
} from "react-icons/fa";

export default function App() {
    return (
        <div className="min-h-screen bg-gray-100 py-8 flex justify-center items-center print:bg-white print:p-0">
            <div className="w-[8.27in] h-[11.69in] bg-white shadow-2xl print:shadow-none p-6 mx-auto overflow-hidden">
                
                {/* Header Section */}
                <header className="grid grid-cols-[3fr_2fr] items-start mb-4 gap-8">
                    <div className="flex flex-col">
                        <h1 className="text-4xl font-bold text-gray-900 tracking-wider mb-1 leading-none">
                            Ritik Singh
                        </h1>
                        <p className="text-sm font-medium text-gray-600 mt-1 tracking-wide">
                            Frontend Developer <span className="mx-1 text-gray-800 font-light">|</span> React.js Specialist
                        </p>
                    </div>

                    <div className="flex flex-col gap-1 border-l border-gray-800 pl-4 text-[11px] text-gray-700">
                        <a href="mailto:singhritik2675@gmail.com" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                            <MdEmail className="text-gray-500 text-sm" /> 
                            <span>singhritik2675@gmail.com</span>
                        </a>
                        <a href="tel:+919519718746" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                            <MdPhone className="text-gray-500 text-sm" /> 
                            <span>+91-9519718746</span>
                        </a>
                        <div className="flex items-center gap-2">
                            <MdLocationOn className="text-gray-500 text-sm" /> 
                            <span>Kanpur, Uttar Pradesh, India</span>
                        </div>
                        <a href="https://linkedin.com/in/ritik-singhh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                            <FaLinkedin className="text-gray-500 text-sm" /> 
                            <span>linkedin.com/in/ritik-singhh</span>
                        </a>
                        <a href="https://ritikportfoliosingh.netlify.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                            <FaGlobe className="text-gray-500 text-sm" /> 
                            <span>ritikportfoliosingh.netlify.app</span>
                        </a>
                    </div>
                </header>

                {/* Summary Section */}
                <section className="mb-4">
                    <h2 className="text-sm font-bold text-gray-800 mb-1 border-b-[1.5px] border-gray-800 pb-0.5 tracking-wide">
                       PROFESSIONAL SUMMARY
                    </h2>
                    <p className="text-gray-700 leading-snug text-[11.5px] text-justify">
                        Frontend Developer with{" "}
                        <span className="font-semibold text-gray-900">1+ years of professional experience</span>{" "}
                        specializing in{" "}
                        <span className="font-semibold text-gray-900">React.js</span>
                        , JavaScript, Tailwind CSS and shipping scalable code for production environments. Proven expertise in{" "}
                        <span className="font-semibold text-gray-900">REST API integration</span>
                        , advanced state management, and optimizing render lifecycles for real-world business applications. Track record of bridging design and engineering to deliver high-performance frontend solutions.
                    </p>
                </section>

                {/* Skills Section - Flattened for ATS */}
              {/* Updated Skills Section */}
                <section className="mb-4">
                    <h2 className="text-sm font-bold text-gray-800 mb-1.5 border-b-[1.5px] border-gray-800 pb-0.5 tracking-wide">
                        SKILLS
                    </h2>
                    <div className="flex flex-col gap-1 text-[11.5px] leading-relaxed">
                        
                        <div className="pl-[160px] -indent-[160px]">
                            <span className="inline-block w-[140px] font-semibold text-gray-800 mr-[20px] indent-0">Frontend Core:</span> 
                            <span className="text-gray-700">
                                <span className="font-semibold text-gray-900">JavaScript (ES6+)</span>, <span className="font-semibold text-gray-900">TypeScript</span>, <span className="font-semibold text-gray-900">React.js</span>, <span className="font-semibold text-gray-900">Next.js (App Router)</span>, React Native
                            </span>
                        </div>
                        
                        <div className="pl-[160px] -indent-[160px]">
                            <span className="inline-block w-[140px] font-semibold text-gray-800 mr-[20px] indent-0">Libraries & Data:</span> 
                            <span className="text-gray-700">
                                <span className="font-semibold text-gray-900">Redux Toolkit</span>, TanStack Query, Zustand, React Hook Form, <span className="font-semibold text-gray-900">Axios</span>, <span className="font-semibold text-gray-900">Context API</span>
                            </span>
                        </div>
                        
                        <div className="pl-[160px] -indent-[160px]">
                            <span className="inline-block w-[140px] font-semibold text-gray-800 mr-[20px] indent-0">UI & Animation:</span> 
                            <span className="text-gray-700">
                                HTML5, CSS3, <span className="font-semibold text-gray-900">Tailwind CSS</span>, Shadcn UI, Framer Motion
                            </span>
                        </div>
                        
                        <div className="pl-[160px] -indent-[160px]">
                            <span className="inline-block w-[140px] font-semibold text-gray-800 mr-[20px] indent-0">Testing & Performance:</span> 
                            <span className="text-gray-700">
                                Jest, React Testing Library, Lighthouse, Core Web Vitals
                            </span>
                        </div>
                        
                        <div className="pl-[160px] -indent-[160px]">
                            <span className="inline-block w-[140px] font-semibold text-gray-800 mr-[20px] indent-0">Backend Exposure:</span> 
                            <span className="text-gray-700">
                                <span className="font-semibold text-gray-900">Node.js</span>, Express.js, REST APIs, JWT Authentication, Middleware, MongoDB, Mongoose, Firebase
                            </span>
                        </div>
                        
                        <div className="pl-[160px] -indent-[160px]">
                            <span className="inline-block w-[140px] font-semibold text-gray-800 mr-[20px] indent-0">Tools & Deployment:</span> 
                            <span className="text-gray-700">
                                <span className="font-semibold text-gray-900">Git</span>, GitHub Actions (CI/CD), <span className="font-semibold text-gray-900">Vite</span>, Vercel, WebSockets, Postman, Figma, AI Tools
                            </span>
                        </div>
                        
                        <div className="pl-[160px] -indent-[160px]">
                            <span className="inline-block w-[140px] font-semibold text-gray-800 mr-[20px] indent-0">Soft Skills:</span> 
                            <span className="text-gray-700">
                                Analytical Problem Solving, <span className="font-semibold text-gray-900">Agile Adaptability</span>, Technical Communication, Team Collaboration, <span className="font-semibold text-gray-900">Leadership</span>
                            </span>
                        </div>
                        
                    </div>
                </section>

                {/* Experience Section */}
                <section className="mb-4">
                    <h2 className="text-sm font-bold text-gray-800 mb-1.5 border-b-[1.5px] border-gray-800 pb-0.5 tracking-wide">
                        WORK EXPERIENCE
                    </h2>
                    <div className="mb-2">
                        <div className="flex justify-between items-start mb-1">
                            <div>
                                <h3 className="text-[13px] font-bold text-gray-800">
                                    Frontend Developer - LogiQlink Technologies
                                </h3>
                                <p className="text-gray-600 text-[11px] italic">
                                    Indore, Madhya Pradesh
                                </p>
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-600 whitespace-nowrap">
                                <span className="mb-0.5">
                                    <MdCalendarToday className="text-gray-500" />
                                </span>
                                <span>Mar 2025 - Feb 2026</span>
                            </div>
                        </div>
                        <ul className="space-y-0.5 text-gray-700 ml-4 list-disc marker:text-gray-400 text-[11.5px] leading-relaxed">
                            <li>
                                Led the end-to-end frontend development for the official company website and integrated admin panel used by 10+ internal staff daily to manage operations using <span className="font-semibold text-gray-900">React.js</span>, <span className="font-semibold text-gray-900">Redux</span>, and <span className="font-semibold text-gray-900">Tailwind CSS</span>.
                            </li>
                            <li>
                                Built a <span className="font-semibold text-gray-900">cross-platform stock analysis mobile app</span> using <span className="font-semibold text-gray-900">React Native</span>, featuring <span className="font-semibold text-gray-900">real-time data visualization</span> and complex financial charting via WebSockets for low-latency iOS and Android rendering.
                            </li>
                            <li>
                                Architected a scalable logistics dashboard using <span className="font-semibold text-gray-900">React.js</span> and <span className="font-semibold text-gray-900">Recoil</span>, boosting operational efficiency by <span className="font-semibold text-gray-900">30%</span> via reduced manual data entry and streamlined real-time reporting for B2B clients.
                            </li>
                            <li>
                                Collaborated with backend engineers on <span className="font-semibold text-gray-900">API contracts</span>, <span className="font-semibold text-gray-900">request/response schemas</span>, and <span className="font-semibold text-gray-900">error handling</span> to ensure reliable frontend-backend integration and optimized network payload performance.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="mb-4">
                    <h2 className="text-sm font-bold text-gray-800 mb-1.5 border-b-[1.5px] border-gray-800 pb-0.5 tracking-wide">
                        PROJECTS
                    </h2>
                    <div className="space-y-3">
                        
                    

                        {/* Project 1: AutoSlot */}
                        <div>
                            <div className="flex justify-between items-end mb-0.5">
                                <h3 className="text-[13px] font-bold text-gray-800 leading-tight">
                                    AutoSlot - AI-Powered Meeting Scheduling Assistant
                                </h3>
                            </div>
                            
                            <div className="mb-1 text-[10.5px]">
                                <span className="font-semibold text-gray-800 mr-1.5">Tech Stack:</span>
                                <span className="text-gray-700">React.js, MUI, Tailwind CSS, OpenAI API, Google OAuth 2.0, Figma</span>
                            </div>
                            
                            <ul className="list-disc ml-4 space-y-0.5 text-gray-700 text-[11.5px] leading-relaxed marker:text-gray-400">
                                <li>
                                    Engineered the conversational UI integrating <span className="font-semibold text-gray-900">OpenAI API</span> to parse natural language for Google Calendar actions.
                                </li>
                                <li>
                                    Architected the interface from <span className="font-semibold text-gray-900">Figma wireframes</span>, implementing a robust <span className="font-semibold text-gray-900">dynamic custom theme generation</span> engine.
                                </li>
                                <li>
                                    Integrated secure <span className="font-semibold text-gray-900">Google OAuth 2.0</span> authentication flows for seamless and protected real-time meeting data synchronization.
                                </li>
                            </ul>
                        </div>

                        {/* Project 2 */}
                        <div>
                            <div className="flex justify-between items-end mb-0.5">
                                <h3 className="text-[13px] font-bold text-gray-800 leading-tight">
                                    PerfMatch – React State Architecture Under Load
                                </h3>
                                {/* <div className="flex items-center gap-1 text-[9.5px] font-medium text-gray-600">
                                    <span className="font-bold text-gray-800">Live:</span>
                                    <a href="https://perfmatch.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                        perfmatch.vercel.app
                                    </a>
                                    <span className="text-gray-300 mx-1">|</span>
                                    <span className="font-bold text-gray-800">Code:</span>
                                    <a href="https://github.com/RikSin7/react-architecture-under-stress" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                        github.com/RikSin7/react-architecture
                                    </a>
                                </div> */}
                            </div>
                            
                            <div className="mb-1 text-[10.5px]">
                                <span className="font-semibold text-gray-800 mr-1.5">Tech Stack:</span>
                                <span className="text-gray-700">React.js, TypeScript, Tailwind CSS, React Virtuoso, Recharts</span>
                            </div>
                            
                            <ul className="list-disc ml-4 space-y-0.5 text-gray-700 text-[11.5px] leading-relaxed marker:text-gray-400">
                                <li>
                                    Created a <span className="font-semibold text-gray-900">performance benchmarking</span> React application to compare efficient vs anti-pattern react state architectures.
                                </li>
                                <li>
                                    Reduced unnecessary component re-renders by <span className="font-semibold text-gray-900">over 90%</span> using <span className="font-semibold text-gray-900">state colocation</span>, memoization, and component composition.
                                </li>
                                <li>
                                    Built a responsive, data-heavy UI with <span className="font-semibold text-gray-900">virtualization</span> and <span className="font-semibold text-gray-900">real-time render metrics</span> to maintain smooth performance under heavy load.
                                </li>
                            </ul>
                        </div>

                            {/* Project 3 */}
                        <div>
                            <div className="flex justify-between items-end mb-0.5">
                                <h3 className="text-[13px] font-bold text-gray-800 leading-tight">
                                    BingeBank - Content Discovery Platform
                                </h3>
                                {/* <div className="flex items-center gap-1 text-[9.5px] font-medium text-gray-600">
                                    <span className="font-bold text-gray-800">Live:</span>
                                    <a href="https://bingebank.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                        bingebank.vercel.app
                                    </a>
                                    <span className="text-gray-300 mx-1">|</span>
                                    <span className="font-bold text-gray-800">Code:</span>
                                    <a href="https://github.com/RikSin7/bingebank-2.0" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                                        github.com/RikSin7/bingebank-2.0
                                    </a>
                                </div> */}
                            </div>
                            
                            <div className="mb-1 text-[10.5px]">
                                <span className="font-semibold text-gray-800 mr-1.5">Tech Stack:</span>
                                <span className="text-gray-700">Next.js, TypeScript, Redux Toolkit, Tailwind CSS, SCSS, TMDB API, Motion</span>
                            </div>
                            
                            <ul className="list-disc ml-4 space-y-0.5 text-gray-700 text-[11.5px] leading-relaxed marker:text-gray-400">
                                <li>
                                    Developed a <span className="font-semibold text-gray-900">high-performance and fully responsive</span> Movie/TV Show discovery app with <span className="font-semibold text-gray-900">TMDB API</span> integration.
                                </li>
                                <li>
                                    Integrated advanced features: dynamic search, trailer playback, and <span className="font-semibold text-gray-900">smart recommendations</span>.
                                </li>
                                <li>
                                    Drove higher user engagement through <span className="font-semibold text-gray-900">lazy loading</span>, <span className="font-semibold text-gray-900">performance tuning</span>, and UX enhancements.
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </section>
                
                {/* Education Section */}
                <section>
                    <h2 className="text-sm font-bold text-gray-800 mb-1 border-b-[1.5px] border-gray-800 pb-0.5 tracking-wide">
                        EDUCATION
                    </h2>
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-[13px] font-bold text-gray-800">
                                Bachelor of Computer Application (BCA)
                            </h3>
                            <p className="text-gray-700 text-[11.5px]">
                                Axis Colleges, Kanpur
                            </p>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-600 whitespace-nowrap">
                                <span className="mb-0.5">
                                    <MdCalendarToday className="text-gray-500" />
                                </span>                    
                                <span>2021 – 2024</span>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}