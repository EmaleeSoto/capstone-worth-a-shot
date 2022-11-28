import { Link } from "react-router-dom";

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
      <br></br>
      <p>
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
      <section className="bios-section">
        <h3 className="bios-header">Bios</h3>
        <p className="bio-names">
          <strong>Cesar</strong>
          <br />
          My name is Cesar Ortiz. I'm a full stack software engineer currently
          enrolled in the pursuit fellowship. Pursuit is a 12 month training
          program with a 9% acceptance rate.
        </p>
        <p className="bio-names">
          <strong>Emalee</strong>
          <br />
          Pursuit 8.3 Fellow | Software Engineer Studying full stack web
          development under Pursuit.
        </p>
        <p className="bio-names">
          <strong>Matt</strong>
          <br />
          Hey, I'm Matt, 8.3 Pursuit Fellow and a Creative from the jungles of
          NYC. I possess a deep love for Drawing, Writing, and producing
          Hip-Hop/Trap.
        </p>
        <p className="bio-names">
          <strong>Jonathan</strong>
          <br />
          I'm a full-stack web developer and fellow at Pursuit. 🌱 I’m currently
          learning JavaScript and React. 💡 I'm interested in user experience
          (UX) design, cybersecurity, and accessibility. 🏆 I'm a CompTIA A+
          certified IT professional. 💾 My background is in IT and customer
          service. 👨‍💻 My pronouns are he/him/his. 🪁 My hobbies include reading
          and kite-flying. 🔥 I'm a hot sauce connoisseur.
        </p>
      </section>
    </section>
  );
};

export default About;
