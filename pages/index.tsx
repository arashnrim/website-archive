import * as React from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faGithub,
  faJava,
  faPython,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBullhorn,
  faEnvelope,
  faGlobe,
  faGuitar,
  faPencilRuler,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import profilePicture from "../public/arash.jpeg";

interface License {
  name: string;
}

interface Repository {
  id: number;
  name: string;
  description: string;
  language?: string;
  license?: License;
  html_url?: string;
  homepage: string;
  archived: boolean;
}

interface IntroductionProps {
  repos: Repository[];
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(
    "https://api.github.com/users/arashnrim/repos?sort=updated"
  );
  const repos = await data.json();
  return {
    props: { repos },
    revalidate: 86400,
  };
};

const Introduction = ({ repos }: IntroductionProps) => (
  <main className="bg-gray-800 text-white">
    <SEO page="👋" />
    <Layout>
      {/* Hero */}
      <div className="justify-center items-center flex flex-col lg:flex-row space-y-6 md:space-y-6 lg:space-y-0 lg:space-x-16 min-h-screen min-w-screen bg-gray-900 rounded-b-3xl">
        <div className="w-1/2 max-w-sm bg-gray-900 ">
          <Image
            className="pointer-events-none rounded-full"
            src={profilePicture}
            alt={"Arash Nur Iman"}
            layout={"responsive"}
            priority={true}
            quality={60}
          />
        </div>
        <div className="flex-row text-center lg:text-left">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-heading">
            <span role="img" aria-label="Waving hand">
              👋
            </span>{" "}
            Hello, world!
          </p>
          <h1 className="mt-2.5 text-4xl sm:text-6xl md:text-6xl 2xl:text-7xl font-heading font-semibold">
            I&#39;m Arash Nur Iman.
          </h1>
          <p className="mt-5 text-xl sm:text-2xl">
            I&#39;m a student with a passion for making a change through
            technology.
          </p>

          <div className="mt-5 space-x-6">
            <a
              className="transition-all hover:opacity-75"
              href="https://github.com/arashnrim"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              className="transition-all hover:opacity-75"
              href="mailto:hello@arashnrim.me"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="justify-center items-center flex flex-col min-h-screen h-auto min-w-screen text-center lg:text-left px-7 md:px-12 lg:px-24 pt-24 space-y-10">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading">
            An <span className="text-blue-400">active contributor</span>, a{" "}
            <span className="text-blue-400">life-changer</span>, and a{" "}
            <span className="text-blue-400">friend</span> to all.
          </h1>
          <p className="mt-5 w-full text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-heading">
            Bold dreams for an individual, but a goal for me.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-5">
          <p className="lg:w-2/3 text-sm sm:text-lg 2xl:text-xl">
            I wish to develop myself into someone who contributes back to
            society, influences the lives of many, and be there for those I’m
            close with.
            <br />
            <br />
            In a way, I’m already working towards that idealistic goal. I like
            to think that the many relationships I’ve forged over 16 years of my
            life have allowed me to learn from others as much as others have
            learned from me. Many have known me to be someone friendly, trusted,
            and responsible, and while its certainty remains uncertain, I hope
            to continue developing myself on the right track.
          </p>
        </div>
        <div className="flex lg:flex-col min-h-screen-1/2 h-auto w-full text-left lg:text-center">
          <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-2 lg:h-2 w-10 sm:w-5 lg:w-full">
            <div className="row-span-1 lg:col-span-1 rounded-t-full lg:rounded-t-none lg:rounded-l-full bg-blue-400 opacity-60" />
            <div className="row-span-1 lg:col-span-1 bg-blue-400 opacity-75" />
            <div className="row-span-1 lg:col-span-1 bg-blue-400" />
          </div>
          <div className="ml-5 lg:ml-0 lg:mt-5 grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3">
            <div className="p-5 flex flex-col justify-content lg:items-center gap-y-2 col-span-1 lg:row-span-1 h-auto">
              <h2 className="text-2xl font-heading font-bold">Pre-education</h2>
              <p className="w-10/12 text-sm sm:text-lg 2xl:text-xl">
                As a young child, I’ve always been interested in computers. From
                exploring the computer laptop to spending free time in
                kindergarten at the computer station, I was always fascinated
                and inclined towards computers and seeing how they work in our
                daily lives.
              </p>
            </div>
            <div className="p-5 flex flex-col justify-content lg:items-center gap-y-2 col-span-1 lg:row-span-1 h-auto">
              <h2 className="text-2xl font-heading font-bold">
                Primary school
              </h2>
              <p className="w-10/12 text-sm sm:text-lg 2xl:text-xl">
                My passion was fuelled further when I joined the school&#39;s
                ICT Club. As someone quick to grasp technology, I managed to
                pick up essential skills — like using the Office suite of apps
                and media creation — and put them to use.
              </p>
            </div>
            <div className="p-5 flex flex-col justify-content lg:items-center gap-y-2 col-span-1 lg:row-span-1 h-auto">
              <h2 className="text-2xl font-heading font-bold">
                Secondary school
              </h2>
              <p className="w-10/12 text-sm sm:text-lg 2xl:text-xl">
                Secondary school was where I gained my first-hand experience
                with code, and it certainly was the most impactful in terms of
                exposing me to the world of technology. I gained the skill of
                code, UI design, algorithmic thinking, and much more over my
                four years in secondary school.
              </p>
            </div>
          </div>
        </div>
        <p className="mt-10 self-start text-sm sm:text-lg 2xl:text-xl lg:w-2/3 h-auto">
          As I grew up, I realised the importance of having core values I can
          hold on to for guidance. While they may subtly change as I gain better
          insight to them, I try my best to ensure the core meaning of a value
          is upheld.
        </p>
        <div className="mt-10 w-full grid justify-center grid-rows-5 md:grid-rows-3 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="break-words p-10 gap-y-2 col-span-1 md:col-span-2 md:row-span-1 h-auto rounded-2xl border-2 border-blue-400">
            <h1 className="mt-2 text-4xl font-bold font-heading">Care</h1>
            <p className="font-mono">Personal | Interpersonal</p>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
              Having serious attention or consideration applied to doing
              something; feeling concern or interest.
            </p>
          </div>
          <div className="break-words p-10 gap-y-2 col-span-1 lg:col-span-2 lg:row-span-1 h-auto rounded-2xl border-2 border-blue-400">
            <h1 className="mt-2 text-4xl font-bold font-heading">Respect</h1>
            <p className="font-mono">Personal | Interpersonal</p>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
              Having due regard for (someone&#39;s feelings, wishes, or rights).
            </p>
          </div>
          <div className="break-words p-10 gap-y-2 col-span-1 lg:col-span-2 lg:row-span-1 h-auto rounded-2xl border-2 border-blue-400">
            <h1 className="mt-2 text-4xl font-bold font-heading">
              Responsibility
            </h1>
            <p className="font-mono">Personal</p>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
              Being accountable for something where accountability is due and
              appropriate.
            </p>
          </div>
          <div className="break-words p-10 gap-y-2 col-span-1 lg:col-span-3 lg:row-span-1 h-auto rounded-2xl border-2 border-blue-400">
            <h1 className="mt-2 text-4xl font-bold font-heading">Integrity</h1>
            <p className="font-mono">Personal</p>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
              Being honest and having strong moral principles.
            </p>
          </div>
          <div className="break-words p-10 gap-y-2 col-span-1 lg:col-span-3 lg:row-span-1 h-auto rounded-2xl border-2 border-blue-400">
            <h1 className="mt-2 text-4xl font-bold font-heading">
              Perseverance
            </h1>
            <p className="font-mono">Personal</p>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
              Persistent in doing something despite difficulty or delay in
              achieving success.
            </p>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="justify-center items-center flex flex-col min-h-screen h-auto min-w-screen text-center lg:text-left px-7 md:px-12 lg:px-24 pt-24 space-y-10">
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
            <a
              href="https://swift.org"
              target="_blank"
              rel="noreferrer"
              className="transition-all text-red-400 hover:text-red-300 font-bold"
            >
              Swift
            </a>
            , my first programming language. I had no prior introduction to the
            world of code, but my passion for technology further fuelled as I
            grasped more concepts, participated in more events, and expanded my
            knowledge. Thus far, the skills of{" "}
            <a
              href="https://swift.org"
              target="_blank"
              rel="noreferrer"
              className="transition-all text-red-400 hover:text-red-300 font-bold"
            >
              Swift
            </a>{" "}
            and{" "}
            <a
              href="https://python.org"
              target="_blank"
              rel="noreferrer"
              className="transition-all text-blue-400 hover:text-blue-300 font-bold"
            >
              Python
            </a>{" "}
            sit comfortably in my toolbox, with{" "}
            <a
              href="https://oracle.com/java/"
              target="_blank"
              rel="noreferrer"
              className="transition-all text-yellow-500 hover:text-yellow-400 font-bold"
            >
              Java
            </a>{" "}
            and{" "}
            <a
              href="https://kotlinlang.org/"
              target="_blank"
              rel="noreferrer"
              className="transition-all text-indigo-400 hover:text-indigo-300 font-bold"
            >
              Kotlin
            </a>{" "}
            still a work-in-progress.
          </p>
        </div>

        <div className="w-full h-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mb-10 gap-10">
          <div className="col-span-1 md:col-span-2 p-10 h-auto rounded-2xl text-white bg-gradient-to-br from-red-600 to-yellow-600">
            <FontAwesomeIcon icon={faSwift} size="3x" />
            <h1 className="mt-2 text-4xl font-bold font-heading">Swift</h1>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
              A programming language created by Apple for developing native
              applications for its platforms of iOS, macOS, iPadOS, tvOS, and
              watchOS.
            </p>
          </div>
          <div className="col-span-1 p-10 h-auto rounded-2xl text-white bg-gradient-to-br from-yellow-600 to-yellow-600 shadow-lg">
            <FontAwesomeIcon icon={faJava} size="3x" />
            <h1 className="mt-2 text-4xl font-bold font-heading">Java</h1>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
              A programming language created by Oracle for a variety of
              purposes; mostly used by me for developing Android applications.
            </p>
          </div>
          <div className="col-span-1 p-10 h-auto rounded-2xl text-white bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg">
            <FontAwesomeIcon icon={faAndroid} size="3x" />
            <h1 className="mt-2 text-4xl font-bold font-heading">Kotlin</h1>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
              A programming language created by JetBrains for a variety of
              purposes; mostly used by me for developing Android applications.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 p-10 h-auto rounded-2xl text-white bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h1 className="mt-2 text-4xl font-bold font-heading">Python</h1>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
              A programming language powerful to have a wide variety of
              purposes; mostly used by me in academic learning and program
              development.
            </p>
          </div>
        </div>

        <p className="self-start text-sm sm:text-lg 2xl:text-xl lg:w-2/3">
          Not to mention, I&#39;ve gained some other useful skills beyond the
          scope of programming as well.
        </p>

        <div className="mt-10 mb-10 w-full h-1/2 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex gap-y-2 items-center flex-col">
            <FontAwesomeIcon icon={faUsers} size="lg" />
            <h2 className="text-center text-2xl font-heading font-bold">
              Leadership
            </h2>
          </div>
          <div className="flex gap-y-2 items-center flex-col">
            <FontAwesomeIcon icon={faGuitar} size="lg" />
            <h2 className="text-center text-2xl font-heading font-bold">
              Guitar Playing
            </h2>
          </div>
          <div className="flex gap-y-2 items-center flex-col">
            <FontAwesomeIcon icon={faBullhorn} size="lg" />
            <h2 className="text-center text-2xl font-heading font-bold">
              Presenting
            </h2>
          </div>
          <div className="flex gap-y-2 items-center flex-col">
            <FontAwesomeIcon icon={faPencilRuler} size="lg" />
            <h2 className="text-center text-2xl font-heading font-bold">
              UI Design
            </h2>
          </div>
        </div>
      </div>

      {/* Works */}
      <div className="justify-center items-center flex flex-col min-h-screen h-auto min-w-screen text-center lg:text-left px-7 md:px-12 lg:px-24 py-24 space-y-10">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading">
            A <span className="text-indigo-400">tinkerer</span>, an{" "}
            <span className="text-indigo-400">experimenter</span>, and a{" "}
            <span className="text-indigo-400">developer</span>.
          </h1>
          <p className="mt-5 w-full text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-heading">
            Who knew playing around is a good thing?
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-5">
          <p className="text-sm sm:text-lg 2xl:text-xl lg:w-2/3">
            Playing around is a good thing to build up my skills, test out what
            I know, and learn new things.
            <br />
            <br />
            The result of the tinkering I&#39;ve done is the several projects
            that I have been a part of. No matter a school project or a personal
            project, I make it an effort to give everything I do my best shot.
            Doing so allows me to learn what I do best and showcase the quality
            of work I offer at the same time.
          </p>
        </div>

        <div className="w-full h-1/2 grid grid-cols-1 md:grid-cols-2 gap-10">
          {repos
            .filter(
              (repo) =>
                !repo.name.includes("archive") && !(repo.language == null)
            )
            .map((repo) => (
              <div
                className={`col-span-1 p-10 h-auto rounded-2xl text-white border-2 border-indigo-400 ${
                  repo.archived ? "border-opacity-50" : "border-opacity-100"
                }`}
                key={repo.id}
              >
                <h1 className="mt-2 text-4xl font-bold font-heading capitalize break-words">
                  {repo.name.replace(/-/g, " ")}
                </h1>
                <p className="font-mono">
                  {repo.language}
                  {repo.license ? " | " + repo.license.name : ""}
                </p>
                <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
                  {repo.description}
                </p>

                <div className="mt-5 space-x-2">
                  <a
                    className="transition-all hover:opacity-75"
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={repo.name + " project repository"}
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                  {repo.homepage ? (
                    <a
                      className="transition-all hover:opacity-75"
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={repo.name + " project repository"}
                    >
                      <FontAwesomeIcon icon={faGlobe} size="lg" />
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  </main>
);

export default Introduction;
