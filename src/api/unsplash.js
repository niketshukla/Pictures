import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID IGh_9d2huOkRUYAV7DerXQQu5JQrMcwwoCRbh6JsRXA'
    }
});