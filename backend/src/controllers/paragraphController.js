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

module.exports = {
    getParagraphs,
    getTestParagraphs
}