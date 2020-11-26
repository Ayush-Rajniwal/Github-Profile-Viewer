import React from "react";
import { Link, BrowserRouter as Router, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import MyRoute from "@src/routes";
import logo from "@images/logo.svg";
import Button from "@components/Button";
import { TOGGLE_NAV } from "@redux/actionTypes";

function NavContainer() {
    const { t } = useTranslation();

    const isNavOpen = useSelector((state) => state.isNavOpen);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch();

    const toggleNav = () => {
        dispatch({ type: TOGGLE_NAV });
    };

    return (
        <Router>
            <nav className={"nav"}>
                <Link className={"nav__logo"} to="/">
                    <img width="100%" src={logo} alt="logo" />
                </Link>
                <Link to={"#"} className={"nav__hamburger"} onClick={toggleNav}>
                    <i className={"icon icon-align-right"}></i>
                </Link>
                <ul
                    className={
                        "nav__links" + (isNavOpen ? " nav__links--active" : "")
                    }
                >
                    <li>
                        <NavLink className={"nav__link"} to="/search">
                            <i className={"icon icon-search"}></i>
                        </NavLink>
                    </li>
                    {isLoggedIn ? (
                        <li>
                            <NavLink className={"nav__link"} to="/connect">
                                <i className={"icon icon-user-add"}></i>
                            </NavLink>
                        </li>
                    ) : null}

                    <li>
                        <Button
                            type="link"
                            className={"nav__link button--primary"}
                            to="/login"
                        >
                            {isLoggedIn ? t("Logout") : t("Login")}
                        </Button>
                    </li>
                </ul>
            </nav>
            <MyRoute />
        </Router>
    );
}

export default NavContainer;
