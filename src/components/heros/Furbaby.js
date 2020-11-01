import React from "react";
import BackgroundImage from "gatsby-background-image";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

const HeroFurbaby = ({ className }) => {
  var data = useStaticQuery(graphql`
    query {
      desktop: file(relativePath: { eq: "BSVT6000.JPG" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 1920, grayscale: false) {
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
        <div className="container"></div>
      </div>
    </BackgroundImage>
  );
};

const StyledBackgroundSection = styled(HeroFurbaby)`
  color: white;
  /* &:before {
    opacity: 0.5 !important;
  } */
`;

export default StyledBackgroundSection;
