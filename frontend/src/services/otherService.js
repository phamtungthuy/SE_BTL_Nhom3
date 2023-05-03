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

const updateRecords = (info) => {
    return axios.post('/api/update-records', info )
}

export  {getAllRecords, getParagraphs, getTestParagraphs, updateRecords};