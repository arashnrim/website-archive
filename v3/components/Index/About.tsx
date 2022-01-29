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
    description:
      "As a young child, I&apos;ve always been interested in computers. From exploring what&apos;s on my family computer to spending free time in kindergarten at the computer station, I can be described as being inclined towards computers and was fascinated at how they work in our daily lives.",
  },
  {
    name: "Primary school",
    description:
      "My passion was fuelled further when I joined the school&apos;s ICT Club. As someone quick to grasp technology, I managed to pick up essential skills — like using the Office suite of apps and media creation — and put them to use.",
  },
  {
    name: "Secondary school",
    description:
      "Secondary school was where I gained my first-hand experience with code, and it certainly was the most impactful in terms of exposing me to the world of technology. I gained the skill of coding, UI design, algorithmic thinking, and much more over my four years in secondary school.",
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

  return (
    <Section id="about">
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
          A <span className="text-blue-400">value-adder</span>, a{" "}
          <span className="text-blue-400">motivator</span>, and a{" "}
          <span className="text-blue-400">friend</span> to many.
        </h1>
        <p className="w-full mt-5 text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
          Bold dreams for an individual, but a goal for me.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        <p className="lg:w-2/3">
          I wish to develop myself into someone who contributes back to society,
          influences the lives of many, and be there for those I&apos;m close
          with. Granted, I believe that I still have quite a long way to go
          before I might be able to do such things with a large impact.
          Regardless, I hope to keep trying at every opportunity I get.
          <br />
          <br />
          In a way, I&apos;m already working towards that idealistic goal. I
          like to think that the many relationships I&apos;ve forged over the{" "}
          {yearOfBirth ? new Date().getFullYear() - yearOfBirth : "many"} years
          of my life have allowed me to learn from others as much as others have
          learned from me. Many have known me to be someone friendly, trusted,
          and responsible, and while behaviours, beliefs, and attitudes can
          always change, I hope to continue developing myself on my &#39;right
          track&#39;.
        </p>
      </div>
      <div
        className="flex flex-col w-full h-auto space-y-5 text-left xl:flex-row xl:space-x-5 xl:space-y-0"
        ref={stagesReference}
      >
        {stages.map((stage, index) => (
          <motion.div
            className="relative flex flex-row justify-center flex-1 space-x-5 text-left xl:flex-col xl:space-x-0 xl:space-y-10"
            key={stage.name}
            initial={{ opacity: 0 }}
            animate={stagesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.25 }}
          >
            <div
              className={`h-full xl:h-2 w-2 xl:w-full absolute left-0 lg:top-0 bg-blue-400 ${
                index === 0 &&
                "rounded-t-full xl:rounded-t-none xl:rounded-l-full"
              }`}
            />
            <div className="h-full pl-10 xl:flex xl:flex-col xl:px-5">
              <h2 className="text-2xl">{stage.name}</h2>
              <p className="pt-2">{stage.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="self-start h-auto mt-10 lg:w-2/3">
        As I grew up, I realised the importance of having core values I can hold
        on to for guidance. While they may subtly change as I gain better
        insight to them, I try my best to ensure the core meaning of a value is
        upheld. In general, I like to believe that I guide myself with{" "}
        <b>care</b>, <b>respect</b>, <b>responsibility</b>, <b>perseverance</b>{" "}
        and <b>integrity</b>. I hope to continually be concerned about myself,
        the people I know, and the things I work on, conform to what is right,
        owe up to mistakes, show resistance to giving up, and be transparent and
        truthful in what I do.
      </p>
    </Section>
  );
};

export default About;
