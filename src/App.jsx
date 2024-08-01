import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import resumePdf from "/resume.pdf";
import { useState, useEffect } from "react";
import { ArrowRight, LinkedinIcon, MailIcon } from "lucide-react";
import {
  SiExpress,
  SiFramer,
  SiJavascript,
  SiNextdotjs,
  // SiPrisma,
  SiReact,
  // SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from "react-icons/si";
// import { GrMysql } from "react-icons/gr";
import { ProjectComponent } from "./components/site/ProjectComponent";
import {
  FaReact,
  // FaStripeS,
  FaNodeJs,
  FaBriefcase,
  FaWhatsapp,
  FaCss3,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { DiMongodb } from "react-icons/di";
import { SiAuthelia } from "react-icons/si";
import { GrDocumentPerformance } from "react-icons/gr";
import { TbBrandOpenai } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { RxFontStyle } from "react-icons/rx";
import { FaBox } from "react-icons/fa";

const Typewriter = ({ text, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    let typingInterval;

    const typeText = () => {
      setDisplayedText((prevText) => prevText + text[index]);
      index++;

      if (index === text.length) {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    };

    typingInterval = setInterval(typeText, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return (
    <h1 className="text-text font-bold text-2xl md:text-4xl text-center bg-secondary p-1.5">
      {isTypingComplete ? text : displayedText}
    </h1>
  );
};

function App() {
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const controls = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref1, inView1] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
    if (inView1) {
      controls1.start("visible");
    } else {
      controls1.start("hidden");
    }
    if (inView2) {
      controls2.start("visible");
    } else {
      controls2.start("hidden");
    }
    if (inView3) {
      controls3.start("visible");
    } else {
      controls3.start("hidden");
    }
  }, [
    controls,
    inView,
    inView1,
    controls1,
    inView2,
    controls2,
    controls3,
    inView3,
  ]);

  const firstProjectVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const secondProjectVariants = {
    hidden: { opacity: 0, x: 100 }, // Change x to a positive value
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    const href = location.href.slice(-1);
    // console.log(href);

    if (href === "/") setCurrentPage("home");

    if (href === "k") setCurrentPage("work");

    if (href === "e") setCurrentPage("resume");

    if (href === "t") setCurrentPage("contact");
  }, [location.href]);

  return (
    <section className="max-w-6xl mx-auto">
      <Cursor />
      <Navbar setCurrentPage={setCurrentPage} />

      {currentPage === "home" && (
        <motion.main
          className="max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <section className="grid sm:grid-cols-1 md:grid-cols-2 place-items-center sm:mt-16 mt-24 lg:mt-12 xl:mt-6 font-mono text-text max-w-5xl mx-auto border-double p-3 relative ">
            <div className="flex flex-col gap-y-5 relative">
              <div className="h-1 w-28 bg-secondary absolute -top-10 md:-left-6 -left-3" />
              <div className="h-20 w-1 bg-secondary absolute -top-10 md:-left-6 -left-3" />
              <div className="h-1 w-28 bg-secondary absolute -bottom-8 md:-right-6 -right-3" />
              <div className="h-20 w-1 bg-secondary absolute -bottom-8 md:-right-6 -right-3" />
              <Typewriter text={"Hi my name is Hunny Vaglay"} />
              <p className="text-text text-sm md:text-md">
                As a full-stack web developer, I excel at transforming intricate
                concepts into polished, user-centric digital experiences. With a
                deep understanding of both front-end and back-end technologies,
                I craft seamless and engaging web applications. My expertise
                extends beyond the browser, encompassing robust cloud
                infrastructure and DevOps practices. I leverage AWS, Docker,
                Kubernetes, and Terraform to architect scalable and resilient
                systems. My proficiency in Jenkins and Git/GitHub ensures
                efficient collaboration and streamlined deployment pipelines.
              </p>
            </div>
            <div>
              <div className="blob ml-0 md:ml-20 mt-10 lg:mt-0 mx-auto"></div>
            </div>
          </section>
          <Footer />
        </motion.main>
      )}

      {currentPage === "work" && (
        <main>
          <motion.main
            className="max-w-6xl mx-auto font-bold mt-10 ml-4 md:ml-0 font-ubuntu"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <section>
              <h1 className="flex items-center ">
                <ArrowRight />
              </h1>
            </section>
          </motion.main>

          <section className="flex flex-col mt-10 gap-12 font-ubuntu mb-5">
            <ProjectComponent
              firstProjectVariants={firstProjectVariants}
              imgName={"dots.png"}
              siteLink={"https://paint-pulse.vercel.app/"}
              githubLink={"https://github.com/hunnnnny-v/paint-pulse"}
              projectName={"PaintPulse"}
              projectSubheading={"A collaborative, real-time whiteboard"}
              projectDescription={[
                "🛠️ Whiteboard from Scratch",
                "🧰 Toolbar with Text, Shapes, Sticky Notes & Pencil",
                "🪄 Layering Functionality",
                "🎨 Coloring System",
                "↩️ Undo & Redo Functionality",
                "⌨️ Keyboard Shortcuts",
                "🤝 Real-time Collaboration",
                "💾 Real-time Database",
                "🔐 Auth, Organizations, and Invites",
                "⭐️ Favoriting Functionality",
                "🌐 Next.js 14 Framework",
                "💅 TailwindCSS & ShadcnUI Styling",
              ]}
              projectTechStack={[
                {
                  name: "Next.js",
                  icon: <SiNextdotjs />,
                },
                {
                  name: "Tailwind",
                  icon: <SiTailwindcss />,
                },
                {
                  name: "TypeScript",
                  icon: <SiTypescript />,
                },
                {
                  name: "ConvexDB",
                  icon: <FaDatabase />,
                },
                {
                  name: "Clerk",
                  icon: <SiAuthelia />,
                },
                {
                  name: "ShadCN",
                  icon: <RxFontStyle />,
                },
                {
                  name: "LiveBlocks",
                  icon: <FaBox />,
                },
              ]}
              leftOrRight={"left"}
            />
            <ProjectComponent
              firstProjectVariants={secondProjectVariants}
              imgName={"learnhub1.png"}
              siteLink={"https://chic-rabanadas-84edb4.netlify.app/"}
              githubLink={"https://github.com/hunnnnny-v/LearnHub"}
              projectName={"LearnHub"}
              projectSubheading={
                "A SAAS product which connects teachers and their students"
              }
              projectDescription={[
                "🎨4 vibrant themes with dark mode",
                "🔒Clerk authentication for secure access",
                "📷Seamless video call integration",
                "📝Efficient note management: add, delete, and download",
                "🗒️Comprehensive student reports for insights",
                "⏰Stay organized with the integrated planner",
                "💹Encouraging collaboration among students and educators.",
                "💖Streamlining administrative tasks for educators, maximizing efficiency",
              ]}
              projectTechStack={[
                {
                  name: "React.js",
                  icon: <FaReact />,
                },
                {
                  name: "Tailwind",
                  icon: <SiTailwindcss />,
                },
                {
                  name: "JavaScript",
                  icon: <IoLogoJavascript />,
                },
                {
                  name: "Framer",
                  icon: <SiFramer />,
                },
                {
                  name: "Clerk",
                  icon: <SiAuthelia />,
                },
                {
                  name: "MongoDB",
                  icon: <DiMongodb />,
                },
                {
                  name: "Express",
                  icon: <SiExpress />,
                },
                {
                  name: "Nodejs",
                  icon: <FaNodeJs />,
                },
              ]}
              leftOrRight={"right"}
            />
            <motion.section
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={firstProjectVariants}
            >
              <ProjectComponent
                firstProjectVariants={secondProjectVariants}
                imgName={"task-manager.png"}
                siteLink={"https://task-manager-app-eight-ebon.vercel.app/"}
                githubLink={"https://github.com/hunnnnny-v/Task-Manager-App"}
                projectName={"Task-Manager"}
                projectSubheading={"A lean and focused task manager"}
                projectDescription={[
                  "⏱️ Built a time-aware task manager with pure HTML, CSS, and JavaScript.",
                  "➕ Implemented robust task creation, editing, and deletion features.",
                  "🚀 Optimized for speed and accessibility across devices and browsers.",
                ]}
                projectTechStack={[
                  {
                    name: "Css",
                    icon: <FaCss3 />,
                  },
                  {
                    name: "Javascript",
                    icon: <SiJavascript />,
                  },
                  // {
                  //   name: "TypeScript",
                  //   icon: <SiTypescript />,
                  // },
                  {
                    name: "Vite",
                    icon: <SiVite />,
                  },
                ]}
                leftOrRight={"left"}
              />
            </motion.section>
            <motion.section
              ref={ref1}
              animate={controls1}
              initial="hidden"
              variants={secondProjectVariants}
            >
              <ProjectComponent
                firstProjectVariants={firstProjectVariants}
                imgName={"zotion.png"}
                siteLink={"https://zotion.vercel.app/"}
                githubLink={"https://github.com/hunnnnny-v/zotion"}
                projectName={"Zotion"}
                projectSubheading={
                  "A versatile workspace for notes, documents, and organization"
                }
                projectDescription={[
                  "🚀 Built a real-time, fullstack Notion clone with Next.js 13 and React.",
                  "🌗 Implemented customizable light and dark mode themes.",
                  "📂 Integrated seamless file management with upload, delete, and replacement.",
                  "⏰ Enhanced user experience with a dynamic real-time clock and collapsible sidebar.",
                  "🔄 Leveraged a real-time database for instant synchronization and dynamic document updates.",
                  "🌐 Deployed on Vercel for optimal performance and global reach.",
                  "🚀 Implemented publishing features for sharing and collaboration.",
                ]}
                projectTechStack={[
                  {
                    name: "Next.js",
                    icon: <SiNextdotjs />,
                  },
                  {
                    name: "React",
                    icon: <SiReact />,
                  },
                  {
                    name: "Real-time Database",
                    icon: <FaDatabase />, // Replace with appropriate icon
                  },
                  {
                    name: "Tailwind CSS",
                    icon: <SiTailwindcss />,
                  },
                ]}
                leftOrRight={"right"}
              />
            </motion.section>

            {/* <motion.section
              ref={ref2}
              animate={controls2}
              initial="hidden"
              variants={firstProjectVariants}
            >
              <ProjectComponent
                firstProjectVariants={secondProjectVariants}
                imgName={"mern-estate.png"}
                siteLink={"https://mern-estate-mwvw.onrender.com/"}
                githubLink={"https://github.com/HashirY/mern-estate"}
                projectName={"Mern Estate"}
                projectSubheading={"A realtime home dealing full stack website"}
                projectDescription={[
                  "🔑 Advanced Authentication",
                  "🏡 Real-world CRUD Operations",
                  "💡 User-friendly Features",
                  "🚀 Advanced Search Functionality",
                ]}
                projectTechStack={[
                  {
                    name: "React.js",
                    icon: <FaReact />,
                  },
                  {
                    name: "Javascript",
                    icon: <IoLogoJavascript />,
                  },
                  {
                    name: "MongoDB",
                    icon: <DiMongodb />,
                  },
                  {
                    name: "Express",
                    icon: <SiExpress />,
                  },
                  {
                    name: "Nodejs",
                    icon: <FaNodeJs />,
                  },
                  {
                    name: "Redux",
                    icon: <SiRedux />,
                  },
                ]}
                leftOrRight={"left"}
              />
            </motion.section> */}

            <motion.section
              ref={ref3}
              animate={controls3}
              initial="hidden"
              variants={secondProjectVariants}
            >
              <ProjectComponent
                firstProjectVariants={firstProjectVariants}
                imgName={"ai-summz.png"}
                siteLink={"https://summarizzerai.netlify.app"}
                githubLink={"https://github.com/hunnnnny-v/Summarizer-AI"}
                projectName={"Sumz"}
                projectSubheading={"A accurate and to the point AI summarizer"}
                projectDescription={[
                  "📱 Create a Responsive, Beautiful UI/UX",
                  "🍷 Nice Touch of Glass Morphism using Tailwind CSS",
                  "🚀 Make Advanced RTK Query API Requests that Fire on Condition",
                  "💾 Save History using Local Storage",
                  "📝 Handle Form Events and Catch Errors",
                  "📋 Implement Copy to Clipboard",
                ]}
                projectTechStack={[
                  {
                    name: "React.js",
                    icon: <FaReact />,
                  },
                  {
                    name: "Tailwind",
                    icon: <SiTailwindcss />,
                  },
                  {
                    name: "JavaScript",
                    icon: <IoLogoJavascript />,
                  },
                  {
                    name: "OpenAIApi",
                    icon: <TbBrandOpenai />,
                  },
                ]}
                leftOrRight={"right"}
              />
            </motion.section>
          </section>
        </main>
      )}

      {currentPage === "resume" && (
        <main>
          <motion.main
            className="max-w-6xl mx-auto font-ubunut font-bold mt-10 mb-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <section>
              <h1 className="flex items-center gap-x-3 text-4xl">
                My Resume <ArrowRight />
              </h1>
            </section>
          </motion.main>

          <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="flex justify-around blob3 border-text border-4 h-[430px] mb-4 font-ubuntu text-text">
              <div className="mt-40 flex flex-col gap-y-4 transition-none">
                <h1 className=" text-lg md:text-3xl font-bold flex gap-x-3 items-center">
                  <FaBriefcase className="text-accent text-4xl ml-4 md:text-[16px] md:ml-0" />
                  Dive deep in my professional journey
                </h1>
                <p className="text-center font-bold text-xs md:text-[16px]">
                  Click on the button below to download my resume
                </p>
                <div className="flex items-center justify-center">
                  <a
                    href={resumePdf}
                    download={"Hunny's Resume"}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="flex gap-x-2 items-center text-lg md:text-xl bg-accent text-text px-3 md:px-5 py-3 md:py-4 rounded-xl hover:bg-secondary">
                      <GrDocumentPerformance />
                      Résumé
                    </button>
                  </a>
                </div>
              </div>
              <div className="h-[100px] w-[280px] mt-14 mr-2 md:mt-0 md:mr-0">
                <img
                  src="/resume/resume-1.png"
                  className="mt-4 border-r-4 border-b-4 border-text"
                />
              </div>
            </div>
          </motion.section>
        </main>
      )}

      {currentPage === "contact" && (
        <main className="flex flex-col items-center justify-center mt-20 font-ubuntu">
          <h1 className="text-text text-4xl font-bold">Lets Connect !</h1>

          <div className="flex gap-x-6 mt-6">
            <div className="flex items-center gap-x-2 text-text bg-[#105816] px-2 py-1 rounded-md transition-all">
              <FaWhatsapp className="h-6 w-6 text-white" />
              <span>+91-9416686488</span>
            </div>
            <div className="flex items-center gap-x-2 text-text bg-[#53b15b] px-2 py-1 rounded-md transition-all">
              <MailIcon className="h-6 w-6 text-white" />
              <span>hunnyv2003@gmail.com</span>
            </div>
            <div className="flex items-center gap-x-2 text-text bg-[#97ffa0] px-2 py-1 rounded-md transition-all">
              <LinkedinIcon className="h-6 w-6 text-white" />
              <span>https://www.linkedin.com/in/hunny-vaglay-151730237/</span>
            </div>
          </div>
        </main>
      )}
    </section>
  );
}

export default App;
