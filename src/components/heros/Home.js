import React from "react";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const HeroAbout = ({ className }) => {
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "logan-corner.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920, grayscale: false) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      Tag="section"
      className={`hero is-large faded ${className}`}
      fluid={data.desktop.childImageSharp.fluid}
    >
      <div className="hero-body">
        <div className="container">
          {/* <h2 className="title has-text-white">
            <span className="has-background-black py3 px5">Adam J. Arling</span>
          </h2>
          <h3 className="subtitle has-text-white">
            <span className="has-background-black py3 px5">
              Recording Engineer, Live &amp; Studio Musician, UI/JavaScript
              developer
            </span>
          </h3> */}
        </div>
      </div>
    </BackgroundImage>
  );
};

const StyledBackgroundSection = styled(HeroAbout)`
  color: white;
  /* &:before {
    opacity: 0.5 !important;
  } */
`;

export default StyledBackgroundSection;
