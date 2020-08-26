import React, { Suspense, lazy } from 'react';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import withLog from '../HOC/HOC';


const Navigation = (props) => {

    return (
        <nav>

            <ul className={css.navigation}>
                <li className={css.navigationItem}>
                    <NavLink
                        className={css.navigationItemLink}
                        activeClassName={css.navigationItemLinkActive}
                        to={{
                            pathname: '/products',
                            state: {
                                from: props.location.pathname,
                            }
                        }}>Products</NavLink>
                </li>
                <li className={css.navigationItem}>
                    <NavLink className={css.navigationItemLink}
                        activeClassName={css.navigationItemLinkActive}
                        to={{
                            pathname: '/task',
                            state: {
                                from: props.location.pathname,
                                search: "batman"
                            }
                        }}>Tasks</NavLink>
                </li>
                <li className={css.navigationItem}>
                    <NavLink
                        className={css.navigationItemLink}
                        activeClassName={css.navigationItemLinkActive}
                        to={{
                            pathname: '/signin',
                            state: {
                                from: props.location.pathname,
                            }
                        }}>SignIn</NavLink>

                </li>
                <li className={css.navigationItem}>
                    <NavLink
                        className={css.navigationItemLink}
                        activeClassName={css.navigationItemLinkActive}
                        to="/signup">SignUp</NavLink>

                </li>
            </ul>
        </nav>
    );
}





export default withLog(Navigation);

