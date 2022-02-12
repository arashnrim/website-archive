import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { GoStar, GoRepoForked } from "react-icons/go";
import { useInView } from "react-intersection-observer";

import Repository from "../../utils/Repository";
import Section from "../Section";

interface WorksProps {
  repos: Repository[];
}

/**
 * Use this dictionary to ignore any project names where necessary. The values should be a string of what is
 * returned from GitHub's API.
 */
const projectIgnore = ["arashnrim", "assignment-parser"];

const Works = ({ repos }: WorksProps) => {
  const [reference, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Section id="works">
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
          A <span className="text-indigo-400">collaborative</span>,{" "}
          <span className="text-indigo-400">open-minded</span>, and{" "}
          <span className="text-indigo-400">practical</span> tinkerer.
        </h1>
        <p className="w-full mt-5 text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
          Who knew playing around is a good thing?
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        <p className="lg:w-2/3">
          To build up my skills, test out what I know, and learn new things,
          experimenting here and there can be greatly beneficial.
          <br />
          <br />
          The result of the tinkering I&apos;ve done is the several projects
          that I have been a part of. No matter a school project or a personal
          project, I make it an effort to give everything I do my best shot.
          Doing so allows me to learn what I do best and showcase the quality of
          work I offer at the same time.
          <br />
          <br />I am a huge fan of open source after learning more about the
          concept of learning in public. To share what I know, I strive to make
          most, if not all, of my personal projects open-source. Here are some
          of them (the most recently updated!); for more, feel free to take a
          look at my{" "}
          <a
            href="https://github.com/arashnrim"
            target="_blank"
            rel="noreferrer"
          >
            GitHub profile
          </a>
          !
        </p>
      </div>

      <div
        className="grid w-full grid-cols-1 gap-10 h-1/2 md:grid-cols-2"
        ref={reference}
      >
        {repos
          .filter(
            (repo) =>
              !repo.name.includes("archive") &&
              !(repo.language == null) &&
              !projectIgnore.includes(repo.name) // Filtering for non-code and archive repositories
          )
          .map((repo, index) => {
            return (
              <div
                className={`flex flex-col col-span-1 p-10 h-auto rounded-2xl text-white border-2 border-indigo-400 ${
                  repo.archived ? "border-opacity-50" : "border-opacity-100"
                }`}
                key={repo.id}
              >
                <h1 className="mt-2 text-4xl font-extrabold break-words">
                  {repo.name}
                </h1>
                <p className="flex justify-center font-mono lg:justify-start">
                  {repo.language}
                  {" | " +
                    new Date(repo.created_at).toLocaleDateString("en-SG", {
                      year: "numeric",
                    })}
                </p>
                <p className="flex justify-center space-x-3 font-mono lg:justify-start">
                  {repo.stargazers_count > 0 && (
                    <span className="inline-flex flex-row items-center">
                      <GoStar />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span className="inline-flex flex-row items-center">
                      <GoRepoForked />
                      {repo.forks_count}
                    </span>
                  )}
                </p>

                <p className="mt-2">{repo.description}</p>

                <div className="flex flex-row mt-5 space-x-5 place-self-end">
                  <a
                    className="w-8 h-8"
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    title={"Go to " + repo.name + "'s project repository"}
                    aria-label={"Go to " + repo.name + "'s project repository"}
                  >
                    <FaGithub className="w-full h-full" />
                  </a>
                  {repo.homepage ? (
                    <a
                      className="w-8 h-8"
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      title={"Go to " + repo.name + "'s project page"}
                      aria-label={"Go to " + repo.name + "'s project page"}
                    >
                      <FaGlobe className="w-full h-full" />
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </Section>
  );
};

export default Works;
