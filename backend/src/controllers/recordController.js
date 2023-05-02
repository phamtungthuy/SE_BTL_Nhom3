import otherServices from '../services/otherService';
let handleGetAllRecords = async (req, res) => {
    let records = await otherServices.getAllRecords();
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        records
    })
};

module.exports = {
    handleGetAllRecords
}