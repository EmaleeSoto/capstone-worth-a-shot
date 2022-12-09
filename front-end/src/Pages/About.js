import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section className="about-section" data-aos="fade-up">
      <h1 className="about-header">
        Revolutionize your nightlife experience with Worth a Shot
      </h1>
      <div className="about-text">
        <p>
          Looking to get back into the nightlife scene? Whether you're a
          seasoned bar-hopper or just looking to mix things up, Worth a Shot is
          your new best friend for finding the best nightlife options your city
          has to offer. With our sleek and user-friendly interface, which works
          great on both desktop and mobile platforms, our app allows you to
          search for bars, nightclubs, and other establishments based on type of
          atmosphere you're looking for. If you've ever felt bored or
          overwhelmed with the nightlife options in your city, we can help you
          explore and discover new places to try. Using our unique onboarding
          process combined with data provided by the Yelp API, we learn about
          your preferences and tastes, so we can find you the perfect spot for a
          night out.
        </p>
        <p>
          In addition to helping you find the best bars and nightclubs, Worth a
          Shot also offers a feature that allows you to discover new drinks and
          cocktails. You can browse our curated list to search for a specific
          type of drink. Each drink comes with a description and a list of
          ingredients, making it easy for you to try out something new at the
          bar. No matter if you're looking for a laid-back sports bar or a
          trendy nightclub, Worth a Shot has you covered.
        </p>
      </div>
      <h1 className="bios-header">Our Team</h1>
      <section className="bios-section">
        <article>
          <img
            className="headshot"
            src="./headshots/matt.png"
            alt="Headshot of Matt Munroe"
          />
          <h3 className="bio-name">Matt Munroe</h3>
          <h3 className="title-text">Front-End/Synergist</h3>
          <a
            href="https://github.com/MattNMunroe"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon"
              alt="GitHub"
              title="GitHub"
              src="./icons/github.png"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-munroe-720b8b199/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon"
              alt="LinkedIn"
              title="LinkedIn"
              src="./icons/linkedin.png"
            />
          </a>
          <p className="bio-text">
            Hey, I'm Matt, 8.3 Pursuit Fellow and a Creative from the jungles of
            NYC. I possess a deep love for Drawing, Writing, and producing
            Hip-Hop/Trap.
          </p>
        </article>
        <article>
          <img
            className="headshot"
            src="./headshots/cesar.png"
            alt="Headshot of Cesar Ortiz"
          />
          <h3 className="bio-name">Cesar Ortiz</h3>
          <h3 className="title-text">&nbsp;</h3>
          <a
            href="https://github.com/CeazTheMoment"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon"
              alt="GitHub"
              title="GitHub"
              src="./icons/github.png"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/cesar-ortiz-a5830121b/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon"
              alt="LinkedIn"
              title="LinkedIn"
              src="./icons/linkedin.png"
            />
          </a>
          <p className="bio-text">
            My name is Cesar Ortiz. I'm a full stack software engineer currently
            enrolled in the pursuit fellowship. Pursuit is a 12 month training
            program with a 9% acceptance rate.
          </p>
        </article>
        <article>
          <img
            className="headshot"
            src="./headshots/jonathan.png"
            alt="Headshot of Jonathan Scheiber"
          />
          <h3 className="bio-name">Jonathan Scheiber</h3>
          <h3 className="title-text">Design/UX Lead</h3>
          <a
            href="https://github.com/Scheiber"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon"
              alt="GitHub"
              title="GitHub"
              src="./icons/github.png"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jonscheiber/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon"
              alt="LinkedIn"
              title="LinkedIn"
              src="./icons/linkedin.png"
            />
          </a>
          <p className="bio-text">
            I am a full-stack web developer with a background in IT and customer
            service from New York, NY. I am currently learning JavaScript and
            React. My interests include user experience (UX) design,
            cybersecurity, and accessibility.
          </p>
        </article>
        <article>
          <img
            className="headshot"
            src="./headshots/emalee.png"
            alt="Headshot of Emalee Soto"
          />
          <h3 className="bio-name">Emalee Soto</h3>
          <h3 className="title-text">Back-End/Team Lead</h3>
          <a
            href="https://github.com/EmaleeSoto"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon"
              alt="GitHub"
              title="GitHub"
              src="./icons/github.png"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/emalee-soto/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="icon"
              alt="LinkedIn"
              title="LinkedIn"
              src="./icons/linkedin.png"
            />
          </a>
          <p className="bio-text">
            I'm a full-stack Junior Web Developer at the Pursuit Fellowship. I
            have studied Computer Science at Hunter College, and plan to finish
            my Bachelor's within the next two years. I love coding, gaming, and
            music!
          </p>
        </article>
      </section>
      <div className="source-text">
        <p>
          <a
            href="https://github.com/EmaleeSoto/capstone-worth-a-shot"
            target="_blank"
            rel="noreferrer"
          >
            Technical information and source code
          </a>{" "}
          available on GitHub.
        </p>
        <p className="source-text">
          Made with love in New York City. The greatest city in the world.
        </p>
      </div>
    </section>
  );
};

export default About;

/*

I shot an arrow into the air,
It fell to earth, I knew not where;
For, so swiftly it flew, the sight
Could not follow it in its flight.

― Henry Wadsworth Longfellow

*/
