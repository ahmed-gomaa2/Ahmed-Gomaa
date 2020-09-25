import React from 'react';
import './css/Contacts.css'


const Contacts = () => {
    return (
        <div className={'contacts'}>
            <a target={'blank'} href="https://www.facebook.com/eng.ahmed.gomaa.aly/"><i className={'fab fa-facebook-f'}></i></a>
            <a target={'blank'} href="https://twitter.com/wqlJb4cqKqsH5ZC"><i className={'fab fa-twitter'}></i></a>
            <a target={'blank'} href="https://www.instagram.com/ahmed_gomaa28/?hl=en" ><i className={'fab fa-instagram'}></i></a>
            <a target={'blank'} href="https://github.com/ahmed-gomaa2"><i className={'fab fa-github'}></i></a>
            <a href="mailto:engahmedgomaa97@gmail.com"><i className={'fab fa-google'}></i></a>

        </div>
    );
};

export default Contacts;