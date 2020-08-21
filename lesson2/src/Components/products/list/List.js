import React, { Component } from 'react';
import ListItem from './listItem/ListItem';
import css from "./List.module.css";
import products from '../../../services/products';
import { withRouter } from 'react-router-dom'

class List extends Component {
    state = {
        products: [],
    }

    componentDidMount() {
        products.getProductsByCategory(this.props.category).then(products => { this.setState({ products }) })
    }

    render() {
        const { products } = this.state
        return (
            <ul className={css.list}>
                {products.map(product => <ListItem key={product.id} {...product} />)}
            </ul>
        );
    }
}

export default withRouter(List);

