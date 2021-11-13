import * as React from 'react';
import { Link } from 'gatsby';
import { header } from '../styles/navbar.module.css';

export default function Navbar(props) {
  return (
    <div className={header}>
      <header>
        <nav>
          <ul>
            <li>
              <Link alt="Return to home" to="/">
                {props.title}
              </Link>
            </li>
            <li>
              <Link alt="go to profile" to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link alt="go to blogs" to="/blogs">
                Blogs
              </Link>
            </li>
            <li>
              <Link alt="go to projects" to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link alt="go to contact" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
