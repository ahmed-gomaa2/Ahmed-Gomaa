import React from 'react'
import './css/about.css'
import about from './images/about.jpg'

class About extends React.Component {
    render() {
        return (
            <div className={'about'}>
                <img className={'about__image'} src={about} alt=""/>
                <div className="about-text">
                    <h1 className="header">About Me:</h1>
                    <p className="about-body">
                        Hi, I'm a Javascript web developer with over 3 years of experiences.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;