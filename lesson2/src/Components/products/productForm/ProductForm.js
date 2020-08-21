import React, { Component } from 'react';
import { withRouter } from "react-router-dom"
import products from '../../../services/products';

class ProductForm extends Component {
    state = {
        title: '',
        price: '',
        category: 'other',
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, price, category } = this.state;
        products.addProduct({...this.state}).then(id =>  this.props.addProduct({id, ...this.state}))
        this.setState({ title: '', price: '', category:''})

    }


    render() {
        const { title, price, category } = this.state;
        console.log('this.props FORM', this.props)
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                    <input type="text" name="title" onChange={this.handleChange} value={title} />
                    </label>
                    <select name="category" value={category} onChange={this.handleChange}>
                        <option defaultValue="other">Other</option>
                        <option value="food" >Food</option>
                        <option value="tools">Tools</option>
                        <option value="toys">Toys</option>
                        <option value="drink">Drinks</option>
                    </select>
                    <label>
                        Price:
                    <input type="text" name="price" onChange={this.handleChange} value={price} />
                    </label>

                    <button type="submit">Add product</button>
                </form>
                <button type="button" onClick={() => {
                    this.props.history.push({
                        pathname: '/tasks',
                        state: {
                            from: `${this.props.location.pathname}`
                        }
                    })
                }}>Go =</button>
            </>
        );
    }
}
export default withRouter(ProductForm);
