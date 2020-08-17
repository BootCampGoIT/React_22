import React, { Component } from 'react';
import css from './TaskForm.module.css';

const initialState = {
    task: '',
    important: false,
    status: "planning",
}


class TaskForm extends Component {
    state = { ...initialState }


    // componentDidUpdate(prevProps, prevState) {
    //     console.log("FormUpdated")
    // }   

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
            <form onSubmit={this.addTask} className={css.form}>
                <label htmlFor="task" className={css.formLabel}>Task name: </label>
                <input className={css.formInput} type="text" value={task} name="task" id="task" onChange={this.handleChange} />
                <button type="submit" className={css.formButton}>Add task</button>
                <button type="button" className={css.formButton} onClick={this.checkImportant}>{!important ? "simple" : "important"}</button>
            </form>
        );
    }
}

export default TaskForm;