import React from "react";
import Card from "./Card";

export default function Portfolio() {
  return (
    <>
      <section className="hero is-dark">
        <div className="hero-body">
          <div className="container">
            <h2 className="title">Portfolio</h2>
            <h3 className="subtitle">...and web projects</h3>
            <div className=" content">
              <p>
                Innovative and proactive Front-End Developer capable of
                developing component-based, JavaScript web applications for
                demanding clients. Talented in building front-end stacks, team
                leadership and independent problem-solving. Highly organized
                multitasker with expertise in scheduling projects, enhancing
                designs and verifying code. Prepared to offer React, JavaScript
                and UX abilities in challenging roles.
              </p>
              <p>
                I currently work for{" "}
                <a href="https://www.library.northwestern.edu/" target="_blank">
                  Northwestern University Libraries Repository and Digital
                  Curation department,
                </a>{" "}
                writing open-source, repository applications which digitize the
                world's cultural heritage assets.
              </p>
            </div>
            <Card />
          </div>
        </div>
      </section>
    </>
  );
}
