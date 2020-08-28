import React, { Suspense, lazy } from 'react';
// import Products from './products/Products';
// import RegistrationForm from './authorisation/registrationForm/RegistrationForm';
// import AuthForm from './authorisation/authForm/AuthForm';
import { Route, Switch } from 'react-router-dom';
// import Task from './tasks/Task';
// import Auth from './authorisation';
// import Users from './users';
import Navigation from './navigation/Navigation';
import Loadable from 'react-loadable';

// const RegistrationForm = lazy(() => import('./authorisation/registrationForm/RegistrationForm' /* webpackChunkName: "RegistrationForm" */));
const AuthForm = lazy(() => import('./authorisation/authForm/AuthForm' /* webpackChunkName: "AuthForm" */));
const Task = lazy(() => import('./tasks/Task' /* webpackChunkName: "Task" */));
const Products = lazy(() => import('./products/Products' /* webpackChunkName: "Products" */));


const RegistrationForm = Loadable({
    loader: () => import('./authorisation/registrationForm/RegistrationForm'),
    loading: () => <h2>Loading...</h2>,
});

const App = (props) => {
    return (
        <>
            <div>
                <Route component={Navigation} />
            </div>
            <div>
                <Switch>
                    <Route path="/" exact component={() => <h2>Home</h2>} />
                    <Route path="/signup" component={RegistrationForm} />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Route path="/signin" component={AuthForm} />

                        <Route path="/task" component={Task} />

                        <Route path="/products" component={Products} />
                    </Suspense>
                </Switch>
            </div>
        </>
    );
}

export default App;