import Section from "../Section";

const Contact = () => {
  return (
    <Section>
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
          Thank you for stopping by; go forth and{" "}
          <span className="text-green-400">create awesome things</span>!
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        <p className="lg:w-2/3">
          Thank you for taking the time to read through the website. I&apos;d
          love to hear from you — whoever you are — and I&apos;ll be more than
          willing to have a chat! Feel free to{" "}
          <a href="mailto:hello@arashnrim.me" target="_blank" rel="noreferrer">
            say hi through email
          </a>{" "}
          or take a look at the other platforms I&apos;m in (either below or
          above). I&apos;m seeking ways to step out of my comfort zone from time
          to time, and getting to say hi and meet people is a pretty nice way to
          do so!
          <br />
          <br />
          While you&apos;re at it, feel free to{" "}
          <a href="https://blog.arash.codes" target="_blank" rel="noreferrer">
            take a look at my blog
          </a>
          , too. I still have a long way to go in everything, but I hope to
          document my journey getting there on my blog!
        </p>
      </div>
    </Section>
  );
};

export default Contact;
