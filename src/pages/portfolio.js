import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import HeroProgrammingPage from "../components/heros/ProgrammingPage";
import Portfolio from "../components/Portfolio";

const PortfolioPage = () => (
  <Layout>
    <Seo title="Portfolio" />
    <HeroProgrammingPage />
    <Portfolio />
  </Layout>
);

export default PortfolioPage;
