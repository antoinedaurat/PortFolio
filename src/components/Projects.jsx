import React from 'react';

const projectsData = [
  {
    title: 'mimikit',
    year: '2021',
    description: 'open-source python package to do deep-learning on your own audio files.',
    url: ""
  },
  {
    title: 'k-tonal',
    year: '2020',
    description: 'artistic collective about music and AI.',
    url: ""
  },
  {
    title: 'Nessun Dorma',
    year: '2020',
    description: `Music theater piece for two robots.\n
       I made the AI with which one of them teaches himself to make operatic music and co-composed the music.`,
    url: ""
  },
  {
    title: 'The Scene',
    year: '2014',
    description:
      'Music theater piece for two singers and keyboard. I did everything, from libretto to programming the sounds of the keyboard and the composing algorithms.',
    url: ""
  },
  {
    title: 'Salto',
    year: '2014',
    description: 'Piece for clarinet and live-electronic with a self-made score-following system.',
    url: ""
  },
];

const Card = props => {
  const { title, year, description, url } = props;
  return (
    <div className="tile is-parent is-4 project-card">
      <div className="tile is-child">
        <h3 className="subtitle">
          {title} - {year}
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export const Projects = () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const projects = projectsData.map(p => <Card {...p} key={p.title} />);
  return (
    <div className="section" id="projects">
      <h1 className="title has-text-centered">Highlights</h1>
      <div className="tile is-ancestor is-flex-wrap-wrap">{projects}</div>
    </div>
  );
};
