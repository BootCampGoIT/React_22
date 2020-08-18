import React, { Component } from 'react';
import css from './TaskListItem.module.css';



class TaskListItem extends Component {
    state = {
        editedTask: this.props.task.task,
        isEditInputVisible: false,
    }

    handleTaskContent = (e) => {
        this.setState(prevState => ({
            isEditInputVisible: !prevState.isEditInputVisible
        }))
        this.props.editTask(e, this.state.editedTask)
    }
    cancelEdit = (e) => {
        this.setState({
            editedTask: this.props.task.task,
            isEditInputVisible: false
        })
    }

    editTask = (e) => {
        this.setState({ editedTask: e.target.value })
    }

    render() {

        const { isEditInputVisible, editedTask } = this.state;
        const { task: { id, important, status, task }, checkStatus, checkImportant, deleteTask } = this.props;
        return (
            <li className={css.item} data-id={id}>
                {!isEditInputVisible
                    ? <p className={css.taskName}><b>Task: </b>{task}</p>
                    : <input type="text" value={editedTask} onChange={this.editTask} />}

                <div className="buttonGroup">
                    <button type="button" onClick={this.handleTaskContent} className="formButton">{isEditInputVisible ? "Save" : "Edit"}</button>
                    {isEditInputVisible && <button type="button" onClick={this.cancelEdit} className="formButton">Cancel</button>}
                    <button type="button" onClick={deleteTask} className="formButton">Delete</button>
                </div>

                <div className={css.radio}>
                    <button
                        type="button"
                        onClick={checkStatus}
                        disabled={status === "planning" ? true : false}
                        name="planning"
                        className={status === "planning" ? "formButtonDisabled" : "formButton"}>Planning:
                        </button>
                    <button
                        type="button"
                        onClick={checkStatus}
                        disabled={status === "inProgress" ? true : false}
                        name="inProgress"
                        className={status === "inProgress" ? "formButtonDisabled" : "formButton"}>InProgress:
                        </button>
                    <button
                        type="button"
                        onClick={checkStatus}
                        disabled={status === "done" ? true : false}
                        name="done"
                        className={status === "done" ? "formButtonDisabled" : "formButton"}>Done:
                        </button>
                </div>



                <label>
                    Important: <input type="checkbox" checked={important} onChange={checkImportant} />
                </label>
            </li>
        );
    }
}

export default TaskListItem;

