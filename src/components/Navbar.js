//rfce
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const [click, setClick] = useState(false);
  const [SideMenu, setSideMenu] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    setClick(false);
    // console.log(props);
  };

  const showSideMenu = () => {
    if (window.innerWidth >= 600) {
      setSideMenu(false);
    } else {
      setSideMenu(true);
    }
  };

  window.addEventListener('resize', showSideMenu);

  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          {/* Link replace the <a> tag */}
          <Link to="/" className="nav__logo" onClick={closeMobileMenu}>
            ⛰
          </Link>
          <div className="nav__menu-icon-box" onClick={handleClick}>
            <i
              className={
                click ? 'icon-arrows-remove' : 'icon-arrows-hamburger-2'
              }
            ></i>
          </div>
          {/* <div
            className={
              click
                ? 'nav__background nav__background--active'
                : 'nav__background'
            }
          >
            &nbsp;
          </div> */}
          <div
            className={
              click && SideMenu
                ? 'nav__menu-container nav__menu-container--active'
                : 'nav__menu-container'
            }
          >
            <ul
              className={
                click && SideMenu ? 'nav__menu nav__menu--active' : 'nav__menu'
              }
            >
              <li className="nav__menu-item">
                <Link
                  className="nav__menu-link"
                  to="/"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav__menu-item">
                <Link
                  className="nav__menu-link"
                  to="/services"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
              </li>
              <li className="nav__menu-item">
                <Link
                  className="nav__menu-link"
                  to="/products"
                  onClick={closeMobileMenu}
                >
                  Products
                </Link>
              </li>
              <li className="nav__menu-item">
                <Link
                  className="nav__menu-link nav__menu-link--mobile"
                  to={{ pathname: '/sign-up', state: props.location.pathname }}
                  onClick={closeMobileMenu}
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </div>

          {/* {button?<Button >} */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
