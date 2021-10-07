import React, { ReactElement } from "react";
import {
  SiSwift,
  SiJava,
  SiKotlin,
  SiPython,
  SiTypescript,
  SiJavascript,
  SiCplusplus,
  SiXcode,
  SiVisualstudiocode,
  SiWebstorm,
  SiPycharm,
  SiClion,
  SiAndroidstudio,
} from "react-icons/si";
import { FaFolder, FaPencilRuler, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Section from "../Section";
import InlineLink from "../InlineLink";

const languages = [
  {
    extended: true,
    color: "red",
    inProgress: false,
    icon: <SiSwift />,
    title: "Swift",
    year: "2018",
    tools: [{ name: "Xcode", icon: <SiXcode /> }],
  },
  {
    extended: false,
    color: "blue",
    inProgress: true,
    icon: <SiTypescript />,
    title: "TypeScript",
    year: "2021",
    tools: [
      { name: "VSCode", icon: <SiVisualstudiocode /> },
      { name: "WebStorm ", icon: <SiWebstorm /> },
    ],
  },
  {
    extended: false,
    color: "yellow",
    inProgress: true,
    icon: <SiJavascript />,
    title: "JavaScript",
    year: "2021",
    tools: [
      { name: "VSCode", icon: <SiVisualstudiocode /> },
      { name: "WebStorm ", icon: <SiWebstorm /> },
    ],
  },
  {
    extended: true,
    color: "blue",
    inProgress: false,
    icon: <SiPython />,
    title: "Python",
    year: "2019",
    tools: [
      { name: "IDLE", icon: <SiPython /> },
      { name: "VSCode", icon: <SiVisualstudiocode /> },
      { name: "PyCharm", icon: <SiPycharm /> },
    ],
  },
  {
    extended: false,
    color: "blue",
    inProgress: true,
    icon: <SiCplusplus />,
    title: "C++",
    year: "2021",
    tools: [{ name: "CLion", icon: <SiClion /> }],
  },
  {
    extended: false,
    color: "yellow",
    inProgress: true,
    icon: <SiJava />,
    title: "Java",
    year: "2019",
    tools: [{ name: "Android Studio", icon: <SiAndroidstudio /> }],
  },
  {
    extended: false,
    color: "purple",
    inProgress: true,
    icon: <SiKotlin />,
    title: "Kotlin",
    year: "2019",
    tools: [{ name: "Android Studio", icon: <SiAndroidstudio /> }],
  },
];

const skills = [
  {
    icon: <FaPencilRuler />,
    name: "UI Design",
  },
  {
    icon: <FaFolder />,
    name: "Organisation",
  },
  {
    icon: <FaUsers />,
    name: "Collaboration",
  },
  {
    icon: <FaUsers />,
    name: "Facilitation",
  },
];

interface Tools {
  name: string;
  icon: ReactElement;
}

interface LanguageProps {
  extended: boolean;
  color: string;
  inProgress: boolean;
  icon: ReactElement;
  title: string;
  year: string;
  inView: boolean;
  index: number;
  tools: Tools[];
}

interface SkillProps {
  icon: ReactElement;
  name: string;
  inView: boolean;
  index: number;
}

const Language = ({
  extended,
  icon,
  color,
  inProgress,
  title,
  year,
  inView,
  index,
  tools,
}: LanguageProps) => (
  <motion.div
    className={`col-span-1 ${
      extended ? "md:col-span-2" : ""
    } p-10 h-auto rounded-2xl text-white border-2 ${
      inProgress ? "border-dashed border-opacity-50" : "border-opacity-100"
    } border-${color}-400`}
    // TODO: Figure out what went wrong with animations
    transition={{ delay: index * 0.2 }}
  >
    <span className="flex justify-center lg:justify-start text-4xl">
      {icon}
    </span>
    <h1 className="mt-2 text-4xl font-bold font-heading">{title}</h1>
    <p className="mt-2 font-mono">{year}</p>
    {!tools.length ? (
      ""
    ) : (
      <p className="mt-5 text-sm sm:text-lg 2xl:text-xl font-bold font-heading">
        Tools used
      </p>
    )}
    <div className="flex justify-center lg:justify-start mt-2 space-x-5">
      {tools.map((tool) => (
        <div className="flex flex-col items-center" key={tool.name}>
          <span className="text-4xl">{tool.icon}</span>
          <p className="pt-1">{tool.name}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skill = ({ icon, name, inView, index }: SkillProps) => (
  <motion.div
    className="flex gap-y-2 items-center flex-col"
    initial={{ opacity: 0 }}
    animate={inView ? { opacity: 1 } : { opacity: 0 }}
    transition={{ delay: index * 0.25 }}
  >
    <span className="text-2xl">{icon}</span>
    <h2 className="text-center text-2xl font-heading font-bold">{name}</h2>
  </motion.div>
);

const Skills = () => {
  const [languagesReference, languagesInView] = useInView({
    threshold: 0.45,
    triggerOnce: true,
  });
  const [skillsReference, skillsInView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  return (
    <Section>
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading">
          A <span className="text-red-400">learner</span>, a{" "}
          <span className="text-red-400">developer</span>, and an{" "}
          <span className="text-red-400">aspiring student</span>.
        </h1>
        <p className="mt-5 w-full text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-heading">
          Every opportunity brings something to learn.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        <p className="text-sm sm:text-lg 2xl:text-xl lg:w-2/3">
          As I continue to develop myself as an individual, I also pick up
          valuable skills that help me become more of a developer as I go on.
          <br />
          <br />
          It started in 2018 when I picked up{" "}
          <InlineLink link="https://swift.org" redirect={true}>
            Swift
          </InlineLink>
          , my first programming language. I had no prior introduction to the
          world of code, but my passion for technology further fuelled as I
          grasped more concepts, participated in more events, and expanded my
          knowledge. Thus far, the skills of Swift and{" "}
          <InlineLink link="https://python.org" redirect={true}>
            Python
          </InlineLink>{" "}
          sit comfortably in my toolbox, with a few other tools or languages
          still a work-in-progress.
        </p>
      </div>

      <div
        className="w-full h-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-10 gap-10"
        ref={languagesReference}
      >
        {languages.map((language, index) => (
          <Language
            color={language.color}
            extended={language.extended}
            icon={language.icon}
            inProgress={language.inProgress}
            title={language.title}
            year={language.year}
            key={language.title}
            inView={languagesInView}
            index={index}
            tools={language.tools ? language.tools : []}
          />
        ))}
      </div>

      <p className="text-sm sm:text-lg 2xl:text-xl lg:w-2/3">
        Not to mention, I&#39;ve gained some other useful skills beyond the
        scope of programming as well.
      </p>

      <div
        className="mt-10 mb-10 w-full h-1/2 grid grid-cols-1 md:grid-cols-4 gap-10"
        ref={skillsReference}
      >
        {skills.map((skill, index) => (
          <Skill
            icon={skill.icon}
            name={skill.name}
            key={skill.name}
            inView={skillsInView}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
