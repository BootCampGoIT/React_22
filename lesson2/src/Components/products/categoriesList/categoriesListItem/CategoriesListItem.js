import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import styles from './CategoriesListItem.module.css';

const CategoriesListItem = (props) => {
    const { match, category } = props
    return (
        <li className={styles.CategoriesListItem}>
            <Link to={`${match.url}/${category}`}>{category}</Link>
        </li>
    );
}

export default withRouter(CategoriesListItem);