import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { GoStar, GoRepoForked } from "react-icons/go";
import { motion } from "framer-motion";
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
const projectIgnore = ["arashnrim", "AssignmentParser"];

/**
 * Use this dictionary to override any project names where necessary. The key values should be a string of what is
 * returned from GitHub's API and the value a string of what should be displayed on the website.
 */
const projectOverrides: { [key: string]: string } = {
  Liste: "Listé",
  "balloon-satellite": "Balloon Satellite",
  website: "Website",
  "whats-next": "What's Next?",
};

const Works = ({ repos }: WorksProps) => {
  const [reference, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Section id="works">
      <div>
        <h1 className="text-4xl font-bold sm:text-5xl lg:text-6xl 2xl:text-7xl font-heading">
          A <span className="text-indigo-400">tinkerer</span>, an{" "}
          <span className="text-indigo-400">experimenter</span>, and a{" "}
          <span className="text-indigo-400">developer</span>.
        </h1>
        <p className="w-full mt-5 text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-heading">
          Who knew playing around is a good thing?
        </p>
      </div>
      <div className="flex flex-col lg:flex-row lg:space-x-5">
        <p className="text-sm sm:text-lg 2xl:text-xl lg:w-2/3">
          To build up my skills, test out what I know, and learn new things,
          experimenting here and there can be greatly beneficial.
          <br />
          <br />
          The result of the tinkering I&#39;ve done is the several projects that
          I have been a part of. No matter a school project or a personal
          project, I make it an effort to give everything I do my best shot.
          Doing so allows me to learn what I do best and showcase the quality of
          work I offer at the same time.
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
              <motion.div
                className={`flex flex-col col-span-1 p-10 h-auto rounded-2xl text-white border-2 border-indigo-400 ${
                  repo.archived ? "border-opacity-50" : "border-opacity-100"
                }`}
                key={repo.id}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h1 className="mt-2 text-4xl font-bold break-words font-heading">
                  {repo.name in projectOverrides
                    ? projectOverrides[repo.name]
                    : repo.name}
                </h1>
                <p className="flex items-center font-mono">
                  {repo.language}
                  {" | " +
                    new Date(repo.created_at).toLocaleDateString("en-SG", {
                      year: "numeric",
                    })}
                </p>
                <p className="flex items-center space-x-3 font-mono">
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

                <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
                  {repo.description}
                </p>

                <div className="flex flex-row mt-5 space-x-5 place-self-end">
                  <a
                    className="w-8 h-8"
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    title={"Go to" + repo.name + "'s project repository"}
                    aria-label={"Go to" + repo.name + "'s project repository"}
                  >
                    <FaGithub className="w-full h-full transition-opacity duration-200 hover:opacity-75" />
                  </a>
                  {repo.homepage ? (
                    <a
                      className="w-8 h-8"
                      href={repo.homepage}
                      target="_blank"
                      rel="noreferrer"
                      title={"Go to" + repo.name + "'s project page"}
                      aria-label={"Go to" + repo.name + "'s project page"}
                    >
                      <FaGlobe className="w-full h-full transition-opacity duration-200 hover:opacity-75" />
                    </a>
                  ) : (
                    ""
                  )}
                </div>
              </motion.div>
            );
          })}
      </div>
    </Section>
  );
};

export default Works;
