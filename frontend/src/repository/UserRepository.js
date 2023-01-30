import axios from "axios";

const url = 'http://localhost:8080';

axios.defaults.baseURL = url;

const config ={
    mode: 'cors',
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
}

const userRepository = {
    register: (username, name, surname) => {
        return axios.post('/user/save', {
            "username" : username,
            "name" : name,
            "surname": surname,
        }, config)
            .then(resp => {
                return resp.data;
            });
    },

    getUser: (username) => {
        return axios.post("/user/byUsername", {
            username: username,
        } , config);
    },
}

export default userRepository;