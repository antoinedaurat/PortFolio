import React from 'react';
import ReactPlayer from 'react-player';
import {IconContext} from 'react-icons';
import {FaLink} from 'react-icons/fa';

const projectsData = [
    {
        title: 'aXX',
        year: '2021',
        description: 'SPA to visualize parameters and outputs of audio models on a single page.',
        img: 'axx-screenshot.png',
        url: 'https://ktonal.github.io/axx',
        media: null,
    },
    {
        title: 'mimikit',
        year: '2021',
        description: 'open-source python package to do deep-learning on your own audio files.',
        img: 'mimikit screenshot.png',
        url: 'https://github.com/ktonal/mimikit',
        media: null,
    },
    {
        title: 'ktonal',
        year: '2020',
        description: 'artistic collective about music and AI.',
        img: 'ktonal-logo.png',
        url: 'https://ktonal.com',
        media: null,
    },
    {
        title: 'Nessun Dorma',
        year: '2020',
        description: `Music theater piece for two robots.\n
       I made the AI with which one of them teaches himself to make operatic music and co-composed the music.`,
        img: 'nessun dorma screenshot.png',
        url: 'https://nessundorma.de/',
        media: null,
    },
    {
        title: 'The Scene',
        year: '2017',
        description:
            'Music theater piece for two singers and keyboard. I did everything, from libretto to programming the sounds of the keyboard and the composing algorithms.',
        img: null,
        url: 'https://www.youtube.com/watch?v=qrs5aSjVcwI&ab_channel=antoinedaurat',
        media: 'https://www.youtube.com/watch?v=qrs5aSjVcwI&ab_channel=antoinedaurat',
    },
    {
        title: 'Salto',
        year: '2015',
        description: 'Piece for clarinet and live-electronic with a self-made score-following system.',
        img: null,
        url: 'https://vimeo.com/120286902',
        media: 'https://vimeo.com/120286902',
    },
];

const Card = props => {
    const {title, year, description, url, img, media} = props;
    return (
        <div className="tile is-parent is-6 project-card ">
            <div className="tile is-child">
                <h3 className="subtitle">
                    <a href={url}>
                        {title} - {year} {` `}
                    </a>
                </h3>
                <div className="thumbnail-container">
                    {img ? (
                        <img src={`/${img}`} alt="" className="project-thumbnail"/>
                    ) : (
                        <ReactPlayer url={media} width="auto" height="200px" style={{margin: '0 auto 2em auto'}}/>
                    )}
                </div>
                <p>{description}</p>
            </div>
        </div>
    );
};

export const Projects = () => {
    // eslint-disable-next-line react/jsx-props-no-spreading
    const projects = projectsData.map(p => <Card {...p} key={p.title}/>);
    return (
        <div className="section" id="projects">
            <h1 className="title has-text-centered">Highlights</h1>
            <div className="tile is-ancestor is-flex-wrap-wrap">{projects}</div>
        </div>
    );
};
