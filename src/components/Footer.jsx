import React from 'react';
import { IconContext } from 'react-icons';
import { FaGithubSquare, FaAt } from 'react-icons/fa';

class Modal extends React.Component {
  close(e) {
    e.preventDefault();
    const { onClose } = this.props;
    if (onClose) {
      onClose();
    }
  }

  render() {
    const { isOpen, children } = this.props;
    if (isOpen === false) return null;

    return (
      <div>
        <div className="email-card has-text-centered">{children}</div>
        <div className="bg" onClick={e => this.close(e)} />
      </div>
    );
  }
}

const Footer = () => {
  const [isModalOpened, toggleModal] = React.useState(false);
  return (
    <footer className="footer">
      <h3 className="has-text-centered">
        For more, visit my{' '}
        <a href="https://github.com/antoinedaurat" target="_blank" rel="noreferrer">
          <IconContext.Provider value={{ size: 25, color: '#4a4a4a', className: 'contact-icon' }}>
            <FaGithubSquare />
          </IconContext.Provider>
        </a>
        or contact me per
        <i onClick={() => toggleModal(true)} role="button" style={{ cursor: 'pointer' }}>
          <IconContext.Provider value={{ size: 25, color: '#4a4a4a', className: 'contact-icon' }}>
            <FaAt />
          </IconContext.Provider>
        </i>
        <Modal isOpen={isModalOpened} onClose={() => toggleModal(false)}>
          <span>antoinedaurat[AT]gmail[DOT]com</span>
        </Modal>
      </h3>
      <br />
      <p>&#169; {new Date().getFullYear()} Antoine Daurat</p>
      <p>
        Made with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
        {` `}and{` `}
        <a href="https://bulma.io">Bulma</a>
      </p>
    </footer>
  );
};
export default Footer;
