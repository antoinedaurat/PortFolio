import React from 'react';

const Footer = () => (
  <footer className="footer">
    <p>Antoine Daurat</p>
    <p>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
      {` `}and{` `}
      <a href="https://bulma.io">Bulma</a>
    </p>
  </footer>
);

export default Footer;
