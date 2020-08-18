import axios from 'axios';


export default {
    getTasks() {
        return axios.get(`https://react-bc22.firebaseio.com/tasks.json`)
            .then(response => {
                const data = [];
                const keys = Object.keys(response.data);
                for (const key of keys) {
                    data.push({ id: key, ...response.data[key] })
                }
                return data
            })
            .catch(error => console.log(error));
    },
    createTask(task) {
        return axios.post(`https://react-bc22.firebaseio.com/tasks.json`, task)
            .then(response => response.data.name)
    },

    deleteTask(id) {
        return axios.delete(`https://react-bc22.firebaseio.com/tasks/${id}.json`)
            .then(response => response.data ? false : true);
    },
    updateTask(id, task) {
        return axios.patch(`https://react-bc22.firebaseio.com/tasks/${id}.json`, task)
    }
};


