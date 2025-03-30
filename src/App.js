import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, useLocation, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./app.css";



const Particles = () => {
  const particlesArray = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}vw`,
    top: `${Math.random() * 100}vh`,
    animationDelay: `${Math.random() * 3}s`
  }));

  return (
    <div className="particles">
      {particlesArray.map(({ id, left, top, animationDelay }) => (
        <div key={id} className="particle" style={{ left, top, animationDelay }} />
      ))}
    </div>
  );
};


const MotionBackground = () => {
  return (
    <>
      <motion.div
        className="motion-bg"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />
      <Particles />
    </>
  );
};



const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="navbar">
      <h1 className="logo">Varsini Sangaralingam | Frontend Developer</h1>
      <ul className="nav-links">
        {["Welcome", "About", "Skills", "Projects", "Resume", "Hobbies", "Contact"].map((item, index) => {
          const path = `/${item.toLowerCase()}`;
          return (
            <li key={index}>
              <Link to={path} className={`nav-item ${location.pathname === path ? "active" : ""}`}>{item}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
};

const Page = ({ title, content }) => (
  <motion.div className="page" variants={pageVariants} initial="initial" animate="animate" exit="exit">
    <h2>{title}</h2>
    <div>{content}</div>
  </motion.div>
);

const Welcome = () => (
  <Page
    title="Welcome!"
    
  />
);

const About = () => <Page title="About Me" content="Frontend Developer with expertise in React.js, JavaScript, HTML, CSS, and experience in building
      scalable, user-friendly web applications. Skilled in collaborating with backend teams and improving web performance. Strong problem-solving abilities with a focus on
      responsive design and accessibility." />;
      const Skills = () => (
        <div className="page hoi">
          <div className="skills-container">
            <h1>Skills</h1>
          
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

const Projects = () => (
  <div className="page projects">
    <h2>Projects</h2>
    <p>
      <strong>INFECTOSCAN (MATLAB, OpenCV, Image Processing)</strong><br />
      Developed an automated stool sample analysis system for early gastrointestinal bleeding detection.
      Used image processing techniques to detect blood presence based on color-based analysis in MATLAB.
      Automated results storage in Excel sheets, minimizing human error and improving diagnostic accuracy.<br /><br />

      <strong>ILLUMINATING PATH TO PEACE (Embedded Systems, AI, IoT)</strong><br />
      Designed an AI-driven device for nyctophobia relief using Arduino and LDV (Laser Doppler Vibrometer) sensors.
      Integrated real-time heart rate monitoring with an automated illumination system to respond to distress.
      Developed a family alert system that notifies caregivers in case of prolonged distress.<br /><br />

      <strong>HEALNOW (Mobile App Development, Healthcare Tech)</strong><br />
      Built a healthcare mobile application to help users manage prescriptions and medical records.
      Enhanced doctor-patient communication with real-time health updates and reminders.
      Implemented secure cloud storage for managing patient medical history efficiently.
    </p>
  </div>
);



const Resume = () => (
  <div className="page hoiii">
    
    <a href="https://drive.google.com/file/d/1CIB7IB1fUQqVgt5wAgq_4lg7NB05WEDd/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
      <h1>📄View My Resume</h1>
    </a>
  </div>
);


const Hobbies = () =>  <a
href="https://www.instagram.com/_.thescribbles._"
target="_blank"
rel="noopener noreferrer"
className="px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-600 transition"
>
<h1>Take a look at my hobby</h1>
</a>
;
const Contact = () => (
  <Page
    title="Contact"
    content={
      <div className="social-icons">
        <h5><a href="https://www.linkedin.com/in/varsini-sangaralingam-11ba98257" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />LinkedIn
        </a></h5>
        <a href="https://github.com/Varsini16" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" /> GitHub
        </a>
        
      </div>
    }
  />
);


const App = () => {
  return (
    <Router>
      <MotionBackground />
      <Navbar />
      <div className="content">
        <AnimatePresence mode="wait">
          <RoutesWithAnimation />
        </AnimatePresence>
      </div>
    </Router>
  );
};


const RoutesWithAnimation = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Navigate to="/welcome" replace />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/hobbies" element={<Hobbies />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;