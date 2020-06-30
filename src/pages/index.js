import React from "react";
import Layout from "../components/Layout";
import HomeHero from "../components/heros/Home";
import Portfolio from "../components/Portfolio";
import Music from "../components/Music";

const IndexPage = () => (
  <Layout>
    <HomeHero />
    <div className="columns">
      <div className="column">
        <Portfolio />
      </div>
      <div className="column">
        <Music />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
