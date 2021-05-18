import React from 'react';

export const About = () => (
    <div className="columns is-centered section" id="about">
        <div className="column is-half has-text-justified">
            <h1 className="title has-text-centered">You found me!</h1>

            <p>
                I'm Antoine. Born and raised in Paris, I studied Music Composition in Berlin where I became Machine
                Learning &
                Full Stack Web Developer around 2018.
            </p>
            <br/>
            <p>Here, you'll get a quick sense of where I come from, what I am doing now and what I generally can do.</p>
            <p>For more details, take a look at <a href={escape('/CV Developer 05.2021.pdf')}>my current CV</a>.</p>
        </div>
    </div>
);
