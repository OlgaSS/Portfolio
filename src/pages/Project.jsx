import React from "react";
import { useParams } from "react-router-dom";
import { ButtonGitHub } from "../components/Buttons/ButtonGitHub";
import { projects } from '../helpers/database'

export const Project = () => {
    const { id } = useParams();
    const project = projects[id];

    return (
        <section className="project page-padding">
            <div className="project__container container">
                <h1 className="project__title title">{project.title}</h1>
                <div className="project__details">
                    <img className="project__image" src={project.image} alt={project.title} />
                    <div className="project__info">
                        <p>Stack: {project.stack}</p>
                    </div>

                    {project.link && <ButtonGitHub link={project.link} />}

                </div>
            </div>
        </section>
    )
}