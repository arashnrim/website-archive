import { motion } from "framer-motion";
import { ReactElement } from "react";
import { FaCode, FaFolder, FaPencilRuler, FaUsers } from "react-icons/fa";
import {
  SiAndroidstudio,
  SiCplusplus,
  SiJava,
  SiJavascript,
  SiKotlin,
  SiPython,
  SiSwift,
  SiTypescript,
  SiVisualstudiocode,
  SiXcode,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import InlineLink from "../InlineLink";
import Section from "../Section";

const languages = [
  {
    extended: false,
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
    icon: <SiSwift />,
    title: "SwiftUI",
    year: "2021",
    tools: [{ name: "Xcode", icon: <SiXcode /> }],
  },
  {
    extended: false,
    color: "blue",
    inProgress: false,
    icon: <SiTypescript />,
    title: "TypeScript",
    year: "2021",
    tools: [{ name: "VS Code", icon: <SiVisualstudiocode /> }],
  },
  {
    extended: false,
    color: "amber",
    inProgress: true,
    icon: <SiJavascript />,
    title: "JavaScript",
    year: "2021",
    tools: [{ name: "VS Code", icon: <SiVisualstudiocode /> }],
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
      { name: "VS Code", icon: <SiVisualstudiocode /> },
    ],
  },
  {
    extended: false,
    color: "blue",
    inProgress: true,
    icon: <SiCplusplus />,
    title: "C++",
    year: "2021",
    tools: [{ name: "VS Code", icon: <SiVisualstudiocode /> }],
  },
  {
    extended: false,
    color: "amber",
    inProgress: true,
    icon: <SiJava />,
    title: "Java",
    year: "2019",
    tools: [{ name: "Android Studio", icon: <SiAndroidstudio /> }],
  },
  {
    extended: false,
    color: "violet",
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
    description:
      "Having tested the waters with front-end development, I've explored the concept of UI design as well. I hone the skills of understanding layouts for a practical user experience, basic understanding of colour use, and designing with the consideration of accessibility.",
  },
  {
    icon: <FaFolder />,
    name: "Organisation",
    description:
      "Over the years, I've come to realise the importance of having an organised system for many things — assignments and documents are just a few of these things. I've developed the skill of being able to store and retrieve efficiently through proper organisation over the years.",
  },
  {
    icon: <FaUsers />,
    name: "Collaboration",
    description:
      "Especially in secondary school, I've been through the thick and thin of collaborating with people from different backgrounds. While the experience is always different, I hope to bring the best of me into group discussions or when other opportunities for collaboration exists.",
  },
  {
    icon: <FaCode />,
    name: "Computational Thinking",
    description:
      "Taught in secondary school, algorithmic thinking prepares me with the skills required not just to improve how I code, but to also sharpen other soft skills like critical thinking. By being able to notice patterns, decompose tough problems, generalise solutions, and plan algorithms, my way of developing is structured.",
  },
  // Not too confident in this skill yet, unfortunately!
  // {
  //   icon: <FaUsers />,
  //   name: "Facilitation",
  //   description:
  //     "Being a student councillor in the later parts of my secondary school education exposed me to multiple opportunities to facilitate classes and discussions during specific events. While this skill I still have yet to reinforce, I have some experience of facilitation during my school years.",
  // },
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
  description: string;
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
    initial={{ opacity: 0 }}
    animate={inView ? { opacity: 1 } : { opacity: 0 }}
    transition={{ delay: index * 0.2 }}
  >
    <span className="flex justify-center text-4xl lg:justify-start">
      {icon}
    </span>
    <h1
      className={`mt-2 ${
        title.length > 7 ? "text-xl md:text-4xl" : "text-4xl"
      }`}
    >
      {title}
    </h1>
    <p className="mt-2 font-mono">{year}</p>
    {!tools.length ? (
      ""
    ) : (
      <p className="mt-5 text-sm font-extrabold sm:text-lg 2xl:text-xl">
        Tools used
      </p>
    )}
    <div className="flex justify-center mt-2 space-x-5 lg:justify-start">
      {tools.map((tool) => (
        <div className="flex flex-col items-center" key={tool.name}>
          <span className="text-4xl">{tool.icon}</span>
          <p className="pt-1">{tool.name}</p>
        </div>
      ))}
    </div>
  </motion.div>
);

const Skill = ({ icon, name, inView, index, description }: SkillProps) => (
  <motion.div
    className="flex flex-col items-center gap-y-2"
    initial={{ opacity: 0 }}
    animate={inView ? { opacity: 1 } : { opacity: 0 }}
    transition={{ delay: index * 0.25 }}
  >
    <span className="text-2xl">{icon}</span>
    <h2 className="text-2xl text-center">{name}</h2>
    <p className="text-center">{description}</p>
  </motion.div>
);

const Skills = () => {
  var [languagesReference, languagesInView] = useInView({
    threshold: 0.45,
    triggerOnce: true,
  });
  var [skillsReference, skillsInView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Manual override for smaller devices
  if (isMobile) {
    languagesInView = true;
    skillsInView = true;
  }

  return (
    <Section id="skills">
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
          A <span className="text-red-400">learner</span>, a{" "}
          <span className="text-red-400">developer</span>, and an{" "}
          <span className="text-red-400">aspiring student</span>.
        </h1>
        <p className="w-full mt-5 text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
          Every opportunity brings something to learn.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        <p className="lg:w-2/3">
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
        className="grid w-full grid-cols-1 gap-10 mt-10 mb-10 h-1/2 md:grid-cols-2 lg:grid-cols-3"
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

      <p className="self-start lg:w-2/3">
        Not to mention, I&#39;ve gained some other useful skills beyond the
        scope of programming as well.
      </p>

      <div
        className="grid w-full grid-cols-1 gap-10 mt-10 mb-10 h-1/2 md:grid-cols-2"
        ref={skillsReference}
      >
        {skills.map((skill, index) => (
          <Skill
            icon={skill.icon}
            name={skill.name}
            key={skill.name}
            inView={skillsInView}
            index={index}
            description={skill.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;
