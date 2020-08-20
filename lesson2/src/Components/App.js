import React from 'react';
import Products from './products/Products';
import RegistrationForm from './authorisation/registrationForm/RegistrationForm';
import AuthForm from './authorisation/authForm/AuthForm';
import { Route, Switch, withRouter } from 'react-router-dom';
import Task from './tasks/Task';
import Auth from './authorisation';
import Users from './users';
import Navigation from './navigation/Navigation';
const products = [{ id: "123312", title: "Milk", price: 20 }]
const App = (props) => {
    console.log('App props', props)
    return (
        <>
            {console.log(props)}
            <div>
                <Route component={Navigation} />
            </div>
            <div>
                <Switch>
                    <Route path="/" exact component={() => <h2>Home</h2>} />
                    <Route path="/signup" component={RegistrationForm} />
                    <Route path="/signin" component={AuthForm} />
                    <Route path="/task" component={Task} />
                    <Route path="/products" component={Products} />
                </Switch>
            </div>



            {/* {localStorage.getItem('user')
                ? (JSON.parse(localStorage.getItem('user')).token ? <Users /> : <Auth />)
                : <div><p>Пожалуйста зарегистрируйтесь</p> <Auth /></div>
            } */}
            {/* <Auth />
            <Users /> */}

            {/* <h2>SignUp</h2>
            <RegistrationForm />
            <h2>SignIn</h2> */}

            {/* ============= In process ============== */}
            {/* <AuthForm /> */}

            {/* ============= Need refactoring ============== */}

            {/* <Products /> */}

            {/* ============= Ready for use ============== */}
            {/* <Task /> */}
        </>
    );
}

export default App;