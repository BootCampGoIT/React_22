import React, { Component } from 'react';
import css from './TaskForm.module.css';
import HOC from '../../HOC/HOC';
import WrappedComponent from '../../modalBackDrop/ModalBackDrop';

const initialState = {
    task: '',
    important: false,
    status: "planning",
}


class TaskForm extends Component {
    state = { ...initialState }

    componentDidMount() {
        window.addEventListener("keydown", this.props.closeModal)
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.props.closeModal)
    }

    checkImportant = (e) => {
        this.setState(prevState => ({
            important: !prevState.important
        }))
    }

    addTask = (e) => {
        e.preventDefault();
        this.props.addTask({ ...this.state })
        this.setState({ ...initialState })
        this.props.closeModal();
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
                <button type="submit" className="formButton">Add task</button>
                <button type="button" className="formButton" onClick={this.checkImportant}>{!important ? "simple" : "important"}</button>
            </form>

        );
    }
}

export default WrappedComponent(TaskForm);