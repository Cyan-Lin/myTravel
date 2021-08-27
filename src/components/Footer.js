import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer__logo">⛰ TRVL</div>
      <div className="footer__content">
        <div className="footer__group footer__group--column">
          <h3 className="footer__group-heading">About Us</h3>
          <ul className="footer__list footer__list--column">
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                How it works
              </Link>
            </li>
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Testimonials
              </Link>
            </li>
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Careers
              </Link>
            </li>
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Investors
              </Link>
            </li>
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__group footer__group--column">
          <h3 className="footer__group-heading">Contact Us</h3>
          <ul className="footer__list footer__list--column">
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Contact
              </Link>
            </li>
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Support
              </Link>
            </li>
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Destinations
              </Link>
            </li>
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Sponsorships
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__group footer__group--column">
          <h3 className="footer__group-heading">Videos</h3>
          <ul className="footer__list footer__list--column">
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Submit Video
              </Link>
            </li>
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Ambassadors
              </Link>
            </li>
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Agency
              </Link>
            </li>
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Influencer
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__group footer__group--column">
          <h3 className="footer__group-heading">Social Media</h3>
          <ul className="footer__list footer__list--column">
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Instagram
              </Link>
            </li>
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Facebook
              </Link>
            </li>
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Youtube
              </Link>
            </li>
            <li className="footer__item footer__item--column">
              <Link to="/" className="footer__link">
                Twitter
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__group footer__group--row">
        <div className="footer__legal">TRVL &copy; 2021</div>
        <div className="footer__links-container">
          <ul className="footer__list footer__list--row">
            <li className="footer__item footer__item--row">
              <a href="#" className="footer__link">
                <i className="fab fa-facebook-square footer__icon" />
              </a>
            </li>
            <li className="footer__item footer__item--row">
              <a href="#" className="footer__link">
                <i className="fab fa-instagram-square footer__icon" />
              </a>
            </li>
            <li className="footer__item footer__item--row">
              <a href="#" className="footer__link">
                <i className="fab fa-youtube-square footer__icon" />
              </a>
            </li>
            <li className="footer__item footer__item--row">
              <a href="#" className="footer__link">
                <i className="fab fa-twitter-square footer__icon" />
              </a>
            </li>
            <li className="footer__item footer__item--row">
              <a href="#" className="footer__link">
                <i className="fab fa-linkedin footer__icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
