import React, { Component } from 'react';

class HomeWork extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
    changeState = (e) => {
        const name = e.target.name;
        // e.persist();
        this.setState(prevState => ({ [name]: prevState[name] + 1 }))
        // this.setState(prevState => ({ [e.target.name]: prevState[e.target.name] + 1 }))
    }

    render() {
        return (
            <>
                <button type="button" onClick={this.changeState} name="good">Good</button>
                <button type="button" onClick={this.changeState} name="neutral">Neutral</button>
                <button type="button" onClick={this.changeState} name="bad">Bad</button>
            </>
        );
    }
}

export default HomeWork;