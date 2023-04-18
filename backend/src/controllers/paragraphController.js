const db = require('../models')
const para = db.Paragraph

let getParagraph = (req, res) => {
    para.findAll({
        where: {
            id: req.params.id,
            // is_test: req.params.is_test
        }
    })
    .then(data => {res.status(200).send(data)})
    .catch(err => {res.status(500).send({message : err.message})})
}

let addParagrpah = (req, res) => {

}



module.exports = {
    getParagraph
}