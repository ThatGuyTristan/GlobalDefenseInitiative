import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/',
})

instance.defaults.headers.common['key'] = 'AIzaSyDMzRyDbWg1ISWPhXvBCZDeXlSF6UUsMXw'

export default instance