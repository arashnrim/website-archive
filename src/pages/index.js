import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
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
  faUser,
  faTools,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/Layout";

const Introduction = () => (
  <main className="bg-gray-800 text-white">
    <Layout>
      {/* Hero */}
      <div className="justify-center items-center flex flex-col lg:flex-row space-y-6 md:space-y-6 lg:space-y-0 lg:space-x-16 min-h-screen min-w-screen px-7 bg-gray-900 rounded-b-3xl">
        <StaticImage
          className="pointer-events-none w-1/2 max-w-xs ring-8 ring-white ring-opacity-10 rounded-full bg-gray-900"
          src="../images/arash.jpg"
          alt="Arash Nur Iman"
          placeholder="dominantColor"
        />
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
              href="https://github.com/arashnrim"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://dev.to/arashnrim" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faDev} size="2x" />
            </a>
            <a href="mailto:hello@arashnrim.me">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="justify-center items-center flex flex-col min-h-screen h-auto min-w-screen text-center lg:text-left px-7 md:px-12 lg:px-24">
        <h1 className="mt-10 text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl font-bold font-heading">
          An <span className="text-blue-400">active contributor</span>, a{" "}
          <span className="text-blue-400">life-changer</span>, and a{" "}
          <span className="text-blue-400">friend</span> to all.
        </h1>
        <p className="mt-5 w-full text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-heading">
          Bold dreams for an individual, but a goal for me.
        </p>
        <div className="mt-10 mb-10 flex flex-col lg:flex-row lg:space-x-5">
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

          <div className="mt-10 lg:mt-0 lg:mb-0 lg:justify-center lg:items-center lg:flex lg:w-1/3">
            <button className="transition-all h-12 lg:h-16 w-40 lg:w-56 lg:text-xl rounded-lg bg-black text-white font-medium font-mono shadow-xl hover:shadow-lg focus:shadow-none">
              <FontAwesomeIcon icon={faUser} color="white" /> About
            </button>
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
            the world of code, my passion for technology further fueled as I got
            to grasp more concepts, participate in more events, and expand my
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

          <div className="mt-10 lg:mt-0 lg:mb-0 lg:justify-center lg:items-center lg:flex lg:w-1/3">
            <button className="transition-all h-12 lg:h-16 w-40 lg:w-56 lg:text-xl rounded-lg bg-black text-white font-medium font-mono shadow-xl hover:shadow-lg focus:shadow-none">
              <FontAwesomeIcon icon={faTools} color="white" /> Skills
            </button>
          </div>
        </div>

        <div className="w-full h-1/2 grid grid-cols-1 md:grid-cols-3 mt-10 mb-10 gap-10">
          <div className="col-span-1 md:col-span-2 p-10 lg:h-screen-1/3 rounded-2xl text-white bg-gradient-to-br from-red-600 to-yellow-600">
            <FontAwesomeIcon icon={faSwift} size="3x" />
            <h1 className="mt-2 text-4xl font-bold font-heading">Swift</h1>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl-sm">
              A programming language created by Apple for developing native
              applications for its platforms of iOS, macOS, iPadOS, tvOS, and
              watchOS.
            </p>
          </div>
          <div className="col-span-1 p-10 lg:h-screen-1/3 rounded-2xl text-white bg-gradient-to-br from-yellow-600 to-yellow-600 shadow-lg">
            <FontAwesomeIcon icon={faJava} size="3x" />
            <h1 className="mt-2 text-4xl font-bold font-heading">Java</h1>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
              A programming language created by Oracle for a variety of
              purposes; mostly used for developing Android applications.
            </p>
          </div>
          <div className="col-span-1 p-10 lg:h-screen-1/3 rounded-2xl text-white bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg">
            <FontAwesomeIcon icon={faAndroid} size="3x" />
            <h1 className="mt-2 text-4xl font-bold font-heading">Kotlin</h1>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
              A programming language created by JetBrains for a variety of
              purposes; mostly used for developing Android applications.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 p-10 lg:h-screen-1/3 rounded-2xl text-white bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h1 className="mt-2 text-4xl font-bold font-heading">Python</h1>
            <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
              A programming language powerful to have a wide variety of
              purposes; mostly used in academic learning and program
              development.
            </p>
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
        <div className="mt-10 mb-10 flex flex-col lg:flex-row lg:space-x-5">
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

          <div className="mt-10 lg:mt-0 lg:mb-0 lg:justify-center lg:items-center lg:flex lg:w-1/3">
            <button className="transition-all h-12 lg:h-16 w-40 lg:w-56 lg:text-xl rounded-lg bg-black text-white font-medium font-mono shadow-xl hover:shadow-lg focus:shadow-none">
              <FontAwesomeIcon icon={faLaptopCode} color="white" /> Works
            </button>
          </div>
        </div>
      </div>
    </Layout>
  </main>
);

export default Introduction;
