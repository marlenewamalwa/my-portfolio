// App.js
import './App.css';

function App() {
  const projects = [
    {
      title: "Project One",
      description: "A brief summary of this project, technologies used, and its impact.",
      link: "#"
    },
    {
      title: "Project Two",
      description: "Description highlighting key features and your contributions.",
      link: "#"
    },
    {
      title: "Project Three",
      description: "Overview of project purpose, challenges overcome, and outcome.",
      link: "#"
    },
    {
      title: "Project Four",
      description: "Summary of project achievements and technologies involved.",
      link: "#"
    }
  ];

  return (
    <div className="app">
      <header className="hero">
        <h1>Marlene Wamalwa</h1>
        <p>Tech Support & Web Developer</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>
          Passionate about leveraging technology to solve problems and enhance user experiences. Experienced in web development and IT support, with strong skills in troubleshooting, communication, and creating responsive web applications.
        </p>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(({ title, description, link }, index) => (
            <a href={link} className="project-card" key={index} target="_blank" rel="noopener noreferrer">
              <h3>{title}</h3>
              <p>{description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
      </section>
    </div>
  );
}

export default App;
