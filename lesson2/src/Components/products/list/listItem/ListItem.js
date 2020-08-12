import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.css';
import styled from 'styled-components';


const color = (theme) => {
    if (theme === "white") {
        return "black"
    } else {
        return "white"
    }
}

const Paragraph = styled.p`
color:${props=> (props.theme=== "dark") ? "yellow" : "green"};
font-weight:800;
`;



const ListItem = ({ addToCart, id, title, image, price, theme = "white" }) => {

    // const style = {
    //     border: "1px solid black", backgroundColor: `${color(theme)}`}

    return (
        <li className={styles.listItemActive}>
            <img src={image} alt={title} width='100' />
            <Paragraph>{title}</Paragraph>
            <Paragraph theme={theme}>{price}</Paragraph>
            <button id={id} type="button" onClick={addToCart}>Buy</button>
        </li >
    );
}

ListItem.defaultProps = {
    id: "12",
    title: "Water",
    price: 30,
    image: 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

ListItem.propTypes = {
    addToCart: PropTypes.func,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
        })
    ),
}

export default ListItem;