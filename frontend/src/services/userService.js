import axios from "../axios";
const handleLogin = (userEmail, userPassword) => {
    return axios.post('/api/login', {email: userEmail, password: userPassword});
}

const getAllUsers = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`, {id: id});
}

const createNewUserService = (data) => {
    console.log('check data from service: ', data);
    return axios.post('/api/create-new-user', data);
}

export  {handleLogin, getAllUsers, createNewUserService};