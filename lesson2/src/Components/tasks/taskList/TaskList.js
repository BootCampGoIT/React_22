import React from 'react';
import TaskListItem from './taskListItem/TaskListItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './TaskList.module.css';

const TaskList = ({ tasks, checkStatus, checkImportant, editTask, deleteTask }) => {

    return (
        <TransitionGroup component="ul">
            {tasks.map(task => (
                <CSSTransition key={task.id} classNames={styles} timeout={1000}>
                    <TaskListItem
                        deleteTask={deleteTask}
                        task={task} z
                        editTask={editTask}
                        checkStatus={checkStatus}
                        checkImportant={checkImportant} />
                </CSSTransition>

            ))}

        </TransitionGroup>
    );
}

export default TaskList;