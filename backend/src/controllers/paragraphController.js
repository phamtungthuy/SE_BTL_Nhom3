import otherServices from '../services/otherService';

let getParagraphs = async (req, res) => {
    let paragraphs = await otherServices.getParagraphsExceptTest();
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        paragraphs
    })
}

let getTestParagraphs = async (req, res) => {
    console.log(req.body.language, req.body.level);
    let paragraphs = await otherServices.getTestParagraphs(req.body.language, req.body.level);
    if(paragraphs.errCode == 1) {
        return res.status(500).json({
            ...paragraphs
        })
    }
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        paragraphs
    })
}

let handleCreateNewParagraph = async (req, res) => {
    console.log(req.body);
    let message = await otherServices.createNewParagraph(req.body);
    return res.status(200).json(message);    
}

let handleGetAllParagraphs = async (req, res) => {

    let paragraphs = await otherServices.getAllParagraphs();
    console.log(paragraphs);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        paragraphs:paragraphs
    });
}

let handleEditParagraph  = async (req, res) => {
    let data = req.body;
    let message = await otherServices.updateParagraphData(data);
    return res.status(200).json(message);
}

let handleDeleteParagraph = async (req, res) => {
    if(!req.body.id) {
        return res.status(200).json({
            errCode: 1,
            errMessage: "Missing required parameters"
        });
    }
    let message = await otherServices.deleteParagraph(req.body.id);
    return res.status(200).json(message); 
}



module.exports = {
    getParagraphs,
    getTestParagraphs,
    handleCreateNewParagraph,
    handleGetAllParagraphs,
    handleEditParagraph,
    handleDeleteParagraph
}