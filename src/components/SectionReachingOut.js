import React from "react";

export default function SectionReachingOut() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">Video Production</h2>
        <div className="content">
          <p>
            As something new to experiment with during the Covid 2020 season, I
            formed a purposely playful{" "}
            <a href="https://furbaby.rocks">a garage rock band, FURBABY</a> so I
            can try "so bad it's good" video production. It's still bad, but
            well... Rome wasn't built in a day. It's been plenty of fun.
          </p>
        </div>

        <figure className="image is-16by9">
          <iframe
            className="has-ratio"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/vU_-n-9qmPk?showinfo=0"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </figure>
      </div>
    </section>
  );
}
