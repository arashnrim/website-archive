import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
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
};

const Works = ({ repos }: WorksProps) => {
  const [reference, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <Section>
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
          The result of the tinkering I&#39;ve done is the several projects that
          I have been a part of. No matter a school project or a personal
          project, I make it an effort to give everything I do my best shot.
          Doing so allows me to learn what I do best and showcase the quality of
          work I offer at the same time.
        </p>
      </div>

      <div
        className="w-full h-1/2 grid grid-cols-1 md:grid-cols-2 gap-10"
        ref={reference}
      >
        {repos
          .filter(
            (repo) =>
              !repo.name.includes("archive") &&
              !(repo.language == null) &&
              !projectIgnore.includes(repo.name) // Filtering for non-code and archive repositories
          )
          .map((repo, index) => (
            <motion.div
              className={`flex flex-col col-span-1 p-10 h-auto rounded-2xl text-white border-2 border-indigo-400 ${
                repo.archived ? "border-opacity-50" : "border-opacity-100"
              }`}
              key={repo.id}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h1 className="mt-2 text-4xl font-bold font-heading break-words">
                {repo.name in projectOverrides
                  ? projectOverrides[repo.name]
                  : repo.name}
              </h1>
              <p className="font-mono">
                {repo.language}
                {repo.created_at ? " | " + repo.created_at.substr(0, 4) : ""}
              </p>
              <p className="mt-2 text-sm sm:text-lg 2xl:text-xl">
                {repo.description}
              </p>

              <div className="flex flex-row place-self-end mt-5 space-x-5">
                <a
                  className="h-8 w-8"
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  title={"Go to" + repo.name + "'s project repository"}
                  aria-label={"Go to" + repo.name + "'s project repository"}
                >
                  <FaGithub className="transition-opacity hover:opacity-75 h-full w-full" />
                </a>
                {repo.homepage ? (
                  <a
                    className="h-8 w-8"
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    title={"Go to" + repo.name + "'s project page"}
                    aria-label={"Go to" + repo.name + "'s project page"}
                  >
                    <FaGlobe className="transition-opacity hover:opacity-75 h-full w-full" />
                  </a>
                ) : (
                  ""
                )}
              </div>
            </motion.div>
          ))}
      </div>
    </Section>
  );
};

export default Works;
