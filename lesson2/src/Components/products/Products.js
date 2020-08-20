import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'
import List from './list/List';
import ProductForm from './productForm/ProductForm';
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
        console.log('props PRoducts', this.props)
        return (
            <>
                <div className="navigation">
                    <NavLink to={`${this.props.match.url}/create`}>Create new product</NavLink>
                    <NavLink to={`${this.props.match.url}/filter`}>Search product by name</NavLink>
                </div>
                <div>
                    <Switch>
                        <Route path={`${this.props.match.url}/create`} render={() => <ProductForm addProduct={this.addProduct} />} />
                        <Route path={`${this.props.match.url}/filter`} render={() => <Filter getFilterValue={this.getFilterValue} value={filter} />} />
                    </Switch>
                </div>
                <div>
                    <List products={this.getFilteredData()} addToCart={this.addToCart} />
                </div>
            </>
        );
    }
}



export default Products;