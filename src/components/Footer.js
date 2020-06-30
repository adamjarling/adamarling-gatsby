import React from "react";
import config from "../../config";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="has-text-centered">
        <ul className="contact">
          {config.socialLinks.map((social) => {
            const { icon, url } = social;
            return (
              <li className={`${icon}`} key={url}>
                <a href={url}>{url}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
