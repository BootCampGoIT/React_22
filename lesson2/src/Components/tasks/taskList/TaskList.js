import React from 'react';
import TaskListItem from './taskListItem/TaskListItem';

const TaskList = ({ tasks }) => {
    return (
        <ul>
            {tasks.map(task => <TaskListItem key={task.id} {...task} />)}
            {/* {tasks.map(task => <TaskListItem key={task.id} id='gkyjg' task="ugjgjyg" important=true status="done" />)} */}
        </ul>
    );
}

export default TaskList;