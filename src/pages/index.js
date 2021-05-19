import React from 'react';
import {Link} from 'gatsby';
import {Helmet} from 'react-helmet';

import Footer from '../components/Footer';
import Header from '../components/Header';
import '../main.scss';
import {Skills} from '../components/Skills';
import {Timeline} from '../components/Timeline';
import {About} from '../components/About';
import {Projects} from '../components/Projects';

const IndexPage = () => (
    <React.Fragment>
        <Helmet>
            <title>Antoine Daurat</title>
            <meta name="description" content="Antoine Daurat -- Personal Portfolio"/>
            <link rel='image_src' href='/portfolio-screenshot.png'/>
        </Helmet>
        <div className="container is-size-6">
            {/*<SEO title="Home" />*/}
            <Header/>
            <About/>
            <Timeline/>
            <Projects/>
            <Skills/>
            <Footer/>
        </div>
    </React.Fragment>
);

export default IndexPage;
