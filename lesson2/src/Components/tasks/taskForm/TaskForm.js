import React, { Component } from 'react';

const initialState = {
    task: '',
    important: false,
    status: "planning",
}


class TaskForm extends Component {
    state = { ...initialState }



    checkImportant = (e) => {
        this.setState(prevState => ({
            important: !prevState.important
        }))
    }

    addTask = (e) => {
        e.preventDefault();

        this.props.addTask({ ...this.state })
        this.setState({ ...initialState })
    }

    handleChange = (e) => {
        const { value } = e.target

        this.setState({
            task: value
        })
    }

    render() {
        const { task, important } = this.state
        return (
            <form onSubmit={this.addTask}>
                <label>
                    Task name: <input type="text" value={task} name="task" onChange={this.handleChange} />
                </label>
                <button type="submit">Add task</button>

                <label>
                    Important: <input type="checkbox" checked={important} onChange={this.checkImportant} />
                </label>


                
            </form>
        );
    }
}

export default TaskForm;