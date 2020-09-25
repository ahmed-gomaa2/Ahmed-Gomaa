import React from 'react';
import './css/Contacts.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'

const Contacts = () => {
    return (
        <div className={'contacts'}>
            <a href=""><i className={'fab fa-facebook-f'}></i></a>
            <a href=""><i className={'fab fa-twitter'}></i></a>
            <a href=""><i className={'fab fa-instagram'}></i></a>
            <a href=""><i className={'fab fa-youtube'}></i></a>

        </div>
    );
};

export default Contacts;