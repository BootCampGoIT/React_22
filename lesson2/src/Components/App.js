import React from 'react';
import Products from './products/Products';
// import RegistrationForm from './authorisation/registrationForm/RegistrationForm';
// import AuthForm from './authorisation/authForm/AuthForm';
import Task from './tasks/Task';
import Auth from './authorisation';
import Users from './users';
const products = [{ id: "123312", title: "Milk", price: 20 }]
const App = () => {
    return (
        <>

            {/* {localStorage.getItem('user')
                ? (JSON.parse(localStorage.getItem('user')).token ? <Users /> : <Auth />)
                : <div><p>Пожалуйста зарегистрируйтесь</p> <Auth /></div>
            } */}
            <Auth />
            <Users />

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