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

let getParagraphsExceptTest = async (language, difficulty) => {
    return new Promise(async(resolve, reject) => {
        try{
            let  paragraphs = await db.Paragraph.findAll({
               where: {
                is_test: false
               }
            });
            console.log(paragraphs);
            resolve(paragraphs);
        } catch(err){
            console.log(err);
            reject(err);
        }
    })
}

let getTestParagraphs = async (language, difficulty) => {
    return new Promise(async(resolve, reject) => {
        try{
            if(!language || !difficulty) {
                resolve({
                    errCode: 1,
                    errMessage: 'language or difficulty is required'
                })
            }
            let  paragraphs = await db.Paragraph.findAll({
               where: {
                language,
                difficulty
               }
            });
            console.log(paragraphs);
            resolve(paragraphs);
        } catch(err){
            console.log(err);
            reject(err);
        }
    })
}

module.exports = {
    getAllRecords,
    getParagraphsExceptTest,
    getTestParagraphs
}