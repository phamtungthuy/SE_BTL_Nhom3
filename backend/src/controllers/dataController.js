const db = require('../models')
const para = db.Paragraph

let getParagraph = (req, res) => {
    para.findAll({
        where: {
            id: req.params.id
        }
    })
    .then(data => {res.send(data)})
    .catch(err => {res.status(500).send({message : err.message})})
}



module.exports = {
    getParagraph
}