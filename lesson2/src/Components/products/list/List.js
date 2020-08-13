import React from 'react';
import ListItem from './listItem/ListItem';
import css from "./List.module.css";



const List = ({products, addToCart}) => {
    return (
        <ul className={css.list}>
            {products.map(product=><ListItem  key={product.id} {...product } addToCart={addToCart}/>)}
        </ul>
    );
}

export default List;