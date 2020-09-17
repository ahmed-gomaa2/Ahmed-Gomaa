import React from 'react'
import './css/about.css'

class About extends React.Component {
    render() {
        return (
            <div className={'about'}>
                <div className="about-text">
                    <h1 className="header">About Me:</h1>
                    <p className="about-body">
                        Hi, I'm a multi-talented human with over 3 years of experiences in wide range of Web Development.
                    </p>
                </div>
            </div>
        )
    }
}

export default About;