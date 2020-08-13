import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ProductForm extends Component {
    state = {
        title: '',
        price: '',
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { title, price } = this.state;
        this.props.addProduct({ id: uuidv4(), title, price, image: 'https://33q47o1cmnk34cvwth15pbvt120l-wpengine.netdna-ssl.com/wp-content/uploads/raw-milk-1-e1563894986431.jpg' })
        this.setState({ title: '', price: '' })
    }

    render() {
        const {title, price} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input type="text" name="title" onChange={this.handleChange} value={title}/>
                </label>
                <label>
                    Price:
                    <input type="text" name="price" onChange={this.handleChange} value={price}/>
                </label>
                <button type="submit">Add product</button>
            </form>
        );
    }
}
export default ProductForm;
