// App.js
import './App.css';

import closetImg from './assets/closet.jpg';
import creativesImg from './assets/creatives.jpg';
import latitudeImg from './assets/latitude.jpg';
import profileImg from './assets/newpassport.jpg';


function App() {
  const projects = [
   {
    title: "Closet Culture",
    description: "Kenyan online fashion marketplace and platform that allows users to buy and sell pre-loved and new clothing, accessories, shoes, and bags.",
    link: "https://closetculture.co.ke/",
    image: closetImg
  },
    {
      title: "Creatives Connect",
      description: "A networking and collaboration platform for creatives. It supports artists, designers, and other creators by offering community-driven opportunities to connect, collaborate, and showcase work.",
      link: "https://creativesconnect.co.ke/",
      image: creativesImg
    },
    {
      title: "Latitude Limited",
      description: "Growth marketing agency focused on leveraging AI and Gen‑Z digital fluency to help Kenyan tech startups, satellite innovators, and associations scale. ",
      link: "https://latitude.co.ke/",
      image: latitudeImg
    },
    
  ];

  // ...existing code...
  return (
    <div className="app" data-aos="fade-up">
      <header className="hero">
        <nav className="navbar">
          <ul>
            <li><a href="#about">About</a></li>
           <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Marlene Wamalwa</h1>
          <p>Web Developer</p>
           <a href="/CV.pdf" download className="download-cv-btn">Download CV</a>
        </div>
      </header>
      

  <section id="about" className="about" data-aos="fade-in">
  <h2>About Me</h2>
  <div className="about-content">
    <div className="about-text">
      <p>
        I’m a web developer focused on building responsive, user-first websites with modern tools like React, PHP, and MySQL. I bring two years of experience in tech support at a fintech, where I honed my problem-solving and debugging skills. My past projects include live platforms with features like chat, user profiles, and admin dashboards. I’m open to freelance gigs and collaborations.
      </p>
    </div>
    <div className="about-photo">
      <img src={profileImg} alt="Marlene Wamalwa" />
    </div>
  </div>
</section>


<section id="skills" className="skills" data-aos="fade-up">
  <h2>Skills</h2>
  <div className="skills-list">
    <div className="skill-circle">HTML</div>
    <div className="skill-circle">CSS</div>
    <div className="skill-circle">PHP</div>
    <div className="skill-circle">MySQL</div>
    <div className="skill-circle">REACT</div>
    <div className="skill-circle">JS</div>
    {/* Add more as needed */}
  </div>
</section>

      <section id="projects" className="projects" >
        <h2>Projects</h2>
        <div className="projects-grid">
  {projects.map(({ title, description, link, image }, index) => (
    <a href={link} className="project-card" key={index} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  ))}
</div>
      </section>

     <section  className="contact" id="contact" >
  <h2>Let's Work Together</h2>
  <form
    action="https://formspree.io/f/xvgqqbej"
    method="POST"
    className="contact-form"
  >
    <label>
      Name:
      <input type="text" name="name" required />
    </label>
    <label>
      Email:
      <input type="email" name="email" required />
    </label>
    <label>
      Message:
      <textarea name="message" rows="5" required />
    </label>
    <button type="submit">Send</button>
  </form>
</section>

<footer className="footer">
  <p>&copy; {new Date().getFullYear()} Marlene Wamalwa. All rights reserved.</p>
</footer>

    </div>
  );
}

export default App;
