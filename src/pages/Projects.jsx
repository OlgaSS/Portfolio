import React from 'react';
import { projects } from '../helpers/database'
import { ProjectItem } from '../components/ProjectItem/ProjectItem';

export const Projects = () => {
    return (
        <section className="projects page-padding" id="projects">
            <div className="projects__container container">
                <h2 className="projects__title title">Projects</h2>
                <ul className="projects__list">
                    {projects.map((project, index) => {
                        return <ProjectItem key={project.id} index={index} title={project.title} image={project.image} />
                    })}
                </ul>
            </div>
        </section>
    )
}