import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

export default function Rocking() {
  var data = useStaticQuery(graphql`
    query {
      blues: file(relativePath: { eq: "blues-heaven.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1200, grayscale: false) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      nikki: file(relativePath: { eq: "nikki-sixx.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sturgis: file(relativePath: { eq: "sturgis.JPG" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      studio: file(relativePath: { eq: "studio.jpg" }) {
        childImageSharp {
          fluid(quality: 70, maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <section className="hero is-dark">
      <div className="hero-body">
        <div className="container">
          <h2 className="title">Rockin'</h2>
          <h3 className="subtitle">Bands, Recording, Touring</h3>
          <div className="columns">
            <div className="column">
              <Img fluid={data.nikki.childImageSharp.fluid} />
            </div>
            <div className="column">
              <Img fluid={data.sturgis.childImageSharp.fluid} />
            </div>
            <div className="column">
              <Img fluid={data.blues.childImageSharp.fluid} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
