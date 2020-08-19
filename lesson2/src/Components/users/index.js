import React, { Component } from 'react'
import users from '../../services/users'
import UsersList from './userList/UsersList'
import UserForm from './userForm/UserForm'


class Users extends Component {
    state = {
        users: [],
        isEditable: false,
        currentUser: {}
    }



    componentDidMount() {
        users.getUsers().then(users => this.setState({ users, currentUser: this.getCurrentUser(users) }))

    }

    rewriteUser = (userData) => {
        this.setState((prevState) => ({ users: [...prevState.users.map(user => (user.localId === this.state.currentUser.localId ? userData : user))] }))
    }

    editUser = () => {
        this.setState((prevState) => ({ isEditable: !prevState.isEditable }))
    }

    getCurrentUser = (users) => {
        return users.find(user => user.localId === JSON.parse(localStorage.getItem('user')).localId)
    }

    render() {
        const { users, isEditable, currentUser } = this.state
        return (
            <>
                {isEditable ? <UserForm rewriteUser={this.rewriteUser} user={currentUser} editUser={this.editUser} /> : <UsersList editUser={this.editUser} users={users} />}
            </>
        )
    }
}

export default Users