import axios from 'axios'

export default {
    async addProduct(product) {
        try {
            const response = await axios.post(`https://react-bc22.firebaseio.com/products/${product.category}.json`, product)
            return response.data.name
        } catch (error) {
            console.log(error)
        }
    },

    async getAllProducts() {
        try {
            const response = await axios.get(`https://react-bc22.firebaseio.com/products.json`)
            const categories = Object.keys(response.data)
            const products = [];

            for (const category of categories) {
                const keys = Object.keys(response.data[category])

                for (const key of keys) {
                    const fullProduct = { id: key, ...response.data[category][key] }
                    products.push(fullProduct)
                }
            }
            return { products, categories }

        } catch (error) {
            console.log(error)
        }
    },

    async getProductsByCategory(category) {
        try {
            const response = await axios.get(`https://react-bc22.firebaseio.com/products/${category}.json`)
            console.log("response.data", response.data)
            const keys = Object.keys(response.data)
            const products = []
            for (const key of keys) {
                const fullProduct = { id: key, ...response.data[key] }
                products.push(fullProduct)

            }
            return products

        } catch (error) {
            console.log(error)
        }
    },

    async getProductsByID(category, id) {

        try {
            await axios.get(`https://react-bc22.firebaseio.com/products/${category}/${id}.json`)

        } catch (error) {
            console.log(error)
        }
    }
}