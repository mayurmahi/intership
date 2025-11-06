import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar navbar-expand-lg navbar-light bg-white ${isSticky ? 'sticky-top shadow-sm' : ''}`}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <div className="logo-icon">h</div>
          <div className="ms-2">
            <div className="logo-text">hobbycue</div>
            <div className="logo-tagline">Your Hobby, Your Community</div>
          </div>
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${mobileMenuOpen ? 'show' : ''}`}>
          <form className="d-flex mx-auto my-3 my-lg-0 search-form">
            <input
              className="form-control search-input"
              type="search"
              placeholder="Search here..."
            />
            <button className="btn btn-search" type="submit">
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
          </form>

          <ul className="navbar-nav align-items-lg-center ms-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="me-1">
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                </svg>
                Explore
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">People</a></li>
                <li><a className="dropdown-item" href="#">Community</a></li>
                <li><a className="dropdown-item" href="#">Places</a></li>
                <li><a className="dropdown-item" href="#">Venues</a></li>
                <li><a className="dropdown-item" href="#">Programs</a></li>
                <li><a className="dropdown-item" href="#">Events</a></li>
                <li><a className="dropdown-item" href="#">Products</a></li>
                <li><a className="dropdown-item" href="#">Store</a></li>
                <li><a className="dropdown-item" href="#">Blogs</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="me-1">
                  <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                  <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319z"/>
                </svg>
                Hobbies
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Arts & Crafts</a></li>
                <li><a className="dropdown-item" href="#">Sports</a></li>
                <li><a className="dropdown-item" href="#">Music</a></li>
                <li><a className="dropdown-item" href="#">Cooking</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link icon-link" href="#">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                </svg>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link icon-link" href="#">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                </svg>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link icon-link" href="#">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
              </a>
            </li>

            <li className="nav-item ms-lg-2">
              <button className="btn btn-outline-primary btn-signin">Sign In</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
