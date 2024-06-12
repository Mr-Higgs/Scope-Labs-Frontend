import axios from 'axios';

// Create an instance of axios with a base URL and headers
const api = axios.create({
    // Set the base URL for all requests made by this instance
    baseURL: 'http://localhost:5000',

    // Set the headers that will be included in all requests
    headers: {
        'Content-Type': 'application/json'
    }
});


export default api;