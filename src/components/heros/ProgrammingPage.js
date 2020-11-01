import React from "react";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const HeroProgrammingPage = ({ className }) => {
  var data = useStaticQuery(graphql`
    query {
      desktop: file(
        relativePath: { eq: "mitchell-luo-rxQoIGVKWxM-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      Tag="section"
      className={`hero is-medium faded ${className}`}
      fluid={data.desktop.childImageSharp.fluid}
    >
      <div className="hero-body is-relative">
        <div className="container">
          <h2 className="title has-text-white">Portfolio</h2>
        </div>
        {/* <span>
          Photo by{" "}
          <a href="https://unsplash.com/@mitchel3uo?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Mitchell Luo
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/programming?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
            Unsplash
          </a>
        </span> */}
      </div>
    </BackgroundImage>
  );
};

const StyledBackgroundSection = styled(HeroProgrammingPage)`
  color: white;
  /* &:before {
    opacity: 0.5 !important;
  } */
`;

export default StyledBackgroundSection;
