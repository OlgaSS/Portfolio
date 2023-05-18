import React from "react";

export const Contacts = () => {
    return (
        <section className="skills page-padding">
            <div className="skills__container container">
                <h1 className="skills__title title">Contacts</h1>
                <ul className="content__list">
                    <li className="content__item">
                        <h2 className="content__item-title">Location</h2>
                        <div className="content__item-text">
                            <p>Belarus, Minsk
                            </p>
                        </div>
                    </li>
                    <li className="content__item">
                        <h2 className="content__item-title">Telegram / WhatsApp</h2>
                        <div className="content__item-text">
                            <a href="tel:+375292889032">+375 29 288-90-32</a>
                        </div>
                    </li>
                    <li className="content__item">
                        <h2 className="content__item-title">Email</h2>
                        <div className="content__item-text">
                            <a href="mailto:olga.lole96@gmail.com">olga.lole96@gmail.com</a>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}