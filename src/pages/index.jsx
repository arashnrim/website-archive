import * as React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faDev,
  faSwift,
  faJava,
  faAndroid,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPencilRuler,
  faUsers,
  faGuitar,
  faBullhorn,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

import SEO from "../components/SEO";
import Layout from "../components/Layout";
import profilePicture from "../../public/arash.jpg";

export const getStaticProps = async () => {
  const data = await fetch(
    "https://api.github.com/users/arashnrim/repos?sort=updated"
  );
  const repos = await data.json();
  return {
    props: { repos },
  };
};

const Introduction = ({ repos }) => (
  <main className="bg-gray-800 text-white">
    <SEO page="👋" />
    <Layout>
      {/* Hero */}
      <div className="justify-center items-center flex flex-col lg:flex-row space-y-6 md:space-y-6 lg:space-y-0 lg:space-x-16 min-h-screen min-w-screen px-7 bg-gray-900 rounded-b-3xl">
        <div className="w-1/2 max-w-sm">
          <Image
            className="pointer-events-none object-contain rounded-full bg-gray-900"
            src={profilePicture}
            alt="Arash Nur Iman"
            placeholder="blur"
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
            I'm Arash Nur Iman.
          </h1>
          <p className="mt-5 text-xl sm:text-2xl">
            I'm a student with a passion for making a change through technology.
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
              href="https://dev.to/arashnrim"
              target="_blank"
              rel="noreferrer"
              aria-label="Dev.to profile"
            >
              <FontAwesomeIcon icon={faDev} size="2x" />
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
      <div className="justify-center items-center flex flex-col min-h-screen h-auto min-w-screen text-center lg:text-left px-7 md:px-12 lg:px-24">
        <h1 className="mt-20 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading">
          An <span className="text-blue-400">active contributor</span>, a{" "}
          <span className="text-blue-400">life-changer</span>, and a{" "}
          <span className="text-blue-400">friend</span> to all.
        </h1>
        <p className="mt-5 w-full text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-heading">
          Bold dreams for an individual, but a goal for me.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row lg:space-x-5">
          <p className="text-sm sm:text-lg 2xl:text-xl lg:w-2/3">
            I wish to develop myself into someone who contributes back to
            society, influences the life of many, and be there for those I’m
            close with.
            <br />
            <br />
            In a way, I’m already working my way towards that idealistic goal —
            I like to think that the many relationships I’ve forged over 16
            years of my life have allowed me to learn from others as much as
            others have learned from me. I’ve been known by many to be someone
            friendly, trusted, and responsible, and I hope to continue
            developing myself on the right track.
          </p>
        </div>
        <div className="mt-10 flex lg:flex-col min-h-screen-1/2 h-auto w-screen p-10 text-left lg:text-center">
          <div className="grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-2 lg:h-2 w-4 lg:w-auto">
            <div className="row-span-1 lg:col-span-1 rounded-t-full lg:rounded-t-none lg:rounded-l-full bg-gradient-to-b lg:bg-gradient-to-r from-blue-700 to-blue-600"></div>
            <div className="row-span-1 lg:col-span-1 bg-gradient-to-b lg:bg-gradient-to-r from-blue-600 to-blue-500"></div>
            <div className="row-span-1 lg:col-span-1 rounded-b-full lg:rounded-b-none lg:rounded-r-full bg-gradient-to-b lg:bg-gradient-to-r from-blue-500 to-blue-400"></div>
          </div>
          <div className="ml-5 lg:ml-0 lg:mt-5 grid grid-rows-3 lg:grid-rows-1 lg:grid-cols-3">
            <div className="p-5 flex flex-col lg:justify-content lg:items-center gap-y-2 col-span-1 lg:row-span-1">
              <h2 className="text-2xl font-heading font-bold">Pre-education</h2>
              <p className="w-10/12">
                As a young child, I've always been interested in computers. From
                exploring the computer laptop to spending free time in
                kindergarten at the computer station, I was always fascinated
                and inclined towards computers and seeing how they work in our
                daily lives.
              </p>
            </div>
            <div className="p-5 flex flex-col lg:justify-content lg:items-center gap-y-2 col-span-1 lg:row-span-1">
              <h2 className="text-2xl font-heading font-bold">
                Primary school
              </h2>
              <p className="w-10/12">
                My passion fuelled further when I joined the school's ICT Club.
                As someone quick to grasp knowledge of technology, I managed to
                pick up basic skills — like using the Office suite of apps and
                media creation — and put them to use.
              </p>
            </div>
            <div className="p-5 flex flex-col lg:justify-content lg:items-center gap-y-2 col-span-1 lg:row-span-1">
              <h2 className="text-2xl font-heading font-bold">
                Secondary school
              </h2>
              <p className="w-10/12">
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
          As I grew up, I realised the importance of have core values I can hold
          on to for guidance. While they may subtly change as I gain better
          insight to them, I try my best to ensure the core meaning of a value
          is upheld.
        </p>
        <div className="mt-10 mb-10 w-full grid justify-center grid-rows-5 md:grid-rows-3 lg:grid-rows-2 md:grid-cols-2 lg:grid-cols-6 gap-10">
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
              Having due regard for (someone's feelings, wishes, or rights).
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
      <div className="justify-center items-center flex flex-col min-h-screen h-auto min-w-screen text-center lg:text-left px-7 md:px-12 lg:px-24">
        <h1 className="mt-10 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading">
          A <span className="text-red-400">learner</span>, a{" "}
          <span className="text-red-400">developer</span>, and an{" "}
          <span className="text-red-400">aspiring student</span>.
        </h1>
        <p className="mt-5 w-full text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-heading">
          Every opportunity brings something to learn.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row lg:space-x-5">
          <p className="text-sm sm:text-lg 2xl:text-xl lg:w-2/3">
            As I continue to develop myself as an individual, I also pick up
            valuable skills that help be become more of a developer as I go on.
            <br />
            <br />
            Starting in 2018 when I picked up{" "}
            <a
              href="https://swift.org"
              target="_blank"
              rel="noreferrer"
              className="transition-all text-red-400 hover:text-red-300 font-bold"
            >
              Swift
            </a>
            , my first programming language, without any prior introduction to
            the world of code, my passion for technology further fuelled as I
            got to grasp more concepts, participate in more events, and expand
            my knowledge. Thus far, the skills of{" "}
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
              purposes; mostly used for developing Android applications.
            </p>
          </div>
          <div className="col-span-1 p-10 h-auto rounded-2xl text-white bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg">
            <FontAwesomeIcon icon={faAndroid} size="3x" />
            <h1 className="mt-2 text-4xl font-bold font-heading">Kotlin</h1>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
              A programming language created by JetBrains for a variety of
              purposes; mostly used for developing Android applications.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 p-10 h-auto rounded-2xl text-white bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h1 className="mt-2 text-4xl font-bold font-heading">Python</h1>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
              A programming language powerful to have a wide variety of
              purposes; mostly used in academic learning and program
              development.
            </p>
          </div>
        </div>

        <p className="self-start text-sm sm:text-lg 2xl:text-xl lg:w-2/3">
          Not to mention, I've gained some other useful skills beyond the scope
          of programming as well.
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
      <div className="justify-center items-center flex flex-col min-h-screen h-auto min-w-screen text-center lg:text-left px-7 md:px-12 lg:px-24">
        <h1 className="mt-10 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading">
          A <span className="text-indigo-400">tinkerer</span>, an{" "}
          <span className="text-indigo-400">experimenter</span>, and a{" "}
          <span className="text-indigo-400">developer</span>.
        </h1>
        <p className="mt-5 w-full text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-heading">
          Who knew playing around is a good thing?
        </p>
        <div className="mt-10 flex flex-col lg:flex-row lg:space-x-5">
          <p className="text-sm sm:text-lg 2xl:text-xl lg:w-2/3">
            To build up on my skills, test out what I know, and to learn new
            things, playing around is a good thing.
            <br />
            <br />
            The result of the tinkering I’ve done is the several projects that I
            have been a part of. No matter a school project or a personal
            project, I make it an effort to give everything that I do my best
            shot. Doing so allows me to learn what I do best and showcase the
            quality of work I give at the same time.
          </p>
        </div>

        <div className="mt-10 mb-20 w-full h-1/2 grid grid-cols-1 md:grid-cols-2 gap-10">
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
