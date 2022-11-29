import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <h1 className="about-header">
        Revolutionize your nightlife experience with Worth a Shot
      </h1>
      <br></br>
      <p className="about-text">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>
      <p className="about-text">
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        oluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?"
      </p>
      <h1 className="bios-header">Our Team</h1>
      <section className="bios-section">
        <article>
          <img
            className="headshot"
            src="./headshots/matt.png"
            alt="Headshot of Matt Munroe"
          />
          <h3 className="bio-name">Matt Munroe</h3>
          <a href="https://github.com/MattNMunroe">
            <img
              className="icon"
              alt="GitHub"
              title="GitHub"
              src="./icons/github.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/matthew-munroe-720b8b199/">
            <img
              className="icon"
              alt="LinkedIn"
              title="LinkedIn"
              src="./icons/linkedin.png"
            />
          </a>
          <p className="bio">
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
          <a href="https://github.com/CeazTheMoment">
            <img
              className="icon"
              alt="GitHub"
              title="GitHub"
              src="./icons/github.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/cesar-ortiz-a5830121b/">
            <img
              className="icon"
              alt="LinkedIn"
              title="LinkedIn"
              src="./icons/linkedin.png"
            />
          </a>
          <p className="bio">
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
          <a href="https://github.com/Scheiber">
            <img
              className="icon"
              alt="GitHub"
              title="GitHub"
              src="./icons/github.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/jonscheiber/">
            <img
              className="icon"
              alt="LinkedIn"
              title="LinkedIn"
              src="./icons/linkedin.png"
            />
          </a>
          <p className="bio">
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
          <a href="https://github.com/EmaleeSoto">
            <img
              className="icon"
              alt="GitHub"
              title="GitHub"
              src="./icons/github.png"
            />
          </a>
          <a href="https://www.linkedin.com/in/emalee-soto/">
            <img
              className="icon"
              alt="LinkedIn"
              title="LinkedIn"
              src="./icons/linkedin.png"
            />
          </a>
          <p className="bio">
            Pursuit 8.3 Fellow | Software Engineer Studying full stack web
            development under Pursuit.
          </p>
        </article>
      </section>
      <p className="source-text">
        <a href="https://github.com/EmaleeSoto/capstone-worth-a-shot">
          Technical information and source code
        </a>{" "}
        available on GitHub.
      </p>
    </section>
  );
};

export default About;
