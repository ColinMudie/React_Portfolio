import React from 'react';
import ProjectContainer from "../components/ProjectContainer";
import './Project.css';

function Projects() {
    return (
        <div className="App">
            <div id="projects-background"></div>
            <h1 className='project-page-title'>Projects</h1>
            <ProjectContainer/>
            <div className='bottom-space'></div>
        </div>
    )
}
export default Projects;