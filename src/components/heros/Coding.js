import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";

export default function Coding() {
  var data = useStaticQuery(graphql`
    query {
      loud: file(relativePath: { eq: "portfolio-loud.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1200, grayscale: false) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      barbie: file(relativePath: { eq: "portfolio-barbie.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1200, grayscale: false) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      nulib: file(relativePath: { eq: "portfolio-nulib.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tradeR: file(relativePath: { eq: "portfolio-trade-r.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const images = [
    data.loud.childImageSharp.fluid,
    data.barbie.childImageSharp.fluid,
    data.nulib.childImageSharp.fluid,
    data.tradeR.childImageSharp.fluid,
  ];

  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h2 className="title">Portfolio</h2>
          <h3 className="subtitle">UI, JavaScript, React, Web Applications</h3>

          <div className="columns is-multiline">
            {images.map((image) => (
              <div className="column is-half">
                <Link to="/portfolio">
                  <Img fluid={image} />
                </Link>
              </div>
            ))}
          </div>

          <Link to="/portfolio" className="button is-primary">
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
