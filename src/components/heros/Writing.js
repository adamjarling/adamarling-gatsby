import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Writing() {
  var data = useStaticQuery(graphql`
    query {
      hookForm: file(relativePath: { eq: "medium-article-hook-form.jpg" }) {
        childImageSharp {
          fluid(quality: 80, maxWidth: 1200, grayscale: false) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      openGraph: file(relativePath: { eq: "medium-article-open-graph.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      router: file(relativePath: { eq: "medium-article-router.jpg" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1600, grayscale: false) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const photos = [
    {
      url:
        "https://medium.com/javascript-in-plain-english/using-react-hook-form-in-component-tests-497180abf3c0",
      image: data.hookForm.childImageSharp.fluid,
    },
    {
      url:
        "https://medium.com/swlh/share-website-preview-images-in-gatsby-10cac58dd4d7",
      image: data.openGraph.childImageSharp.fluid,
    },
    {
      url:
        "https://medium.com/@aarling/mocking-a-react-router-match-object-in-your-component-tests-fa95904dcc55",
      image: data.router.childImageSharp.fluid,
    },
  ];

  return (
    <section className="hero is-black">
      <div className="hero-body">
        <div className="container">
          <h2 className="title">Writing</h2>
          <h3 className="subtitle">Medium Articles...</h3>
          <div className="content">
            <p>
              <a href="https://medium.com/@aarling" target="_blank">
                https://medium.com/@aarling
              </a>
            </p>
          </div>

          <div className="columns is-multiline">
            {photos.map((photo) => (
              <div className="column is-half">
                <a href={photo.url} target="_blank">
                  <Img fluid={photo.image} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
