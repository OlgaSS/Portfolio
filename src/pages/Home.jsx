import React from "react";

export const Home = () => {
    return (
        <>
            <section className="about">
                <div className="about__container container">
                    <h1 className="about__title"><strong>Hi, my name is <span>Olya</span></strong> a frontend developer</h1>
                    <div className="about__text">
                        <p>with passion for learning and creating.</p>
                    </div>
                </div>
            </section>

            <section className="skills page-padding">
                <div className="skills__container container">
                    <h1 className="skills__title title">Skills</h1>
                    <ul className="content__list">
                        <li className="content__item">
                            <h2 className="content__item-title">Frontend</h2>
                            <ul className="content__item-text">
                                <li>HTML5, BEM, Forms, Semantic, SEO</li>
                                <li>CSS3, RWD, Flexbox, Grid, Position, Animation, Scss</li>
                                <li>JS, DOM, JSON, jQuery basics</li>
                                <li>TypeScript basics</li>
                                <li>React basics</li>
                            </ul>
                        </li>
                        <li className="content__item">
                            <h2 className="content__item-title">Backend</h2>
                            <ul className="content__item-text">
                                <li>Nodejs basics</li>
                                <li>PHP basics</li>
                                <li>MongoDB</li>
                            </ul>
                        </li>
                        <li className="content__item">
                            <h2 className="content__item-title">Tools</h2>
                            <ul className="content__item-text">
                                <li>VSCode</li>
                                <li>Git</li>
                                <li>Figma</li>
                                <li>Npm</li>
                                <li>Gulp</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}