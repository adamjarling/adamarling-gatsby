import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import HomeSlider from "../components/HomeSlider";
import RockingHero from "../components/heros/Rocking";
import CodingHero from "../components/heros/Coding";
import WritingHero from "../components/heros/Writing";
import SectionReachingOut from "../components/SectionReachingOut";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HomeSlider />
    <CodingHero />
    <RockingHero />
    <WritingHero />
    <SectionReachingOut />
  </Layout>
);

export default IndexPage;
