import axios from "../axios";
const getAllRecords = () => {
    return axios.get('/api/get-all-records');
}

const getParagraphs = () => {
    return axios.get('/api/get-paragraphs');
}

const getTestParagraphs = (language, level) => {
    return axios.post('/api/get-test-paragraphs', {language: language, level: level});
}

const getAllParagraphs = () => {
    return axios.get('/api/get-all-paragraphs');
}

const updateRecords = (info) => {
    return axios.post('/api/update-records', info )
}

const createNewParagraphService = (data) => {
    return axios.post('/api/create-new-paragraph', data);
}

const deleteParagraphService = (id) => {
    return axios.delete('/api/delete-paragraph', {data: {id}});
}

const editParagraphService = (inputData) => {
    return axios.put('/api/edit-paragraph', {
        ...inputData
    })
}

export  {getAllRecords, 
    getParagraphs, 
    getTestParagraphs, 
    updateRecords, 
    createNewParagraphService,
    getAllParagraphs,
    deleteParagraphService,
    editParagraphService};