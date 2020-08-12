import React from 'react';
import ListItem from './listItem/ListItem';

const data = [{id:"233", name: "dfdsdf", checked: true}]

const List = ({products, addToCart}) => {
    console.log('products', products)
    return (
        <ul>
            {products.map(product=><ListItem data={data} key={product.id} {...product } addToCart={addToCart}/>)}
        </ul>
    );
}

export default List;