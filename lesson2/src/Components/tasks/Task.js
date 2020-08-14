import React, { Component } from 'react'
import TaskForm from './taskForm/TaskForm';
import axios from 'axios';
import TaskList from './taskList/TaskList';


class Task extends Component {
    state = {
        tasks: [],
    }

    addTask = (task) => {
        axios.post(`https://react-bc22.firebaseio.com/tasks.json`, task)
            .then(res => this.setState(prevState => ({
                tasks: [...prevState.tasks, { id: res.data.name, ...task }]
            })))
    }

    render() {
        const { tasks } = this.state
        return (
            <>
                <TaskForm addTask={this.addTask} />
                <TaskList tasks={tasks} />
            </>

        );
    }
}

export default Task;