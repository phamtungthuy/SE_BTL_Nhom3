import axios from "../axios";
const getAllRecords = () => {
    return axios.get('/api/get-all-records');
}

export  {getAllRecords};