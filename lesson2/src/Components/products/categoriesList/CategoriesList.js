import React from 'react';
import CategoriesListItem from './categoriesListItem/CategoriesListItem';
import css from "./CategoriesList.module.css";

const CategoriesList = ({categories}) => {
    return (
        <ul className={css.CategoriesList}>
            {categories.map(category=><CategoriesListItem  key={category} category={category}/>)}
        </ul>
    );
}

export default CategoriesList;