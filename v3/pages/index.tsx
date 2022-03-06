import React from "react";
import { GetStaticProps } from "next";

import Repository from "../utils/Repository";
import Meta from "../components/Meta";
import Layout from "../components/Layout";
import Hero from "../components/Index/Hero";
import About from "../components/Index/About";
import Skills from "../components/Index/Skills";
import Works from "../components/Index/Works";
import Contact from "../components/Index/Contact";
import Frontmatter from "../utils/Posts";

interface IndexProps {
  repos: Repository[];
  posts: Frontmatter[];
  YEAR_OF_BIRTH: number;
}

export const getStaticProps: GetStaticProps = async () => {
  const YEAR_OF_BIRTH = process.env.YEAR_OF_BIRTH;

  const reposData = await fetch(
    "https://api.github.com/users/arashnrim/repos?sort=updated&per_page=8"
  );
  const postsData = await fetch("https://blog.arash.codes/api/posts");
  const repos = await reposData.json();
  const posts = await postsData.json();
  return {
    props: { repos, posts, YEAR_OF_BIRTH },
    revalidate: 86400,
  };
};

const Index = ({ repos, posts, YEAR_OF_BIRTH = 0 }: IndexProps) => (
  <>
    <Meta />
    <Layout className="mb-10 md:mb-20">
      <Hero />
      <About yearOfBirth={YEAR_OF_BIRTH} />
      <Skills />
      <Works repos={repos} />
      <Contact posts={posts} />
    </Layout>
  </>
);

export default Index;
