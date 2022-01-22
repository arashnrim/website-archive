import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Section from "../Section";
import {
  FaHeart,
  FaHandshake,
  FaCalendar,
  FaMountain,
  FaCheckDouble,
} from "react-icons/fa";

const stages = [
  {
    name: "Pre-education",
    year: "As a young child, I’ve always been interested in computers. From exploring what's on my family computer to spending free time in kindergarten at the computer station, I can be described as being inclined towards computers and was fascinated at how they work in our daily lives.",
  },
  {
    name: "Primary school",
    year: "My passion was fuelled further when I joined the school's ICT Club. As someone quick to grasp technology, I managed to pick up essential skills — like using the Office suite of apps and media creation — and put them to use.",
  },
  {
    name: "Secondary school",
    year: "Secondary school was where I gained my first-hand experience with code, and it certainly was the most impactful in terms of exposing me to the world of technology. I gained the skill of coding, UI design, algorithmic thinking, and much more over my four years in secondary school.",
  },
];

const values = [
  {
    name: "Care",
    category: "Personal | Interpersonal",
    icon: <FaHeart />,
    definition:
      "Having serious attention or consideration applied to doing something; feeling concern or interest.",
  },
  {
    name: "Respect",
    category: "Personal | Interpersonal",
    icon: <FaHandshake />,
    definition:
      "Having due regard for (someone's feelings, wishes, or rights).",
  },
  {
    name: "Responsibility",
    category: "Personal | Interpersonal",
    icon: <FaCalendar />,
    definition:
      "Being accountable for something where accountability is due and appropriate.",
  },
  {
    name: "Perseverance",
    category: "Personal",
    icon: <FaMountain />,
    definition:
      "Persistent in doing something despite difficulty or delay in achieving success.",
  },
  {
    name: "Integrity",
    category: "Personal",
    icon: <FaCheckDouble />,
    definition: "Being honest and having strong moral principles.",
  },
];

interface AboutProps {
  yearOfBirth: number;
}

const About = ({ yearOfBirth }: AboutProps) => {
  const [stagesReference, stagesInView] = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });
  const [valuesReference, valuesInView] = useInView({
    threshold: 0.45,
    triggerOnce: true,
  });

  return (
    <Section id="about">
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
          An <span className="text-blue-400">active contributor</span>, a{" "}
          <span className="text-blue-400">life-changer</span>, and a{" "}
          <span className="text-blue-400">friend</span> to all.
        </h1>
        <p className="w-full mt-5 text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
          Bold dreams for an individual, but a goal for me.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        <p className="text-sm lg:w-2/3 sm:text-lg 2xl:text-xl">
          I wish to develop myself into someone who contributes back to society,
          influences the lives of many, and be there for those I’m close with.
          <br />
          <br />
          In a way, I’m already working towards that idealistic goal. I like to
          think that the many relationships I’ve forged over{" "}
          {yearOfBirth ? new Date().getFullYear() - yearOfBirth : "many"} years
          of my life have allowed me to learn from others as much as others have
          learned from me. Many have known me to be someone friendly, trusted,
          and responsible, and while behaviours, beliefs, and attitudes can
          always change, I hope to continue developing myself on my &#39;right
          track&#39;.
        </p>
      </div>
      <div
        className="flex flex-col w-full h-auto space-y-5 text-left lg:flex-row lg:text-center lg:space-x-5 lg:space-y-0"
        ref={stagesReference}
      >
        {stages.map((stage, index) => (
          <motion.div
            className="relative flex flex-row justify-center flex-1 space-x-5 lg:flex-col lg:justify-start lg:items-center lg:space-x-0 lg:space-y-10"
            key={stage.name}
            initial={{ opacity: 0 }}
            animate={stagesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.25 }}
          >
            <div
              className={`h-full lg:h-2 w-2 lg:w-full absolute left-0 lg:top-0 bg-blue-400 ${
                index === 0
                  ? "rounded-t-full lg:rounded-t-none lg:rounded-l-full"
                  : ""
              }`}
            />
            <div className="h-full pl-10 lg:flex lg:flex-col lg:pl-0 lg:items-center">
              <h2 className="text-2xl">{stage.name}</h2>
              <p className="text-sm sm:text-lg 2xl:text-xl">{stage.year}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="self-start h-auto mt-10 text-sm sm:text-lg 2xl:text-xl lg:w-2/3">
        As I grew up, I realised the importance of having core values I can hold
        on to for guidance. While they may subtly change as I gain better
        insight to them, I try my best to ensure the core meaning of a value is
        upheld.
      </p>
      <div
        className="grid w-full grid-cols-1 mt-10 md:grid-rows-3 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-6 lg:gap-x-10 gap-y-10"
        ref={valuesReference}
      >
        {values.map((value, index) => {
          return (
            <motion.div
              className={`break-words p-10 col-span-1 ${
                index > 2 ? "md:col-span-3" : "md:col-span-2" // Manually altering the size of the last two values to even out the spacing
              } lg:row-span-1 h-auto rounded-2xl border-2 border-blue-400`}
              key={value.name}
              initial={{ opacity: 0 }}
              animate={valuesInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <span className="flex justify-center text-4xl lg:justify-start">
                {value.icon}
              </span>
              <h1
                className={`mt-2 ${
                  value.name.length > 9 ? "text-xl sm:text-4xl" : "text-4xl"
                }`}
              >
                {value.name}
              </h1>
              <p className="font-mono">{value.category}</p>
              <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
                {value.definition}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default About;
