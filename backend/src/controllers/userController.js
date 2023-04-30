const db = require('../models')
const bcrypt = require('bcrypt')
const user = db.User

let getUser = (req, res) => {
    user.findOne({
        where: {
            id: req.params.id,
            // is_test: req.params.is_test
        }
    })
    .then(data => {res.status(200).send(data)})
    .catch(err => {res.status(500).send({message : err.message})})
}

let login = (req, res, next) => {
    const { username, password } = req.body;
    user.findOne({
        where: {
            name: username,
            password: password
        }
    })
    .then(data => {
        if (data === null) {
            res.status(403).send({"authen": "invalid"})
        }
        else {
            res.send({"message" : "okela"})}
            return next
        }
    )
    .catch(err => {res.status(202).send({message: err.message})})
}

module.exports = {
    getUser,
    login
}