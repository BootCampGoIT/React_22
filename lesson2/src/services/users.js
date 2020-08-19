import axios from 'axios'

export default {

    async getUsers() {
        try {
            const response = await axios.get('https://react-bc22.firebaseio.com/users.json')//null
            if (response.data) {
                const keys = Object.keys(response.data)
                return keys.reduce((acc, key) => {
                    acc.push({ id: key, ...response.data[key] })
                    return acc
                }, [])
            } else return []
        } catch (error) {
            throw new Error("error");

        }
    },

    editUser(user) {
        try {
            return axios.patch(`https://react-bc22.firebaseio.com/users/${user.id}.json`, user)
        } catch (error) {
            throw new Error("error");
        }
    }
}