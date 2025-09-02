import React from "react";
import RMS from '../assets/images/RMS.png';
import Saloon from '../assets/images/pexels-cottonbro-3992874.jpg';
import HRMS from '../assets/images/istockphoto-1201193769-612x612.jpg';
import Agri from '../assets/images/pexels-msamiatalay-29115010.jpg';
import EpitaSocial from '../assets/images/pexels-petercors-360438.jpg';

import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://www.github.com/12001378" target="_blank" rel="noreferrer"><img src={RMS} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.github.com/12001378" target="_blank" rel="noreferrer"><h2>Epita - RMS</h2></a>
                    <p>EPITA - RMS is a Request Management System designed to streamline and automate the handling of student and administrative requests within the university.</p>
                </div>
                <div className="project">
                    <a href="https://www.github.com/12001378" target="_blank" rel="noreferrer"><img src={Agri} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.github.com/12001378" target="_blank" rel="noreferrer"><h2>Agri E-commers</h2></a>
                    <p>Agri E-Commerce is a digital marketplace that connects farmers directly with consumers and businesses for seamless trade of agricultural products.</p>
                </div>
                <div className="project">
                    <a href="https://www.github.com/12001378" target="_blank" rel="noreferrer"><img src={Saloon} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.github.com/12001378" target="_blank" rel="noreferrer"><h2>Saloon Booking Application</h2></a>
                    <p>A Salon Booking Application is a digital platform that allows users to schedule, manage, and track salon appointments with ease.</p>
                </div>
                <div className="project">
                    <a href="https://www.github.com/12001378" target="_blank" rel="noreferrer"><img src={EpitaSocial} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.github.com/12001378" target="_blank" rel="noreferrer"><h2>Epita - Social</h2></a>
                    <p>Epita - Social is a community platform designed to connect students, foster collaboration, and enhance campus engagement at EPITA.</p>
                </div>
                <div className="project">
                    <a href="https://www.github.com/12001378" target="_blank" rel="noreferrer"><img src={HRMS} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://www.github.com/12001378" target="_blank" rel="noreferrer"><h2>HRMS</h2></a>
                    <p>An HRMS (Human Resource Management System) is a software solution that streamlines employee management, payroll, recruitment, and performance tracking within organizations.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;