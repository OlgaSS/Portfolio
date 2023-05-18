import React from "react";
import { NavList } from '../Nav/NavList'
import { ButtonTheme } from "../Buttons/ButtonTheme";
import './header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__logo">Portfolio</div>

                <ButtonTheme />

                <nav className="header__nav">
                    <NavList />
                </nav>
            </div>
        </header>
    )
}