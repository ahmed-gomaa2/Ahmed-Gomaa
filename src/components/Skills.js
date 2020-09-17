import React, {PureComponent} from 'react';
import './css/skills.css'

const skills = ['HTML5', 'CSS3', 'Bootstrap 4', 'Semantic UI', 'Material-UI', 'Javascript', 'Heroku', 'GitHub', 'React JS','Redux', 'Reactjs Hooks', 'NodeJS', 'MongoDB', 'Firebase']

const levels = [94, 80, 71, 60, 70, 90, 85, 77, 90, 88, 60, 80, 70, 90]

class Skills extends PureComponent {
    render() {
        return (
            <div className={'skills'}>
                <h1 className={'skills-header'}>My Skills:</h1>
                {skills.map(skill => {
                    const skillIndex = skills.indexOf(skill)
                    return <div className="skill-details">
                        <p className="skill-name">{skill}</p>
                        <p className="skill-percent">{levels[skillIndex]}%</p>
                        <div className="meter">
                            <span style={{width: `${levels[skillIndex]}%`}}></span>
                        </div>
                    </div>
                })}

            </div>
        );
    }
}


export default Skills;