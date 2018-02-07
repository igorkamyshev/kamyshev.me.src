import axios from 'axios'


const BASE_PATH = 'https://usenotify.info/api/v0/'

export const telegram = (from, name, text) =>
    axios.post(`${BASE_PATH}telegram`, {
        user: '65400792',
        message: {
            medium: 'kamyshev.me',
            from,
            name,
            text,
        },
    })
