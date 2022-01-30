import Image from "next/image";

import profilePicture from "../../public/arash.jpg";
import Socials from "../Socials";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-black to-[#0a0a0a] rounded-b-3xl min-h-screen py-20 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center h-full px-10 space-y-10 lg:flex-row min-w-screen md:px-20 lg:space-y-0 lg:space-x-20">
        <object className="w-1/3 max-w-xs">
          <Image
            className="pointer-events-none rounded-3xl"
            src={profilePicture}
            alt="Arash Nur Iman"
            layout="responsive"
            priority
            quality={60}
          />
        </object>
        <div className="flex-row text-center lg:text-left">
          <p className="text-2xl md:text-3xl xl:text-4xl">
            <span role="img" aria-label="Waving hand">
              👋
            </span>{" "}
            Hello, world!
          </p>
          <h1 className="mt-2.5 text-4xl md:text-6xl xl:text-7xl">
            I&apos;m Arash Nur Iman.
          </h1>
          <p className="max-w-4xl mt-5 text-xl md:text-2xl">
            I&apos;m a student developer from Singapore ardent about creating
            designed, intuitive, and practical products using technology.
          </p>
          <Socials />
        </div>
      </div>
    </section>
  );
};

export default Hero;
