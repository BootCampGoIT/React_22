import axios from 'axios'

const API_KEY = `AIzaSyA3EpGxauQXVftQbHutQd2bntOzY9HMEJ0`

export default {


    async signUp(user) {
        // return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, user)

        try {
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, { ...user, returnSecureToken: true })
            axios.post('https://react-bc22.firebaseio.com/users.json', { email: response.data.email, localId: response.data.localId })
            return response
        } catch (error) {
            throw new Error(error);
        }


    },

    async signIn(user) {
        try {
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, { ...user, returnSecureToken: true })
            return response
        } catch (error) {
            throw new Error(error);
        }
    }

}