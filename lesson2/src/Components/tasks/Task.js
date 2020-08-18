import React, { Component } from 'react'
import TaskForm from './taskForm/TaskForm';
import axios from 'axios';
import TaskList from './taskList/TaskList';
import API from '../../services/api';

const isSimilar = (array1, array2) => {
    const diffResult = [];
    for (let i = 0; i < array1.length; i += 1) {
        const user1 = array1[i];
        const user2 = array2[i];
        const keys = Object.keys(user1);
        const keys2 = Object.keys(user2);
        for (const key of keys2) {
            if (key in array1[i]) {
                diffResult.push(true)
            } else diffResult.push(false)
        }
        for (const key of keys) {
            if (key in array2[i]) {
                diffResult.push(true)
            } else diffResult.push(false)

            if (user1[key] === user2[key]) {
                diffResult.push(true)
            } else diffResult.push(false)
        }
    }
    if (diffResult.includes(false)) {
        return false
    } else return true
}

class Task extends Component {
    state = {
        tasks: [],
        isLoading: false,
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        const tasks = await API.getTasks();
        this.setState({ tasks: tasks ? tasks : [], isLoading: false })

        // const localTasks = JSON.parse(localStorage.getItem("tasks"));

    }
    async componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    }

    // updateData = () => {
    //     axios.get(`https://react-bc22.firebaseio.com/tasks.json`)
    //         .then(response => {
    //             const tasks = [];
    //             if (response.data) {
    //                 const keys = Object.keys(response.data);
    //                 for (const key of keys) {
    //                     tasks.push({ id: key, ...response.data[key] })
    //                 }
    //                 return tasks
    //             } else return tasks
    //         })
    //         .then(tasks => this.setState({ tasks }))
    //         .catch(error => console.log('error', error))
    // }



    addTask = async (task) => {
        const id = await API.createTask(task);
        this.setState(prevState => ({
            tasks: [...prevState.tasks, { id, ...task }]
        }))
    }

    checkStatus = async (e) => {
        const { name } = e.target;
        const id = e.target.closest('[data-id]').dataset.id;
        const { tasks } = this.state;
        const task = tasks.find(task => task.id === id)
        const result = await API.updateTask(id, { ...task, status: name });
        result
            ? this.setState({ tasks: [...tasks.map(task => (task.id === id) ? { ...task, status: name } : task)] })
            : console.log("Something went wrong!!!")
    }

    checkImportant = async (e) => {
        const id = e.target.closest('[data-id]').dataset.id;
        const { tasks } = this.state;
        const task = tasks.find(task => task.id === id)
        const result = await API.updateTask(id, { ...task, important: !task.important });
        result
            ? this.setState({ tasks: [...tasks.map(task => (task.id === id) ? { ...task, important: !task.important } : task)] })
            : console.log("Something went wrong!!!")
    }

    editTask = async (e, newTaskName) => {
        const id = e.target.closest('[data-id]').dataset.id;
        const { tasks } = this.state;
        const task = tasks.find(task => task.id === id)
        const result = await API.updateTask(id, { ...task, task: newTaskName });
        result
            ? this.setState({ tasks: [...tasks.map(task => (task.id === id) ? { ...task, task: newTaskName } : task)] })
            : console.log("Something went wrong!!!")
    }

    deleteTask = async (e) => {
        const id = e.target.closest('[data-id]').dataset.id;
        const result = await API.deleteTask(id);
        result
            ? this.setState(prevState => ({ tasks: [...prevState.tasks.filter(task => task.id !== id)] }))
            : console.log("Something went wrong!!!")
    }

    render() {
        const { tasks, isLoading } = this.state
        return (
            <>
                <TaskForm addTask={this.addTask} />
                {isLoading
                    ? <h2>...loading</h2>
                    : <TaskList editTask={this.editTask} deleteTask={this.deleteTask} tasks={tasks} checkStatus={this.checkStatus} checkImportant={this.checkImportant} />}
                {/* <button onClick={this.updateData} type="button">UpdateData</button> */}
            </>
        );
    }
}

export default Task;




// const getImages = (searchValue, pageNumber = 1) => {
//     return axios.get(`https://gdayjhd,jns?page=${pageNumber}&${searchValue}&perPage=12`)
// }

// const searchImages = async () => {
//     const result = await getImages("cat");
//     this.setState({ images: [...result], pageNumber: 2})
// }

// const loadMore = async () => {
//     const result = getImages("cat", pageNumber);
//     this.setState(prevState => ({ images: [...prevState.images, ...result], pageNumber: prevState.pageNumber + 1 }))
// }

















// console.log("componentDidMount")
// this.setState({ isLoading: true });
// axios.get(`https://react-bc22.firebaseio.com/tasks.json`)
//     .then(response => {
//         const tasks = [];
//         if (response.data) {
//             const keys = Object.keys(response.data);
//             for (const key of keys) {
//                 tasks.push({ id: key, ...response.data[key] })
//             }
//             return tasks
//         } else return tasks
//     })
//     .then(tasks => {
//         this.setState({ tasks });
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     })
//     .catch(error => console.log('error', error))
//     .finally(() => this.setState({ isLoading: false }))
// }



// async shouldComponentUpdate(nextProps, nextState) {
//     try {
//         const response = await axios.get(`https://react-bc22.firebaseio.com/tasks.json`);
//         const tasks = [];
//         if (response.data) {
//             const keys = Object.keys(response.data);
//             for (const key of keys) {
//                 tasks.push({ id: key, ...response.data[key] })
//             }
//         }
//         if (!isSimilar(tasks, this.state.tasks)) {
//             return true
//         } else return false
//     } catch (error) {
//         throw new Error(error)
//     }
// }








// const user = {
//     name: "Alex"
// }
// const user1 = user
// console.log(user === user1)



// const array1 = [{ name: "Alex", status: "student" }];
// const array2 = [{ name: "Alex", status: "student" }, { name: "Nikita", status: "student" }];

// const result = [];

// if (array1.length > array2.length) {
//     array2.reduce((acc, element) => {



//         return acc
//     }, [])
// }





// function getData() {
//     return function () {
//         return function () {

//         }
//     }
// }

// const getData = () => () => 