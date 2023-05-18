import React from "react";
import { NavLink } from "react-router-dom";
import './nav-list.css'

export const NavList = () => {

    const active = 'nav-list__link active';
    const notActive = 'nav-list__link';

    return (
        <ul className="nav-list">
            <li className="nav-list__item">
                <NavLink to='/' className={({ isActive }) => { return isActive ? active : notActive; }}>
                    Home
                </NavLink>
            </li>
            <li className="nav-list__item">
                <NavLink to="/projects" className={({ isActive }) => { return isActive ? active : notActive; }}>
                    Projects
                </NavLink>
            </li>
            <li className="nav-list__item">
                <NavLink to="/contacts" className={({ isActive }) => { return isActive ? active : notActive; }}>
                    Contacts
                </NavLink>
            </li>
        </ul>
    )
}