import React from 'react';
import {Link } from 'react-router-dom';
const Navabar = (props) => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="https://fb.com/cmmanik5">
        CM Manik
        </a>
        <div className="collpase nav-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Todos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Todo</Link>
            </li>
          </ul>
        </div>
      </nav>
     );
}
 
export default Navabar;