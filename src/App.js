import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaUser, FaProjectDiagram, FaEnvelope, FaLinkedin, FaGithub, FaEnvelopeOpen, FaCode, FaReadme, FaStarAndCrescent } from "react-icons/fa";
import "./app.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Varsini Sangaralingam | Frontend Developer</h1>
      <ul className="nav-links">
        {[
          { name: "About", path: "/", icon: <FaUser /> },
          { name: "Skills", path: "/hoi", icon: <FaCode /> },
          { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
          { name: "Resume", path: "/hoiii", icon: <FaReadme /> },
          { name: "Hobbies", path: "/ok", icon: <FaStarAndCrescent /> },
          { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
          

        ].map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="nav-item">
              {item.icon} <span>{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const About = () => (
  <div className="page about">
    <h2>About Me</h2>
    <p>
      Frontend Developer with expertise in React.js, JavaScript, HTML, CSS, and experience in building<br/>
      scalable, user-friendly web applications. Skilled in collaborating with backend teams and improving<br/> web performance. Strong problem-solving abilities with a focus on
      responsive design and accessibility.
    </p>
  </div>
);

const Projects = () => (
  <div className="page projects">
    <h2>Projects</h2>
    <p>
      <strong>INFECTOSCAN (MATLAB, OpenCV, Image Processing)</strong><br />
      Developed an automated stool sample analysis system for early gastrointestinal bleeding detection.<br />
      Used image processing techniques to detect blood presence based on color-based analysis in MATLAB.<br />
      Automated results storage in Excel sheets, minimizing human error and improving diagnostic accuracy.<br /><br />

      <strong>ILLUMINATING PATH TO PEACE (Embedded Systems, AI, IoT)</strong><br />
      Designed an AI-driven device for nyctophobia relief using Arduino and LDV (Laser Doppler Vibrometer) sensors.<br />
      Integrated real-time heart rate monitoring with an automated illumination system to respond to distress.<br />
      Developed a family alert system that notifies caregivers in case of prolonged distress.<br /><br />

      <strong>HEALNOW (Mobile App Development, Healthcare Tech)</strong><br />
      Built a healthcare mobile application to help users manage prescriptions and medical records.<br />
      Enhanced doctor-patient communication with real-time health updates and reminders.<br />
      Implemented secure cloud storage for managing patient medical history efficiently.
    </p>
  </div>
);

const Contact = () => (
  <div className="page contact">
    <h1>THANK YOU VISIT AGAIN</h1>
    <h2>Contact</h2>
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/varsini-sangaralingam-11ba98257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
      </a>
      <a href="https://github.com/Varsini16" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
      <a href="mailto:frontend.dev@example.com">
        <FaEnvelopeOpen className="icon" />
      </a>
    </div>
  </div>
);

const Skills = () => (
  <div className="page hoi">
    <div className="skills-container">
    
      <p>
        <strong>Technical Skills</strong><br />
        • Programming Languages: Python, C, JavaScript<br />
        • Frontend Technologies: React.js, HTML, CSS<br />
        • Backend Technologies: Node.js<br />
        • Databases: MySQL<br />
        • Tools & Technologies: Git, GitHub, VS Code, OpenCV, MATLAB<br /><br />

        <strong>Soft Skills</strong><br />
        • Problem-Solving<br />
        • Team Collaboration<br />
        • Adaptability<br />
        • Communication<br />
      </p>
    </div>
  </div>
);

const Resume = () => (
  <div className="page hoiii">
    
    <a href="https://drive.google.com/file/d/1CIB7IB1fUQqVgt5wAgq_4lg7NB05WEDd/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
      <h1>View My Resume</h1>
    </a>
  </div>
);
const Hobbies = () => (
  <div className="page ok">
    
    <a
      href="https://www.instagram.com/_.thescribbles._"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-600 transition"
    >
      <h1>Take a look at my hobby</h1>
    </a>
  </div>
);

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hoi" element={<Skills />} />
          <Route path="/hoiii" element={<Resume />} />
          <Route path="/ok" element={<Hobbies />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
