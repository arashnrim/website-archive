import Section from "../Section";

const stages = [
  {
    name: "Pre-education",
    description:
      "As a young child, I was fond of how computers worked and constantly explored the things around me. I frequently played around with the people around me, which eventually planted my passion for tech.",
  },
  {
    name: "Primary school",
    description:
      "My passion was fuelled further when I joined the school's ICT Club. On the other hand, I began to develop myself holistically and got the opportunity to serve as a prefect under the school's Prefectorial Board.",
  },
  {
    name: "Secondary school",
    description:
      "Secondary school was where I gained first-hand experience with code and many more things. Whether it's writing my first program or my first volunteering activity, secondary school introduced me to many first-times that I'm grateful for.",
  },
];

interface AboutProps {
  yearOfBirth: number;
}

const About = ({ yearOfBirth }: AboutProps) => {
  return (
    <Section id="about">
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
          A <span className="text-blue-400">growing individual</span>, a{" "}
          <span className="text-blue-400">helpful guide</span>, and a{" "}
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
          always change, I hope to continue developing myself on my &apos;right
          track&apos;.
        </p>
      </div>
      <div className="flex flex-col w-full h-auto space-y-5 text-left xl:flex-row xl:space-x-5 xl:space-y-0">
        {stages.map((stage, index) => (
          <div
            className="relative flex flex-row justify-center flex-1 space-x-5 text-left xl:flex-col xl:space-x-0 xl:space-y-10"
            key={stage.name}
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
          </div>
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
