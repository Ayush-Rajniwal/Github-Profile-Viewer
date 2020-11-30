import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import MyRoute from '@src/routes';
import logo from '@images/logo.svg';
import Button from '@components/Button';
import Avatar from '@components/Avatar';
import { TOGGLE_NAV, LOGOUT_USER } from '@redux/actionTypes';

function NavContainer() {
    const { t } = useTranslation();

    const isNavOpen = useSelector((state) => state.ui.isNavOpen);
    const loggedInUser = useSelector((state) => state.auth.loggedInUser);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const dispatch = useDispatch();

    const toggleNav = () => {
        dispatch({ type: TOGGLE_NAV });
    };

    const logout = () => {
        dispatch({ type: LOGOUT_USER });
    };

    return (
        <Router>
            <nav className="nav">
                <NavLink className="nav__logo" to="/">
                    <img src={logo} alt="logo" />
                </NavLink>
                <NavLink to="#" className="nav__hamburger" onClick={toggleNav}>
                    <i className="icon icon-align-right" />
                </NavLink>
                <ul
                    className={`nav__links ${
                        isNavOpen ? ' nav__links--active' : ''
                    }`}
                >
                    <li>
                        <NavLink
                            id="search-btn"
                            className="nav__link"
                            to="/search"
                        >
                            <i className="icon icon-search" />
                        </NavLink>
                    </li>

                    {isLoggedIn && (
                        <li>
                            <NavLink className="nav__link" to="/connect">
                                <i className="icon icon-user-add" />
                            </NavLink>
                        </li>
                    )}

                    {isLoggedIn && (
                        <li>
                            <NavLink
                                className="nav__link nav__avatar"
                                to={`/${loggedInUser.name}`}
                            >
                                <Avatar img={`${loggedInUser.avatar}`} />
                            </NavLink>
                        </li>
                    )}

                    <li>
                        {isLoggedIn
                            ? (
                                <Button
                                    type="button"
                                    id="login-btn"
                                    className="nav__link button button--primary"
                                    onClick={logout}
                                >
                                    {t('Logout')}
                                </Button>
                            )
                            : (
                                <Button
                                    id="logout-btn"
                                    type="link"
                                    className="nav__link button button--primary"
                                    to="/login"
                                >
                                    {t('Login')}
                                </Button>
                            )}
                    </li>
                </ul>
            </nav>
            <MyRoute />
        </Router>
    );
}

export default NavContainer;
