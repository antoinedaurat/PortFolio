import React from 'react';
import { Element } from 'react-scroll';

import { content } from '../data/timeline';

function renderTags(tags) {
  return (
    <div className="tags are-small">
      {tags.map(tag => (
        <span className="tag is-medium" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

function renderItems(items) {
  return items.map((item, index) => {
    if (item.type === 'year') {
      return (
        <header className="timeline-header" key={index}>
          <span className="tag is-large">{item.year}</span>
        </header>
      );
    }
    return (
      <div key={index}>
        <div className="timeline-item" />
        <div className="timeline-item">
          <div className="timeline-marker is-32x32" />
          <div className="timeline-content">
            <p className="date">{item.date}</p>
            <p className="event">{item.event}</p>
            <p className="institution">{item.institution}</p>
            <p className="description">{item.description}</p>
            {renderTags(item.skills)}
          </div>
        </div>
        <div className="timeline-item" />
      </div>
    );
  });
}

export function Timeline() {
  return (
    <div className="container section" id="timeline">
      <Element name="experience">
        <h1 className="title has-text-centered">Timeline</h1>
        <div className="columns is-centered">
          <div className="timeline column is-half">
            {renderItems(content)}
            <div className="timeline-item" />
          </div>
        </div>
      </Element>
    </div>
  );
}
