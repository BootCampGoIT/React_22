import React, { Component } from 'react';
import users from '../../../services/users';



class UserForm extends Component {

    state = {
        email: ''
    }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        users.editUser({ ...this.props.user, ...this.state })
        this.props.rewriteUser({ ...this.props.user, ...this.state })
        this.props.editUser()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label >
                    <input type="text" name='email' value={this.state.email} onChange={this.handleChange} />
                </label>
                <button type='submit'> Save</button>
            </form>
        )
    }
}

export default UserForm