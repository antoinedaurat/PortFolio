import React from 'react';

const projectsData = [
  {
    title: 'mimikit',
    year: '2021',
    description: 'open-source python package to do deep-learning on your own audio files.',
  },
  {
    title: 'k-tonal',
    year: '2020',
    description: 'artistic collective about music and AI.',
  },
  {
    title: 'Nessun Dorma',
    year: '2020',
    description: `Music theater piece for two robots.\n
       I made the AI with which one of them teaches himself to make operatic music and co-composed the music.`,
  },
  {
    title: 'The Scene',
    year: '2014',
    description:
      'Music theater piece for two singers and keyboard. I did everything, from libretto to programming the sounds of the keyboard and the composing algorithms.',
  },
  {
    title: 'Salto',
    year: '2014',
    description: 'Piece for clarinet and live-electronic with a self-made score-following system.',
  },
];

const Card = props => {
  const { title, year, description } = props;
  return (
    <div className="tile is-vertical project-card" key={title}>
      <h3 className="subtitle">
        {title} - {year}
      </h3>
      <p>{description}</p>
    </div>
  );
};

export const Projects = () => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const projects = projectsData.map(p => <Card {...p} />);
  return (
    <div className="section" id="projects">
      <h1 className="title has-text-centered">Projects</h1>
      <div className="tile is-ancestor">{projects}</div>
    </div>
  );
};
