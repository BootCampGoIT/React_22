import React, { Component } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom'
import List from './list/List';
import ProductForm from './productForm/ProductForm';
import Filter from './filter/Filter';
import products from '../../services/products';
import styles from './Products.module.css'
import CategoriesList from './categoriesList/CategoriesList';
import Toggler from '../HOC/Toggler';
import TaskList from '../tasks/taskList/TaskList';


class Products extends Component {
    state = {
        products: [],
        filter: '',
        categories: [],
        isCategoriesOpen: false,
        from: ''
    }

    componentDidMount() {
        this.props.location.state && this.setState({ from: this.props.location.state.from })

        products.getAllProducts().then(({ products, categories }) => this.setState({ products, categories }))
        this.props.history.push(`${this.props.match.url}/categories`)
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

    handleCategoriesToggle = (e) => {
        const target = e.target
        if (target.dataset.categories === "categories") {
            this.setState(prevState => ({ isCategoriesOpen: !prevState.isCategoriesOpen }))
        }
    }

    goBack = () => {
        this.props.history.push({
            pathname: this.state.from,
            search: 'query=batman',
            query: "batman"
        })
    }


    render() {
        const { filter, categories, isCategoriesOpen } = this.state;
        return (
            <div className={styles.wrapper}>
                <img src='/images/left.png' alt="goback" width="30" height="30" onClick={this.goBack} />
                <ul className={styles.navigation} >
                    <li onClick={this.handleCategoriesToggle}><NavLink data-categories="categories" className={styles.navigationItem} activeClassName={styles.navigationItemActive} to={`${this.props.match.url}/categories`}>Categories</NavLink>
                        {isCategoriesOpen && <ul>
                            {categories.map(category => <li key={category}><NavLink to={`/products/categories/${category}`} data-category={category}>{category}</NavLink></li>)}
                        </ul>}

                    </li>
                    <li><NavLink className={styles.navigationItem} activeClassName={styles.navigationItemActive} to={`${this.props.match.url}/create`}>Create new product</NavLink></li>
                    <li><NavLink className={styles.navigationItem} activeClassName={styles.navigationItemActive} to={`${this.props.match.url}/filter`}>Search product by name</NavLink></li>
                </ul>

                <div>

                    <Switch>
                        <Route path={`${this.props.match.url}/create`} render={() => <ProductForm addProduct={this.addProduct} />} />
                        <Route path={`${this.props.match.url}/filter`} render={() => <Filter getFilterValue={this.getFilterValue} value={filter} />} />
                        {categories.map(category => <Route path={`${this.props.match.url}/categories/${category}`} key={category + 1} render={() => <List category={category} />} />)}
                        <Route path={`${this.props.match.url}/categories`} render={() => <CategoriesList categories={categories} />} />
                    </Switch>
                </div>
                <div>

                </div>
                <Toggler>
                    {(props) => {
                        const { isOpen, onToggle } = props;
                        return (
                            <>
                                <button type="button" onClick={onToggle}>
                                    {isOpen ? 'Hide' : 'Show'}
                                </button>
                                {isOpen && <p>Hello</p>}
                            </>
                        )
                    }
                    }
                </Toggler>
                <div>
                </div>

            </div>
        );
    }
}



export default Products;