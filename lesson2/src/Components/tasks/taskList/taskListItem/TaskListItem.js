import React, { Component } from 'react';
import css from './TaskListItem.module.css';



class TaskListItem extends Component {
    state = {
        status: this.props.status,//planning
        important: this.props.important,
        task: this.props.task,
        incomingTaskName: this.props.task,
        isEditInputVisible: false,
    }

    checkStatus = (e) => {
        const { name } = e.target
        this.setState({
            status: name
        })
    }
    checkImportant = (e) => {
        this.setState(prevState => ({
            important: !prevState.important
        }))
    }
    editTask = (e) => {
        const { value } = e.target
        this.setState({
            task: value
        })

    }
    handleTaskContent = (e) => {
        this.setState(prevState => ({
            isEditInputVisible: !prevState.isEditInputVisible
        }))
    }
    cancelEdit = (e) => {
        this.setState({
            task: this.state.incomingTaskName
        })

    }

    render() {
        const { task, important, status, isEditInputVisible } = this.state
        return (
            <li className={css.item}>
                {!isEditInputVisible
                    ? <p className={css.taskName}><b>Task: </b>{task}</p>
                    : <input type="text" value={task} onChange={this.editTask} />}
                <div className="buttonGroup">
                    <button type="button" onClick={this.handleTaskContent}>{isEditInputVisible ? "Save" : "Edit"}</button>
                    {isEditInputVisible && <button type="button" onClick={this.cancelEdit}>Cancel</button>}
                    <button type="button">Delete</button>
                </div>

                <div className={css.radio}>
                    <label>Planning:
                        <input type="radio" checked={status === "planning" ? true : false} name="planning" onChange={this.checkStatus} />
                    </label>
                    <label>In progress:
                        <input type="radio" checked={status === "inProgress" ? true : false} name="inProgress" onChange={this.checkStatus} />
                    </label>
                    <label>Done:
                        <input type="radio" checked={status === "done" ? true : false} name="done" onChange={this.checkStatus} />
                    </label>
                </div>

                <label>
                    Important: <input type="checkbox" checked={important} onChange={this.checkImportant} />
                </label>

            </li>
        );
    }
}

export default TaskListItem;

