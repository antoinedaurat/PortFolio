import React from 'react';
import { Link } from 'gatsby';

import Footer from '../components/Footer';
import Header from '../components/Header';
import SEO from '../components/seo';

import '../main.scss';
import { Skills } from '../components/Skills';
import { Timeline } from '../components/Timeline';
import { About } from '../components/About';
import { Projects } from '../components/Projects';

const IndexPage = () => (
  <div className="container is-size-6">
    {/*<SEO title="Home" />*/}
    <Header />
    <About />
    <Timeline />
    <Projects />
    <Skills />
    <Footer />
  </div>
);

export default IndexPage;
