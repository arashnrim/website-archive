import { motion } from "framer-motion";
import { ReactElement } from "react";
import { FaCode, FaFolder, FaPencilRuler, FaUsers } from "react-icons/fa";
import {
  SiCplusplus,
  SiGo,
  SiHtml5,
  SiPython,
  SiSwift,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiCss3,
  SiTailwindcss,
  SiGatsby,
} from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import Section from "../Section";

const languages = [
  {
    color: "red",
    inProgress: true,
    icon: <SiSwift />,
    title: "Swift",
    year: 2018,
  },
  {
    color: "blue",
    inProgress: false,
    icon: <SiTypescript />,
    title: "TypeScript",
    year: 2021,
  },
  {
    color: "red",
    inProgress: false,
    icon: <SiHtml5 />,
    title: "HTML*",
    year: 2019,
  },
  {
    color: "amber",
    inProgress: false,
    icon: <SiJavascript />,
    title: "JavaScript",
    year: 2020,
  },
  {
    color: "blue",
    inProgress: false,
    icon: <SiPython />,
    title: "Python",
    year: 2019,
  },
  {
    color: "blue",
    inProgress: true,
    icon: <SiCplusplus />,
    title: "C++",
    year: 2021,
  },
  // {
  //   extended: false,
  //   color: "amber",
  //   inProgress: true,
  //   icon: <SiJava />,
  //   title: "Java",
  //   year: "2019",
  //   tools: [{ name: "Android Studio", icon: <SiAndroidstudio /> }],
  // },
  // {
  //   extended: false,
  //   color: "violet",
  //   inProgress: true,
  //   icon: <SiKotlin />,
  //   title: "Kotlin",
  //   year: "2019",
  //   tools: [{ name: "Android Studio", icon: <SiAndroidstudio /> }],
  // },
  {
    color: "blue",
    inProgress: true,
    icon: <SiGo />,
    title: "Go",
    year: 2021,
  },
  {
    color: "blue",
    inProgress: false,
    icon: <SiCss3 />,
    title: "CSS*",
    year: 2021,
  },
];

const frameworks = [
  {
    color: "white",
    inProgress: false,
    icon: <SiNextdotjs />,
    title: "Next.js",
    year: 2021,
    languages: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    color: "indigo",
    inProgress: true,
    icon: <SiGatsby />,
    title: "Gatsby",
    year: 2020,
    languages: [
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "JavaScript", icon: <SiJavascript /> },
    ],
  },
  {
    color: "blue",
    inProgress: false,
    icon: <SiTailwindcss />,
    title: "Tailwind CSS",
    year: 2021,
    languages: [{ name: "CSS", icon: <SiCss3 /> }],
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

interface Languages {
  icon: ReactElement;
  name: string;
}

interface GridItemProps {
  color: string;
  inProgress: boolean;
  icon: ReactElement;
  title: string;
  year: number;
  inView: boolean;
  index: number;
  languages?: Languages[];
}

interface SkillProps {
  icon: ReactElement;
  name: string;
  inView: boolean;
  index: number;
  description: string;
}

const GridItem = ({
  icon,
  color,
  inProgress,
  title,
  year,
  inView,
  index,
  languages,
}: GridItemProps) => (
  <motion.div
    className={`col-span-1
       p-10 h-auto rounded-2xl text-white border-2 ${
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
    {languages && (
      <>
        <p className="mt-5 text-sm font-extrabold sm:text-lg 2xl:text-xl">
          Written with
        </p>

        <div className="flex justify-center mt-2 space-x-5 lg:justify-start">
          {languages &&
            languages.map((languages) => (
              <div className="flex flex-col items-center" key={languages.name}>
                <span className="text-4xl">{languages.icon}</span>
              </div>
            ))}
        </div>
      </>
    )}
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
    <p className="text-center md:w-2/3">{description}</p>
  </motion.div>
);

const Skills = () => {
  var [languagesReference, languagesInView] = useInView({
    threshold: 0.45,
    triggerOnce: true,
  });
  var [frameworksReference, frameworksInView] = useInView({
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
    frameworksInView = true;
    skillsInView = true;
  }

  return (
    <Section id="skills">
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
          A <span className="text-red-400">developer</span>, a{" "}
          <span className="text-red-400">self-directed learner</span>, and a{" "}
          <span className="text-red-400">student</span>.
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
          My programming journey started ~{new Date().getFullYear() - 2018}{" "}
          years ago. Since then, I&apos;ve explored several frontiers in the
          world of code — beginning from app development and now exploring front
          end development. I still have a long way to go from where I am now. No
          matter, over the years, I&apos;ve become introduced to an array of
          languages; some of them that I use now includes the ones below.
        </p>
      </div>

      <div
        className="grid w-full grid-cols-1 gap-10 mt-10 mb-10 h-1/2 md:grid-cols-2 lg:grid-cols-3"
        ref={languagesReference}
      >
        {languages
          .sort((a, b) => b.year - a.year)
          .map((language, index) => (
            <GridItem
              color={language.color}
              icon={language.icon}
              inProgress={language.inProgress}
              title={language.title}
              year={language.year}
              key={language.title}
              inView={languagesInView}
              index={index}
            />
          ))}
      </div>

      <small className="self-start">
        *Of course, these aren&apos;t really programming languages like the rest
        in the list!
      </small>

      <p className="self-start lg:w-2/3">
        Frameworks are fascinating snippets of languages that I employ for
        specific uses. I&apos;ve come across a few interesting ones that I hope
        to continue growing my knowledge about — I hope to be proficient enough
        to be able to comfortably use it in the context of real-world
        applications!{" "}
      </p>

      <div
        className="grid w-full grid-cols-1 gap-10 mt-10 mb-10 h-1/2 md:grid-cols-2 lg:grid-cols-3"
        ref={frameworksReference}
      >
        {frameworks
          .sort((a, b) => b.year - a.year)
          .map((framework, index) => (
            <GridItem
              color={framework.color}
              icon={framework.icon}
              inProgress={framework.inProgress}
              title={framework.title}
              year={framework.year}
              key={framework.title}
              inView={frameworksInView}
              index={index}
              languages={framework.languages}
            />
          ))}
      </div>

      <p className="self-start lg:w-2/3">
        I hope to develop myself in a holistic and all-rounded way. That&apos;s
        why I&apos;ve also placed the importance of picking up skills beyond
        just coding. While some of these skills may be employed as I code, I
        like to think of separate skills applicable beyond code too.
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
