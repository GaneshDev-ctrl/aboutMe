import { Brain, Database, GitPullRequestClosed, HardDriveUpload, Laptop, Link, Monitor } from "lucide-react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Hero() {
    return (
        <>
            <section id='home'
                className="relative min-h-screen bg-cover bg-center"
                style={{
                    backgroundImage: "url('/assets/bg-full.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-white/60"></div>

                <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
                    <div className="text-center max-w-2xl">

                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight ">
                            <span className="bg-blue-200 px-2 tracking-widest">LET&apos;S</span>{" "}
                            BUILD SOMETHING
                            <br />
                            <span className="font-black">GREAT TOGETHER</span>
                        </h1>

                        <p className="mt-6 text-gray-600 text-lg">
                            I&apos;m a full-stack web developer specializing in modern,
                            interactive web applications using React, Angular, Next.js, and MERN stack.
                        </p>

                        {/* <button className="mt-10 border-2 border-black px-10 py-3 font-semibold hover:bg-black hover:text-white transition">
                            LET&apos;S TALK
                        </button> */}
                        <a
                            href="mailto:ganeshm.builds@gmail.com?subject=Let's%20Work%20Together"
                            className="inline-block mt-10 border-2 border-black px-10 py-3 font-semibold
             hover:bg-black hover:text-white transition"
                        >
                            LET&apos;S TALK
                        </a>

                    </div>
                </div>
            </section>
            {/*About Section */}
            <section id="about" className="px-8 lg:px-24 py-24 bg-white">
                {/* Title */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold tracking-wide">ABOUT ME</h2>
                    <div className="flex justify-center mt-4">
                        <span className="w-20 h-[2px] bg-gray-700"></span>
                    </div>
                </div>

                {/* Top Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* LEFT */}
                    <div>
                        <h3 className="text-xl mb-6">
                            WHO <span className="font-bold">AM I?</span>
                        </h3>

                        <p className="mt-6 text-lg leading-relaxed max-w-4xl">
                            I have hands-on experience in building scalable, high-performance web applications
                            using modern frontend and backend technologies. I focus on writing clean,
                            maintainable code and following best practices in architecture and security.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed  max-w-4xl mb-12">
                            My expertise includes developing responsive user interfaces, integrating secure APIs,
                            designing RESTful services, and working with databases to deliver reliable and
                            production-ready solutions.
                        </p>

                        <a
                            href="/Ganesh_Fullstack_Developer_Resume.pdf"
                            download
                            className="inline-block bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition"
                        >
                            DOWNLOAD MY CV
                        </a>
                    </div>

                    {/* RIGHT */}
                    <div>
                        <h3 className="text-xl mb-4">EXPERT IN</h3>
                        <p className="text-gray-600 mb-8">
                            Focused on building modern, scalable web applications with clean code,
                            strong architecture, and great user experience.
                        </p>

                        {/* Skills */}
                        {[
                            { name: "HTML / CSS", value: "90%" },
                            { name: "JavaScript (ES6+)", value: "85%" },
                            { name: "Tailwind CSS", value: "85%" },
                            { name: "React.js", value: "85%" },
                            { name: "Angular", value: "80%" },
                            { name: "Node.js", value: "85%" },
                            { name: "Express.js", value: "85%" },
                            { name: "MongoDB", value: "80%" },
                            { name: "REST APIs", value: "90%" },
                            { name: "Git / GitHub", value: "85%" },
                            { name: "JWT / Auth", value: "80%" },
                        ].map((skill) => (
                            <div key={skill.name} className="mb-6">
                                <span className="text-sm">{skill.name}</span>
                                <div className="relative h-[6px] bg-gray-200 mt-2">
                                    <div
                                        className="absolute left-0 top-0 h-full bg-gray-800"
                                        style={{ width: skill.value }}
                                    >
                                        <span className="absolute right-0 -top-8 bg-gray-800 text-white text-xs px-2 py-[2px]">
                                            {skill.value}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EDUCATION & EXPERIENCE */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-24">
                    {/* EDUCATION */}
                    <div className="bg-gray-50 p-10">
                        <h3 className="text-2xl font-extralight mb-4"><span className="font-extrabold">EDU</span>CATION</h3>

                        <div className="mb-8">
                            <span className="text-sm text-gray-500">2012–2016</span>
                            <h4 className="font-semibold mt-1">B.E COMPUTER SCIENCE AND ENGINEERING</h4>
                            <p className="text-gray-600">VI INSTITUTE OF TECHNOLOGY.</p>
                        </div>

                        {/* <div>
              <span className="text-sm text-gray-500">2007–2008</span>
              <h4 className="font-semibold mt-1">WEB DESIGN</h4>
              <p className="text-gray-600">NY UNIVERSITY</p>
            </div> */}
                    </div>

                    {/* EXPERIENCE */}
                    <div className="bg-gray-50 p-10">
                        <h3 className="text-2xl font-normal mb-4"><span className="font-extrabold">EX</span>PERIENCE</h3>
                        <div className="mb-8">
                            <span className="text-sm text-gray-500">2022–2025</span>
                            <h4 className="font-semibold mt-1">FULL STACK DEVELOPER</h4>
                            <p className="text-gray-600">INNOVATIQ CONSULTING INDIA PVT LTD.  </p>
                        </div>
                        <div >
                            <span className="text-sm text-gray-500">2018–2020</span>
                            <h4 className="font-semibold mt-1">SOFTWARE DEVELOPER</h4>
                            <p className="text-gray-600">FEMTOSOFT TECHNOLOGIES.</p>
                        </div>

                    </div>
                </div>
            </section>

            <section
                id="services"
                className="relative min-h-screen bg-transparent text-white"
            >
                {/* White overlay (to avoid too dark background) */}
                <div className="absolute inset-0 bg-black/80"></div>

                {/* CONTENT */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">

                    {/* HEADING */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-[0.3em]">
                            WHAT I DO
                        </h2>

                        {/* underline */}
                        <div className="mt-4 flex justify-center items-center gap-3">
                            <span className="w-12 h-[2px] bg-white/50"></span>
                            <span className="w-20 h-[2px] bg-white"></span>
                            <span className="w-12 h-[2px] bg-white/50"></span>
                        </div>
                    </div>

                    {/* SERVICES GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-16">

                        {/* Service 1 */}
                        <div className="flex gap-6">
                            <Laptop className="w-50 h-20 text-white" />
                            <div>
                                <h3 className="text-lg font-semibold tracking-wider">
                                    FRONTEND <span className="font-bold">DEVELOPMENT</span>
                                </h3>
                                <p className="mt-3 text-white/80 leading-relaxed">
                                    Building responsive, fast, and modern user interfaces using
                                    React, Next.js, Tailwind CSS, and modern UI practices.
                                </p>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="flex gap-6">
                            <Brain className="w-50 h-20 text-white" />
                            <div>
                                <h3 className="text-lg font-semibold tracking-wider">
                                    BACKEND <span className="font-bold">DEVELOPMENT</span>
                                </h3>
                                <p className="mt-3 text-white/80 leading-relaxed">
                                    Developing secure and scalable backend systems with Node.js,
                                    Express, REST APIs, authentication, and business logic.
                                </p>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="flex gap-6">
                            <GitPullRequestClosed className="w-50 h-20 text-white" />
                            <div>
                                <h3 className="text-lg font-semibold tracking-wider">
                                    FULL-STACK <span className="font-bold">APPLICATIONS</span>
                                </h3>
                                <p className="mt-3 text-white/80 leading-relaxed">
                                    End-to-end web applications including frontend, backend,
                                    database integration, and role-based access.
                                </p>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="flex gap-6">
                            <Database className="w-50 h-20 text-white" />
                            <div>
                                <h3 className="text-lg font-semibold tracking-wider">
                                    DATABASE <span className="font-bold">MANAGEMENT</span>
                                </h3>
                                <p className="mt-3 text-white/80 leading-relaxed">
                                    Designing and managing databases with MongoDB and SQL,
                                    optimized queries, and clean data structures.
                                </p>
                            </div>
                        </div>

                        {/* Service 5 */}
                        <div className="flex gap-6">
                            <Link className="w-50 h-20 text-white" />
                            <div>
                                <h3 className="text-lg font-semibold tracking-wider">
                                    API <span className="font-bold">INTEGRATION</span>
                                </h3>
                                <p className="mt-3 text-white/80 leading-relaxed">
                                    Integrating third-party APIs like payments, authentication,
                                    emails, maps, and external services.
                                </p>
                            </div>
                        </div>

                        {/* Service 6 */}
                        <div className="flex gap-6">
                            <HardDriveUpload className="w-50 h-20 text-white" />
                            <div>
                                <h3 className="text-lg font-semibold tracking-wider">
                                    DEPLOYMENT <span className="font-bold">& MAINTENANCE</span>
                                </h3>
                                <p className="mt-3 text-white/80 leading-relaxed">
                                    Deploying applications to production using Vercel, Netlify,
                                    or cloud platforms with ongoing maintenance and updates.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Projects />
            <Contact />
        </>


    );
}
