import React from 'react';
import "./app.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const res = () => {
    
      const skills = ["HTML","CSS","Canva","Python","MATLAB","OpenCV",];
      const projects = [
        "Dynamic health monitoring: Automated blood detection in stool sample using AI.",
         "Fusion of microchip technology: AI-powered system for nyctophobia." ,
        "Healnow:App for automated prescrpition,checkup and dropdown box." 
      ];
      
      const workshop=[
       " Attended workshop at NIT Trichy on Technical Symposium",
        "Attended workshop at Codebind Technologies on Web Development",
          "Attended workshop at Lift-India on Innovative Electronics"
      ];
      
      const achievements = [
       "Won 3rd prize for the best innovation in VISAI event at Veltech-chennai",
        "Filed patent on the topic Dynamic health monitoring",
        "Received fund from IEI of INR32000"
      ];
      
      const certi = [
        "Project Expo at Manakula Vinayagar College, Pondicherry",
               "EDII Hackathon, Anna University",
                      " IEI Membership Certificate",
                  "Certificate of Green Commitment, IGEN GREENDAY",
                        " Drawing-World Students day celebration, KRCE",
                        " Poster Design Competition, KRCE",
                        " Certificate of Internship and Inplant on Web development, Codebind Technologies",
                        "Certificate from IBM on (Cybersecurity, Enterprise-grade AI, Data Science)",
                        "Certificate from Narcotics Control Bureau - Say Yes to Life, No to Drugs"
       ];
      const languages = [
        "Tamil","English","Hindi","German"
       ];
       <hr/>
      const careerObjective =
        "Aspiring Frontend Developer with expertise in HTML, CSS, and React.js, focused on building efficient, responsive, and scalable web applications. Strong foundation in modern front-end technologies, component-based architecture, and performance optimization. Adept at writing clean, maintainable code and collaborating with development teams to deliver high-quality solutions. Seeking an opportunity to apply my technical skills in a dynamic environment and contribute to innovative web development projects.";
  return (
    <div>
      <div className="container">
  
  <header className="header">
    <h1 className="title">Varsini Sangaralingam</h1>
    <p className="subtitle">Frontend Developer </p>
    <p>rsvarsini06@gmail.com</p>

    
    <div className="icons">
      <a href="https://github.com/Varsini16" target="_blank" rel="noopener noreferrer">
        <GitHubIcon className="icon" />
      </a>
      <a href="https://www.linkedin.com/in/varsini-sangaralingam-11ba98257?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon className="icon linkedin" />
      </a>
    </div>
    <hr className="divider" />
  </header>

  
  <section className="section">
    <h2>Career Objective</h2>
    <p>{careerObjective}</p>
  </section>
<hr/>
  


  <section className="section">
    <h2>Skills</h2>
    <ul className="skills">
      {skills.map((skill, index) => (
        <li key={index} className="skill">{skill}</li>
      ))}
    </ul>
  </section>
<hr/>
<section className="section">
    <h2>Projects</h2>
    <ul className="Projects">
      {projects.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
    <hr/>
  </section>


  <section className="section">
    <h2>Achievements</h2>
    <ul className="achievements">
      {achievements.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
    <hr/>
  </section>
  <section className="section">
    <h2>Certificates</h2>
    <ul className="Certificates">
      {certi.map((certi, index) => (
        <li key={index}>{certi}</li>
      ))}
    </ul>
    <hr/>
  </section>
  <section className="section">
    <h2>Workshop</h2>
    <ul className="workshop">
      {workshop.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
    <hr/>
  </section>
  <section className="section">
    <h2>Languages</h2>
    <ul className="languages">
      {languages.map((achievement, index) => (
        <li key={index}>{achievement}</li>
      ))}
    </ul>
    <hr/>
  </section>
    </div></div>
  )
}

export default res;
