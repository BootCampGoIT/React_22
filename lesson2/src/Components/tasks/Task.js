import React, { Component } from 'react'
import TaskForm from './taskForm/TaskForm';
import axios from 'axios';
import TaskList from './taskList/TaskList';
import css from './Task.module.css';


// const array1 = [{ name: "Alex", status: "student" }, { name: "Nikita", status: "teacher" }];
// const array2 = [{ name: "Alex", status: "student" }, { name: "Nikita", status: "student" }];

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

    // componentWillMount() {
    //     console.log("CWM")
    //     localStorage.setItem("user", JSON.stringify({ user: "", token: "" }))
    // }

    componentDidMount() {
        const localTasks = JSON.parse(localStorage.getItem("tasks"));
        this.setState({ tasks: localTasks ? localTasks : [] })

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
    }



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

    async componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }

    updateData = () => {
        axios.get(`https://react-bc22.firebaseio.com/tasks.json`)
            .then(response => {
                const tasks = [];
                if (response.data) {
                    const keys = Object.keys(response.data);
                    for (const key of keys) {
                        tasks.push({ id: key, ...response.data[key] })
                    }
                    return tasks
                } else return tasks
            })
            .then(tasks => this.setState({ tasks }))
            .catch(error => console.log('error', error))
    }



    addTask = (task) => {
        axios.post(`https://react-bc22.firebaseio.com/tasks.json`, task)
            .then(res => this.setState(prevState => ({
                tasks: [...prevState.tasks, { id: res.data.name, ...task }]
            })))
            .catch(error => console.log(error));
    }

    render() {
        const { tasks, isLoading } = this.state
        return (
            <>
                <TaskForm addTask={this.addTask} />
                {isLoading
                    ? <h2>...loading</h2>
                    : <TaskList tasks={tasks} />}
                <button onClick={this.updateData} type="button">UpdateData</button>
            </>
        );
    }
}

export default Task;

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


