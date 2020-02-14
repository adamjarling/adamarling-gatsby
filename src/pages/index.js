import React from 'react';

import Layout from '../components/Layout';

import pic1 from '../assets/images/ABBARAMA.jpg';
import pic2 from '../assets/images/adam-rd-square.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import pic5 from '../assets/images/pic05.jpg';
import pic6 from '../assets/images/pic06.jpg';
import pic7 from '../assets/images/pic07.jpg';
import portfolioTradeR from '../assets/images/portfolio-trade-r.jpg';
import daredevil from '../assets/images/portfolio-daredevil.jpg';
import portfolioNU from '../assets/images/portfolio-nulib.jpg';
import portfolioABBA from '../assets/images/portfolio-abbarama.jpg';
import portfolioTLV from '../assets/images/portfolio-thelastvegas.jpg';
import portfolioOSD from '../assets/images/portfolio-osd-viewer.jpg';
import portfolioUO from '../assets/images/portfolio-urge-overkill.jpg';
import portfolioBlackAngus from '../assets/images/portfolio-blackangus.jpg';
import portfolioAvalon from '../assets/images/portfolio-avalon.jpg';
import portfolioArch from '../assets/images/portfolio-arch.jpg';
import portfolioMorningstar from '../assets/images/portfolio-morningstar.jpg';
import portfolioKeith from '../assets/images/portfolio-keith-scott-blues.jpg';
import portfolioBarbie from '../assets/images/portfolio-barbie.jpg';
import portfolioZebra from '../assets/images/portfolio-zebra.jpg';
import portfolioFI from '../assets/images/portfolio-film-independent.jpg';
import portfolioRR from '../assets/images/portfolio-rent-reporters.jpg';

