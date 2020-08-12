import React, { Component } from 'react';
import List from './list/List';

class Products extends Component {
    state = {
        products: [{id: "123312", title: "Milk", price: 20}],
        isVisible: false
    }

    addToCart = () => {
        console.log("You add product in cart!")
    }

    render() {
     
        // console.log('this.props', this.props)
        const {products} = this.state;
        return (
            <>
                <List products={products} addToCart={this.addToCart} />
            </>
        );
    }
}

// Products.defaultProps = {
//     products: products,
// }

export default Products;