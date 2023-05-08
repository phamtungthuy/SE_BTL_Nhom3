import axios from "../axios";
const handleLogin = (userEmail, userPassword) => {
    return axios.post('/api/login', {email: userEmail, password: userPassword});
}

const getAllUsers = (id) => {
    return axios.get(`/api/get-all-users?id=${id}`, {id: id});
}

const createNewUserService = (data) => {
    return axios.post('/api/create-new-user', data);
}

const deleteUserService = (id) => {
    return axios.delete('/api/delete-user', {data: {id}});
}

const editUserService = (inputData) => {
    return axios.put('/api/edit-user', {
        ...inputData
    })
}

export  {handleLogin, 
    getAllUsers, 
    createNewUserService, 
    deleteUserService,
    editUserService
};