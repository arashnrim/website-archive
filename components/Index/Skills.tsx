import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faJava,
  faPython,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBullhorn,
  faGuitar,
  faPencilRuler,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Skills = () => (
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
          A programming language created by Oracle for a variety of purposes;
          mostly used by me for developing Android applications.
        </p>
      </div>
      <div className="col-span-1 p-10 h-auto rounded-2xl text-white bg-gradient-to-br from-purple-600 to-indigo-600 shadow-lg">
        <FontAwesomeIcon icon={faAndroid} size="3x" />
        <h1 className="mt-2 text-4xl font-bold font-heading">Kotlin</h1>
        <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
          A programming language created by JetBrains for a variety of purposes;
          mostly used by me for developing Android applications.
        </p>
      </div>
      <div className="col-span-1 md:col-span-2 p-10 h-auto rounded-2xl text-white bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">
        <FontAwesomeIcon icon={faPython} size="3x" />
        <h1 className="mt-2 text-4xl font-bold font-heading">Python</h1>
        <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
          A programming language powerful to have a wide variety of purposes;
          mostly used by me in academic learning and program development.
        </p>
      </div>
    </div>

    <p className="self-start text-sm sm:text-lg 2xl:text-xl lg:w-2/3">
      Not to mention, I&#39;ve gained some other useful skills beyond the scope
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
);

export default Skills;
