import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faJava,
  faPython,
  faSwift,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBullhorn,
  faGuitar,
  faPencilRuler,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Section from "../Section";
import InlineLink from "../InlineLink";

const languages = [
  {
    extended: true,
    color: "red",
    icon: faSwift,
    title: "Swift",
    description:
      "A programming language created by Apple for developing native applications for its platforms of iOS, macOS, iPadOS, tvOS, and watchOS.",
  },
  {
    extended: false,
    color: "yellow",
    icon: faJava,
    title: "Java",
    description:
      "A programming language created by Oracle for a variety of purposes; mostly used by me for developing Android applications.",
  },
  {
    extended: false,
    color: "purple",
    icon: faAndroid,
    title: "Kotlin",
    description:
      "A programming language creaed by JetBrains for a variety of purposes; mostly used by me for developing Android applications.",
  },
  {
    extended: true,
    color: "blue",
    icon: faPython,
    title: "Python",
    description:
      "A programming language powerful to have and has a wide variety of purposes; mostly used by me in academic learning and program development.",
  },
];

const skills = [
  {
    icon: faUsers,
    name: "Leadership",
  },
  {
    icon: faGuitar,
    name: "Guitar Playing",
  },
  {
    icon: faBullhorn,
    name: "Presenting",
  },
  {
    icon: faPencilRuler,
    name: "UI Design",
  },
];

interface LanguageProps {
  extended: boolean;
  color: string;
  icon: IconDefinition;
  title: string;
  description: string;
  inView: boolean;
  index: number;
}

interface SkillProps {
  icon: IconDefinition;
  name: string;
  inView: boolean;
  index: number;
}

const Language = ({
  extended,
  icon,
  color,
  title,
  description,
  inView,
  index,
}: LanguageProps) => (
  <motion.div
    className={`col-span-1 ${
      extended ? "md:col-span-2" : ""
    } p-10 h-auto rounded-2xl text-white border-2 border-${color}-400`}
    initial={{ opacity: 0 }}
    animate={inView ? { opacity: 1 } : { opacity: 0 }}
    transition={{ delay: index * 0.2 }}
  >
    <FontAwesomeIcon icon={icon} size="3x" />
    <h1 className="mt-2 text-4xl font-bold font-heading">{title}</h1>
    <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">{description}</p>
  </motion.div>
);

const Skill = ({ icon, name, inView, index }: SkillProps) => (
  <motion.div
    className="flex gap-y-2 items-center flex-col"
    initial={{ opacity: 0 }}
    animate={inView ? { opacity: 1 } : { opacity: 0 }}
    transition={{ delay: index * 0.25 }}
  >
    <FontAwesomeIcon icon={icon} size="lg" />
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
          sit comfortably in my toolbox, with{" "}
          <InlineLink link="https://oracle.com/java" redirect={true}>
            Java
          </InlineLink>{" "}
          and{" "}
          <InlineLink link="https://kotlinlang.org" redirect={true}>
            Kotlin
          </InlineLink>{" "}
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
            title={language.title}
            description={language.description}
            key={language.title}
            inView={languagesInView}
            index={index}
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
