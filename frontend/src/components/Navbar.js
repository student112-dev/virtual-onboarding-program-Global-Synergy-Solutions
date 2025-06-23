import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const role = localStorage.getItem('role');

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">GSS Onboarding</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            {role && (
              <li className="nav-item">
                <button className="btn btn-danger" onClick={() => {
                  localStorage.clear();
                  window.location.href = '/';
                }}>Logout</button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
