import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.style.scss';

const NavBar = () => {
    return (
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>
                    Shop
                </Link>
                <Link className="nav-link" to='/sign-in'>
                    Sign In
                </Link>
            </div>
        </div>
        <Outlet />
      </Fragment>
    )
}

export default NavBar;