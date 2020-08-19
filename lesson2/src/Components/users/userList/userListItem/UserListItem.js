import React from 'react';

const UserListItem = ({ id, email, localId, editUser }) => {



    const isUserAuth = () => {
        if (localStorage.getItem('user')) {
            if (JSON.parse(localStorage.getItem('user')).localId === localId) {
                return true
            } else return false
        } else return false
    }

    return (
        <li ><p>Email: {email}</p> {isUserAuth() ? <button id={localId} type='button' onClick={editUser}>Edit</button> : ''}  </li>
    )
}

export default UserListItem