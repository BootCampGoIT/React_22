import React from 'react';
import style from './ListItem.module.css';

const ListItem = ({ element, deleteUser, children }) => {

    return (
        <>
            <li className={style.item}>{children("NAME:")}<span>{element.name}</span></li>
            <button id={element.id} onClick={deleteUser}>Delete</button>
        </>
    );
}

export default ListItem;