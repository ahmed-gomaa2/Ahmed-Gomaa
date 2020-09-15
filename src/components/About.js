import React from 'react'
import './css/about.css'
import about from './images/about.jpg'

class About extends React.Component {
    render() {
        return (
            <div className={'about'}>
                <img className={'about-img'} src={about}  alt={'about image'}/>
                <div className="about-text">
                    <h1 className="header">About Me:</h1>
                    <p className="about-body">
                        I'm a self taught fullstack javascript developer.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;