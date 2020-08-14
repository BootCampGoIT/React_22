import React, { Component } from 'react';
import List from './list/List';
import ProductForm from './productForm/ProductForm';
import HomeWork from '../homeWork/HomeWork';
import Filter from './filter/Filter';

class Products extends Component {
    state = {
        products: [],
        filter: ''
    }

    getFilterValue = (e) => {
        this.setState({ filter: e.target.value })
    }

    addToCart = () => {
        console.log("You add product in cart!")
    }

    addProduct = (product) => {
        this.setState(prevState => ({ products: [...prevState.products, product] }))
    }

    getFilteredData = () => {
        return this.state.filter
            ? this.state.products.filter(product => product.title.toLowerCase().includes(this.state.filter.toLowerCase()))
            : this.state.products
    }


    render() {
        const { products, filter } = this.state;
        return (
            <>
                {/* <ProductForm addProduct={this.addProduct} />
                <Filter getFilterValue={this.getFilterValue} value={filter} /> */}
                {/* {
                    filter
                    ? <List products={products.filter(product => product.title.toLowerCase().includes(this.state.filter.toLowerCase()))} addToCart={this.addToCart} />
                    : <List products={products} addToCart={this.addToCart} />
                } */}
                {/* <List products={this.getFilteredData()} addToCart={this.addToCart} /> */}

                {/* <HomeWork /> */}
        
            </>
        );
    }
}



export default Products;