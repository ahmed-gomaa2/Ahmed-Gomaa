import React from 'react';
import'./css/Footer.css'

const Footer = () => {
    return (
        <div className={'footer'}>
            <h2>Want to Collaborate?</h2>
            <h1>Contact Me!</h1>
            <div className={'footer__contacts'}>
                <a target={'blank'} href="https://www.facebook.com/eng.ahmed.gomaa.aly/"><i className={'fab fa-facebook-f'}></i></a>
                <a target={'blank'} href="https://twitter.com/wqlJb4cqKqsH5ZC"><i className={'fab fa-twitter'}></i></a>
                <a target={'blank'} href="https://www.instagram.com/ahmed_gomaa28/?hl=en" ><i className={'fab fa-instagram'}></i></a>
                <a target={'blank'} href="https://github.com/ahmed-gomaa2"><i className={'fab fa-github'}></i></a>
                <a href="mailto:engahmedgomaa97@gmail.com"><i className={'fab fa-google'}></i></a>
            </div>

            OR

            <p className="footer__phone"><i className={'fab fa-whatsapp'}></i>+201008549612</p>

            <p className="footer__copyRight">
                Ahmed Gomaa @2020
            </p>

        </div>
    );
};

export default Footer;