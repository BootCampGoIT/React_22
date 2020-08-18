import React from 'react';
import TaskListItem from './taskListItem/TaskListItem';

const TaskList = ({ tasks, checkStatus, checkImportant, editTask, deleteTask }) => {

    return (
        <ul>
            {tasks.map(task => <TaskListItem key={task.id} deleteTask={deleteTask} task={task} editTask={editTask} checkStatus={checkStatus} checkImportant={checkImportant} />)}
        </ul>
    );
}

export default TaskList;