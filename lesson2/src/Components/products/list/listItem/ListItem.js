import React from 'react';
import styles from './ListItem.module.css';

const ListItem = ({ addToCart, id, title, image, price }) => {

    return (
        <li className={styles.listItem}>
            <img src={image} alt={title} width='100' />
            <p>{title}</p>
            <p>{price}</p>
            <button id={id} type="button" onClick={addToCart}>Buy</button>
        </li>
    );
}

export default ListItem;