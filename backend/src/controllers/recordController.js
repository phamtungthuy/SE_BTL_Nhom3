import otherServices from '../services/otherService';
let handleGetAllRecords = async (req, res) => {
    let records = await otherServices.getAllRecords();
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        records
    })
};

let handleUpdateRecords = async (req, res) => {
    console.log('records: /................./', req.body)
    let object = await otherServices.updateRecords(
        req.body.userId,
        req.body.paragraphId,
        req.body.score,
        req.body.wpm,
        req.body.accuracy
    );
    return res.status(200).json({
        object
    })
}

module.exports = {
    handleGetAllRecords,
    handleUpdateRecords
}