import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-bolt"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="header-social">
          {config.socialLinks.map(social => {
            const { icon, url } = social;
            return (
              <li key={url}>
                <a href={url}>
                  <i className={`fa ${icon}`} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>

    <section id="wrapper">
      {/* <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Recent web projects</h2>
            <p>Moving everthing to Netlify, and Netlify CMS, yadda yadda</p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section> */}

      {/* <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Performing and recording</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
              turpis ante, nullam sit amet turpis non, sollicitudin posuere
              urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
              dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
              cursus.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section> */}

      {/* <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Nullam dignissim</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
              turpis ante, nullam sit amet turpis non, sollicitudin posuere
              urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
              dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
              cursus.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section> */}

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Portfolio / Web Projects</h2>
          <p>
            Innovative and proactive Front-End Developer capable of developing
            component-based, JavaScript web applications for demanding clients.
            Talented in building front-end stacks, team leadership and
            independent problem-solving. Highly organized multitasker with
            expertise in scheduling projects, enhancing designs and verifying
            code. Prepared to offer React, JavaScript and UX abilities in
            challenging roles.
          </p>
          <p>
            I currently work for{' '}
            <a href="https://www.library.northwestern.edu/" target="_blank">
              Northwestern University Libraries Repository and Digital Curation
              department,
            </a>{' '}
            writing open-source, repository applications which digitize the
            world's cultural heritage assets.
          </p>
          <section className="features">
            <article>
              <a href="https://www.abbarama.com/" className="image">
                <img src={portfolioABBA} alt="" />
              </a>
              <h3 className="major">ABBARAMA</h3>
              <p>
                <a href="https://www.abbarama.com/">abbarama.com</a>
                <br />
                GatsbyJS, React, and Netlify CMS power this new website for pop
                sensation ABBARAMA.
              </p>
              <a href="https://www.abbarama.com/" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={portfolioTradeR} alt="Portfolio Trade-r screenshot" />
              </a>
              <h3 className="major">Trade-R</h3>
              <p>
                <a href="https://trade-r.com">trade-r.com</a>
                <br />
                Cryptocurrency trading PWA which enforces disciplined trading
                entrances and exits. Built from the ground up with React,
                Firebase suite and various crypto APIs. Launch February 2020.
              </p>
              <a href="https://trade-r.com" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="https://www.daredevilpedals.com/" className="image">
                <img src={daredevil} alt="" />
              </a>
              <h3 className="major">Daredevil Pedals</h3>
              <p>
                <a href="https://www.daredevilpedals.com/">
                  daredevilpedals.com
                </a>
                <br />
                Chicago-based fuzz pedal company making the raddest hand-wired
                fuzz and delay pedals on the market. Check 'em out and fuzz on.
              </p>
              <a href="https://www.daredevilpedals.com/" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="https://dc.library.northwestern.edu/" className="image">
                <img src={portfolioNU} alt="" />
              </a>
              <h3 className="major">
                Northwestern Libraries Digital Collections
              </h3>
              <p>
                <a href="https://dc.library.northwestern.edu/">
                  dc.library.northwestern.edu
                </a>
                <br />
                React/Redux discovery application architected from the
                ground-up. Hits an AWS Elasticsearch index, reads IIIF
                manifests, and utilizes ReactiveSearch for faceting &amp;
                search.
              </p>
              <a
                href="https://dc.library.northwestern.edu/"
                className="special"
              >
                Learn more
              </a>
            </article>
            <article>
              <a href="https://www.filmindependent.org/" className="image">
                <img src={portfolioFI} alt="" />
              </a>
              <h3 className="major">Film Independent / LA Film Fest</h3>
              <p>
                <a href="https://www.filmindependent.org/">
                  filmindependent.org
                </a>
                <br />
                WordPress, PHP, CodeIgniter MVC, Filemaker Pro
              </p>
              <a href="https://www.filmindependent.org/" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="http://www.urgeoverkill.com/" className="image">
                <img src={portfolioUO} alt="" />
              </a>
              <h3 className="major">Urge Overkill</h3>
              <p>
                <a href="http://www.urgeoverkill.com/">urgeoverkill.com</a>
                <br />A smattering of WordPress plugins, some custom PHP modules
                and CSS drive Chicago's indie darlings, Urge Overkill's website.
              </p>
              <a href="http://www.urgeoverkill.com/" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a
                href="https://www.npmjs.com/package/openseadragon-react-viewer"
                className="image"
              >
                <img
                  src={portfolioOSD}
                  alt="OpenSeadragon React Viewer screen shot"
                />
              </a>
              <h3 className="major">OpenSeadragon React Viewer NPM Package</h3>
              <p>
                <a href="https://www.npmjs.com/package/openseadragon-react-viewer">
                  npmjs.com/package/openseadragon-react-viewer
                </a>
                <br />
                NPM package React component designed as a wrapper around the
                OpenSeadragon viewer. If your application supports tiled images
                for deep zoom, import this component into your React
                application, feed it a IIIF manifest URL via props and it will
                render an OpenSeadragon viewer with custom navigation, filtering
                of tile sources, and zoom/pan controls.
              </p>
              <a
                href="https://www.npmjs.com/package/openseadragon-react-viewer"
                className="special"
              >
                Learn more
              </a>
            </article>

            <article>
              <a href="https://www.morningstar.com/" className="image">
                <img src={portfolioMorningstar} alt="" />
              </a>
              <h3 className="major">Morningstar Investments</h3>
              <p>
                <a href="https://www.morningstar.com/">morningstar.com</a>
                <br />
                ES5 JavaScript custom framework, AEM (Adobe Experience
                Mananger), CSS3/HTML.
              </p>
              <a href="https://www.morningstar.com/" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="https://www.avalonmediasystem.org/" className="image">
                <img src={portfolioAvalon} alt="" />
              </a>
              <h3 className="major">Avalon Media System</h3>
              <p>
                <a href="https://www.avalonmediasystem.org/">
                  avalonmediasystem.org
                </a>
                <br />
                Audio / Video repository application co-developed by Indiana and
                Northwestern Universities. A Rails application, where I
                re-vamped the entire JavaScript implementation into ES6+
                modules, and began a UI component pattern using ReactJS and
                Webpack.
              </p>
              <a href="https://www.avalonmediasystem.org/" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="https://thelastvegas.com/" className="image">
                <img src={portfolioTLV} alt="" />
              </a>
              <h3 className="major">The Last Vegas</h3>
              <p>
                <a href="https://thelastvegas.com/">thelastvegas.com</a>
                <br />
                GatsbyJS, React, and HTMLUP tool this website for Chicago's
                garage, glam boogie rock faves.
              </p>
              <a href="https://thelastvegas.com/" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a
                href="https://arch.library.northwestern.edu/"
                className="image"
              >
                <img src={portfolioArch} alt="" />
              </a>
              <h3 className="major">ARCH: Institutional Repository</h3>
              <p>
                <a href="https://arch.library.northwestern.edu/">
                  arch.library.northwestern.edu
                </a>
                <br />
                Arch is Northwestern Libraries Institutional Repository,
                designed for self-deposit of works including research, thesis,
                and dissertations by faculty and students. Built on top of the
                Samvera community's Hyrax application, I customized this Rails
                application to adhere to Northwestern Global Marketing branding
                guidelines.
              </p>
              <a
                href="https://arch.library.northwestern.edu/"
                className="special"
              >
                Learn more
              </a>
            </article>
            <article>
              <a href="https://www.keithscottblues.com/" className="image">
                <img src={portfolioKeith} alt="" />
              </a>
              <h3 className="major">Keith Scott Blues</h3>
              <p>
                <a href="https://www.keithscottblues.com/">
                  keithscottblues.com
                </a>
                <br />
                React, GatsbyJS and Netlify CMS power the website of Chicago
                bluesman, Keith Scott.
              </p>
              <a href="https://www.keithscottblues.com/" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="https://barbie.mattel.com/shop" className="image">
                <img src={portfolioBarbie} alt="" />
              </a>
              <h3 className="major">Mattel: Barbies Playhouse</h3>
              <p>
                <a href="https://barbie.mattel.com/shop">barbie.mattel.com/</a>
                <br />
                While working at <a>Manifest Digital</a>, built CMS template
                pages using HTML5, CSS3, Backbone, and jQuery in a refactor of
                Barbie's website, creating an interactive "Barbies Playhouse"
                web application.
              </p>
              <a href="https://barbie.mattel.com/shop" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="https://www.zebra.com/" className="image">
                <img src={portfolioZebra} alt="" />
              </a>
              <h3 className="major">Zebra Printers</h3>
              <p>
                <a href="https://www.zebra.com/">zebra.com</a>
                <br />
                HTML5, CSS3, jQuery, JavaScript
              </p>
              <a href="https://www.zebra.com/" className="special">
                Learn more
              </a>
            </article>

            <article>
              <a href="https://www.rentreporters.com/" className="image">
                <img src={portfolioRR} alt="" />
              </a>
              <h3 className="major">Rent Reporters</h3>
              <p>
                <a href="https://www.rentreporters.com/">rentreporters.com</a>
                <br />
                PHP, CodeIgniter MVC, SQL
              </p>
              <a href="https://www.rentreporters.com/" className="special">
                Learn more
              </a>
            </article>
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="Adam rocking on stage" />
          </a>
          <div className="content">
            <h2 className="major">Live!</h2>
            <p>
              Been playing music since the church choir as a kid, Mom was piano
              teacher, and my brother and I have been in bands our entire life
              playing everywhere from Madison Square Garden to punk clubs in
              Budapest. Jammed on stages in over 22 countries throughout the
              world, recorded 11 albums and have played with about 15 bands,
              including ...
            </p>
            <a href="/#" className="special">
              See bands
            </a>
          </div>
        </div>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
