import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import { Repository } from "../../utils/Repository";

interface WorksProps {
  repos: Repository[];
}

const Works = ({ repos }: WorksProps) => (
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
        Playing around is a good thing to build up my skills, test out what I
        know, and learn new things.
        <br />
        <br />
        The result of the tinkering I&#39;ve done is the several projects that I
        have been a part of. No matter a school project or a personal project, I
        make it an effort to give everything I do my best shot. Doing so allows
        me to learn what I do best and showcase the quality of work I offer at
        the same time.
      </p>
    </div>

    <div className="w-full h-1/2 grid grid-cols-1 md:grid-cols-2 gap-10">
      {repos
        .filter(
          (repo) => !repo.name.includes("archive") && !(repo.language == null)
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
);

export default Works;
