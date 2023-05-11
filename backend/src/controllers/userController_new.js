import userService from "../services/userService";
let handleLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    console.log(email);
    if(!email || !password) {
        return res.status(500).json({
            errCode: 1,
            errMessage: 'Missing inputs parameter'
        })
    }

    let userData = await userService.handleUserLogin(email, password);
    return res.status(200).json({
        errCode: userData.errCode,
        errMessage: userData.errMessage,
        user: userData.user ? userData.user : {}
    }
        
    );
}

let handleGetAllUsers = async (req, res) => {
    let users = await userService.getAllUsers();
    console.log(users);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        users:users
    });
}

let handleCreateNewUser = async (req, res) => {
    console.log(req.body)
    let message = await userService.createNewUser(req.body);
    return res.status(200).json(message);    
}



let handleDeleteUser = async (req, res) => {
    if(!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters"
        });
    }
    let message = await userService.deleteUser(req.body.id);
    return res.status(200).json(message); 
}

let handleEditUser = async (req, res) => {
    let data = req.body;
    let message = await userService.updateUserData(data);
    return res.status(200).json(message);
}


let test = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    return res.status(200).json({
        email,
        password
    })
}
module.exports = {
    handleLogin,
    handleGetAllUsers,
    handleCreateNewUser,
    handleEditUser,
    handleDeleteUser,
    test
}