import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "gatsby";

// var socialMedia = [
//   {
//     service: "Instagram",
//     url: "https://www.instagram.com/furbaby_rocks/",
//     icon: <FaInstagram />,
//   },
//   {
//     service: "YouTube",
//     url: "https://www.youtube.com/channel/UCSoulFKYB6zGzHhbV-rkPzg",
//     icon: <FaYoutube />,
//   },
//   {
//     service: "Facebook",
//     url: "https://www.facebook.com/adam.arling",
//     icon: <FaFacebook />,
//   },
//   {
//     service: "Email",
//     url: "mailto:aarling@gmail.com",
//     icon: <FaEnvelope />,
//   },
// ];

var socialLinks = [
  {
    icon: <FaGithub />,
    service: "Github",
    url: "https://github.com/adamjarling",
  },
  {
    icon: <FaInstagram />,
    service: "Instagram",
    url: "https://www.instagram.com/adamjarling/",
  },
  {
    icon: <FaFacebook />,
    service: "Facebook",
    url: "https://facebook.com/adamarling",
  },
  {
    icon: <FaLinkedin />,
    service: "Linked In",
    url: "https://www.linkedin.com/in/adamjarling/",
  },
  {
    icon: <FaEnvelope />,
    service: "Email",
    url: "mailto:aarling@gmail.com",
  },
];

export default function Nav() {
  const [burgerOpen, setBurgerOpen] = useState();

  const handleClick = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <nav
      className="navbar is-black"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <Link
          to="/"
          className="navbar-item is-size-4 has-text-primary is-family-secondary"
        >
          Adam J. Arling
        </Link>

        <a
          role="button"
          className={`navbar-burger burger ${burgerOpen ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded={`${burgerOpen ? "true" : "false"}`}
          data-target="navbarBasicExample"
          onClick={handleClick}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu ${burgerOpen ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          {socialLinks.map((sm) => (
            <div key={sm.service} className="navbar-item">
              <a
                href={sm.url}
                className="is-flex"
                target="_blank"
                style={{ alignItems: "center" }}
                title={sm.service}
              >
                <span className="icon is-size-4">{sm.icon}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
