import React from 'react';

import { skillsData } from '../data/skills';

const progress = {
  Advanced: 100,
  Proficient: 80,
  Intermediate: 55,
  Basic: 33,
};

const skills = skillsData || [];

function ProgressBar(props) {
  const { level, text } = props;
  return (
    <div>
      <span className="title is-6 is-spaced has-text-dark">{text}</span>
      <span className="subtitle is-7 skill-level">{level}</span>
      <progress className="progress is-accent" value={progress[level]} max="100">
        {progress[level]}
      </progress>
    </div>
  );
}

function buildSkills(skills) {
  const progressBars = [];
  let counter = 0;
  Object.entries(skills).forEach(([key, value]) => {
    progressBars.push(
      <li key={counter}>
        <ProgressBar key={counter} text={key} level={value} />
      </li>
    );
    counter++;
  });
  return progressBars;
}

function SkillsList(props) {
  const { skills } = props;
  return <ul className="skill-list">{buildSkills(skills)}</ul>;
}

export const Skills = () => (
  <div className="section">
    <h1 className="title has-text-centered" id="skills">
      Coding Skills
    </h1>
    <div className="columns is-centered">
      <div className="column is-4 skill-column">
        <div className="has-text-centered">
          <span className="icon is-large">
            <i className="fi icon-code" />
          </span>
          <h2 className="title is-5 has-text-dark">Languages</h2>
        </div>
        <SkillsList
          skills={skills
            .filter(skill => skill.keyword === 'Languages')
            .reduce((obj, item) => {
              obj[item.name] = item.level;
              return obj;
            }, {})}
        />
      </div>
      <div className="column is-4 skill-column">
        <div className="has-text-centered">
          <span className="icon is-large">
            <i className="fi icon-laptop" />
          </span>
          <h2 className="title is-5 has-text-dark">Frameworks</h2>
        </div>
        <SkillsList
          skills={skills
            .filter(skill => skill.keyword === 'Frameworks')
            .reduce((obj, item) => {
              obj[item.name] = item.level;
              return obj;
            }, {})}
        />
      </div>
      <div className="column is-4 skill-column">
        <div className="has-text-centered">
          <span className="icon is-large">
            <i className="fi icon-cog" />
          </span>
          <h2 className="title is-5 has-text-dark">Tools</h2>
        </div>
        <SkillsList
          skills={skills
            .filter(skill => skill.keyword === 'Tools')
            .reduce((obj, item) => {
              obj[item.name] = item.level;
              return obj;
            }, {})}
        />
      </div>
    </div>
  </div>
);
