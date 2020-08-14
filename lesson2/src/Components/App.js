import React from 'react';
import Products from './products/Products';
import RegistrationForm from './registrationForm/RegistrationForm';
import AuthForm from './authForm/AuthForm';
import Task from './tasks/Task';
const products = [{ id: "123312", title: "Milk", price: 20 }]
const App = () => {
    return (
        <>

            {/* <h2>SignUp</h2>
            <RegistrationForm />
            <h2>SignIn</h2>
            <AuthForm /> */}
            {/* <Products /> */}
            <Task />
        </>

    );
}

export default App;