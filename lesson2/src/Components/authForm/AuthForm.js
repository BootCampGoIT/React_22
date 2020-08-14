import React, { Component } from 'react';
import axios from 'axios';


class AuthForm extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;


        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA3EpGxauQXVftQbHutQd2bntOzY9HMEJ0`, {email, password,})
        .then(res => localStorage.setItem('user', JSON.stringify(res.data.idToken)))
        .then(()=>{
            this.setState({email:"", password:""})
        })

    }

    render() {

        const { email, password } = this.state;

        return (

            <form onSubmit={this.handleSubmit}>
                <label>
                    Email: <input type="text" value={email} name="email" onChange={this.handleChange} />
                </label>
                <label>
                    Password: <input type="text" value={password} name="password" onChange={this.handleChange} />
                </label>

                <button type="submit">SignIn</button>
            </form>

        );
    }
}

export default AuthForm;