import React, { Component } from 'react'
import ListItem from './listItem/ListItem';
import { v4 as uuidv4 } from 'uuid';

const MyComponent = (data) => (
    <>
        <span>{data}</span>
        <span>____</span>
    </>
)

class List extends Component {
    state = {
        users: [
            {
                id: "dsfsdfdsfsddfse",
                name: "Alex",
                number: "122141434234234"
            },
            {
                id: "dfsdgfnjh34hk53",
                name: "Nikita",
                number: "2342352"
            },
            {
                id: "gjhg23g2386te",
                name: "Boris",
                number: "sgfsdg"
            },
        ],
        isShowList: false,
    }

    deleteUser = (e) => {
        const id = e.target.id;
        this.setState({
            users: [...this.state.users.filter(user => user.id !== id)]
        })
    }

    render() {
        const { users } = this.state;
        // console.log('uuidv4()', uuidv4())
        return (
            <>
                {this.props.children}
                <ul>
                    {users.map(element =>
                        <ListItem key={uuidv4()} deleteUser={this.deleteUser} element={element}>
                            {MyComponent}
                        </ListItem>)}
                </ul>
            </>
        );
    }
}

export default List;
