import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = (props) => {
    console.log('props', props)
    return (
        <nav>
            {/* {console.dir(window.location.pathname.split('/')[2])} */}
            <ul className={css.navigation}>
                {/* <li className={css.navigationItem}>
                    <NavLink
                        exact
                        className={css.navigationItemLink}
                        activeClassName={css.navigationItemLinkActive}
                        to={{ pathname: "/" }}>Home
                    </NavLink>
                </li> */}
                <li className={css.navigationItem}>
                    <NavLink 
                    className={css.navigationItemLink} 
                    activeClassName={css.navigationItemLinkActive} 
                    to="/products">Products</NavLink>
                </li>
                <li className={css.navigationItem}>
                    <NavLink className={css.navigationItemLink} 
                    activeClassName={css.navigationItemLinkActive} 
                    to="/task">Tasks</NavLink>
                </li>
                <li className={css.navigationItem}>
                    <NavLink
                        className={css.navigationItemLink}
                        activeClassName={css.navigationItemLinkActive}
                        to={{
                            pathname: '/signin',
                            // search: '?sortby=latest',
                            // hash: '#comments',
                            state: {
                                from: props.location,
                            }
                        }}>SignIn</NavLink>

                </li>
                <li className={css.navigationItem}>
                    <NavLink className={css.navigationItemLink} activeClassName={css.navigationItemLinkActive} to="/signup">SignUp</NavLink>

                </li>
                {/* <li>
                    <a href="#">SignOut</a>
                </li> */}
            </ul>
        </nav>
    );
}

export default Navigation;