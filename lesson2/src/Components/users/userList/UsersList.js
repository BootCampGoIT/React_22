import React, { Component } from 'react'
import UserListItem from './userListItem/UserListItem'

const UsersList = ({ users, editUser }) => {

    

    return (

        <ul>
            {users.map(user => <UserListItem key={user.id} {...user} editUser ={editUser}/>)}
        </ul>

    )
}


export default UsersList