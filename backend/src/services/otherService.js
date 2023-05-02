import db from '../models/index';
import {sequelize} from '../config/connectDB';
let getAllRecords =  () => {
    return new Promise(async(resolve, reject) => {
        try{
           let  records = await db.Record.findAll({
            include: [
                {
                    model: db.Typing,
                    include: [{
                        model: db.User,
                        attributes: ['name'] 
                    }],
                }
            ],
            attributes: [
                'total_score',
                'highest_wpm'
            ]
           });
            console.log(records);
            resolve(records);
        } catch(err){
            console.log(err);
            reject(err);
        }
    })
}

module.exports = {
    getAllRecords
}