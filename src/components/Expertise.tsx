import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "React",
    "Jquery",
    "JavaScript",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "Spring Core",
    "Hibernate",
    "JSP/Servlets",
    "Thymeleaf",
    "Spring Boot",
    "Java",
    "SQL",
    "PostgreSQL",
    "Postman",
    "REST APIs",
    "Agile Scrum",
    "VS Code",
    "IntelliJ",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "AWS(ECS, S3, RDS, Lambda)",
    "Google giber",
    "Linux",
    "Railway Cloud",
    "Swagger",
    "Maven",
    "Jenkins",
    "SonarQube"
];

const labelsThird = [
    "OpenAI",
    "Groq",
    "Hadoop",
    "Hbase",
    "Advanced Excel",
    "Tableau",
    "R"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Full Stack Web Development</h3>
                        <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Spring Boot. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>DevOps & Automation</h3>
                        <p>Once the application is built, I help clients set up DevOps testing, CI/CD pipelines, and deployment automation to support the successful Go-Live.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDatabase} size="3x" />
                        <h3>Big Data & Analytics</h3>
                        <p>Harness the power of data to drive business growth. I have experience working with large-scale datasets, building data pipelines, and implementing analytics solutions that provide actionable insights for smarter decision-making.</p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;