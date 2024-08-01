import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { TechStack } from "./TechStack";

export const ProjectComponent = ({
  firstProjectVariants,
  imgName,
  siteLink,
  githubLink,
  projectName,
  projectSubheading,
  projectDescription,
  projectTechStack,
  leftOrRight,
}) => {
  return (
    <motion.div
      className={`grid grid-cols-1 ml-3 mr-3 md:ml-0 md:mr-0 md:grid-cols-2  shadow-md  p-4 gap-x-8  bg-cover font-fira ${
        leftOrRight === "left" ? "border-l-4" : "border-r-2"
      } border-text ${
        leftOrRight === "left" ? "rounded-r-lg" : "rounded-l-lg"
      } relative hover:border-secondary transition-all`}
      initial="hidden"
      animate="visible"
      variants={firstProjectVariants}
    >
      {leftOrRight === "left" && (
        <div className="flex w-full h-full items-center justify-center rounded-md shadow-md overflow-hidden transition-all blob2 mt-4 md:mt-0">
          <img
            src={`/projects/${imgName}`}
            alt=""
            className="hover:scale-90 transition-all"
          />
        </div>
      )}
      <div className="flex items-center flex-col gap-y-2 p-2">
        <div
          className={`absolute ${
            leftOrRight === "left" ? "right-2 top-2" : "left-2 top-2"
          } flex items-center justify-center gap-x-4 `}
        >
          <a
            href={`${siteLink || ""}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-x-2 hover:text-emerald-400 transition-all text-text md:text-[16px] text-xs mb-20 md:mb-0"
          >
            <FaLink />
            <span>Live Link</span>
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-x-2 hover:text-[#4078c0] text-text md:text-[16px] text-xs mb-20 md:mb-0"
          >
            <SiGithub />
            <span>Github</span>
          </a>
        </div>
        <h1 className="text-4xl uppercase font-bold text-text mt-3">
          {projectName}
        </h1>

        <p
          className={`text-text text-xs font-semibold border border-secondary p-1 px-3 rounded-xl`}
        >
          {projectSubheading}
        </p>
        <div className={`mt-3 text-text`}>
          <h3 className="text-center text-xl uppercase font-bold">Features</h3>
          <div className="grid grid-cols-2 gap-1 font-ubuntu ">
            {projectDescription.map((projectD) => (
              <span
                key={projectD}
                className="text-xs border border-secondary p-0.5 rounded-xl text-center"
              >
                {projectD}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-text font-fira font-bold uppercase">
            Technologies Used
          </h1>
          <div className="grid grid-cols-4 gap-x-8 gap-y-2 mt-2.5">
            {projectTechStack.map((project) => (
              <TechStack
                key={project.name}
                techName={project.name}
                leftOrRight={"left"}
              >
                <>{project.icon}</>
              </TechStack>
            ))}
          </div>
        </div>
      </div>
      {leftOrRight === "right" && (
        <div className="flex w-full h-full items-center justify-center rounded-md shadow-md overflow-hidden transition-all blob2 mt-4 md:mt-0">
          <img
            src={`/projects/${imgName}`}
            alt=""
            className="hover:scale-90 transition-all"
          />
        </div>
      )}
    </motion.div>
  );
};
