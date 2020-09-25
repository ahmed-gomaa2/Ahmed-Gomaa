import React from 'react';
import './css/Project.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

const Project = () => {
    const projects = [
        {
            name: 'Spotify Clone',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Spotify_logo_with_text.svg/250px-Spotify_logo_with_text.svg.png',
            gitHub: 'https://github.com/ahmed-gomaa2/spotify.git',
            link: 'https://spotify-b41cc.web.app/',
            desc: 'I tried to build Spotify clone using Reactjs and Spotify Web Api.'
        },
        {
            name: 'Google Clone',
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png',
            gitHub: 'https://github.com/ahmed-gomaa2/google.git',
            link:'https://fir-73d44.web.app/',
            desc: 'I tried to build a Google clone with Reactjs and firebase.'
        },
        {
            name: 'WhatsApp Clone',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/150px-WhatsApp.svg.png',
            gitHub: 'https://github.com/ahmed-gomaa2/whatsapp.git',
            link:'https://whatsapp-54ff5.web.app/',
            desc: 'I tried to build a WhatsApp clone and here is the clone.'
        },
        {
            name:'Messenger Clone',
            img:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Facebook_Messenger_4_Logo.svg/100px-Facebook_Messenger_4_Logo.svg.png',
            gitHub: 'https://github.com/ahmed-gomaa2/messenger',
            link: 'https://messenger-46ce5.web.app/',
            desc: 'I tried to build a Facebook Messenger clone and here is the outcome.'
        },
        {
            name: 'Todo App',
            img: 'https://cdn.pixabay.com/photo/2016/09/04/11/51/checklist-1643781__340.png',
            gitHub: 'https://github.com/ahmed-gomaa2/todo-app',
            link: 'https://todo-cd3fe.web.app/',
            desc: 'I built a Todo App with some good functionality like planning, overdue tasks and complete tasks.'
        }
    ]
    return (
        <div id={'projects'} className={'projects'}>
            <h1 className={'projects__header'}>Projects:</h1>
            {projects?.map(project => (
                <div className="projects__item">
                    <img src={project.img} alt="" className="projects__itemImg"/>
                    <div className="projects__desc">
                        {project.desc}
                    </div>
                    <div href="" className="projects__itemGitHub">
                        <a href={project.gitHub} className="projects__link">
                            <GitHubIcon />
                            <p>GitHub</p>
                        </a>
                    </div>
                    <div href="" className="projects__itemLiveLink">
                        <a href={project.link} className="projects__link">
                            <WebIcon />
                            <p>Visit {project.name}</p>
                        </a>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default Project;