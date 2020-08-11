import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const items = ["Home", "About", "Contacts", "Exit"]

const Header = (props) => {
    console.log(props)
    return (
        <ul style={{ display: "flex", justifyContent: "space-around" }}>
            {items.map(item => <li key={uuidv4()}><a href="#">{item}</a></li>)}

        </ul>
    );
}

export default Header;