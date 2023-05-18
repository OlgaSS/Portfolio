import React from "react";
import { NavLink } from "react-router-dom";

export const ProjectItem = ({ title, image, index }) => {
    return (
        <li className="projects__item">
            <NavLink to={`/project/${index}`}>
                <div className="projects__image">
                    <img src={image} alt={title} />
                </div>
                <h3 className="projects__item-title">{title}</h3>
            </NavLink>
        </li >
    )
}