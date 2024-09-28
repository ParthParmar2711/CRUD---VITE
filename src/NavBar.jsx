// eslint-disable-next-line no-unused-vars
import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <nav>
        <aside>
          <img src="" alt="logo"/>
        </aside>
        <aside>
          <ul>
            <NavLink to="/">
              <li>HOME</li>
            </NavLink>
            <NavLink to="/viewall">
              <li>VIEWALL</li>
            </NavLink>
          </ul>
        </aside>
      </nav>
    </>
  );
}
export default NavBar