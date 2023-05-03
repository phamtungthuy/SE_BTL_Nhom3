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

let getTestParagraphs =  (language, level) => {
    return new Promise(async(resolve, reject) => {
        try{
            if(!language || !level) {
                resolve({
                    errCode: 1,
                    errMessage: 'language or level is required'
                })
                return;
            }
            let  paragraphs = await db.Paragraph.findAll({
               where: {
                language,
                difficulty: level
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

let updateRecords = async (userId, paragraphId, score, WPM, accuracy) => {
    return new Promise(async(resolve, reject) => {
        try{
            let typing = await db.Typing.create({
                user_id: userId,
                paragraph_id: paragraphId,
                score: score,
                wpm: WPM,
                accuracy: accuracy
            })
            let  record = await db.Record.findOne({
                include: [
                    {
                        model: db.Typing,
                        include: [{
                            model: db.User,
                            attributes: ['name'],
                            where: {
                                id: userId
                            }
                        }],
                        where: {
                            user_id: userId
                        }
                    }
                ],
                attributes: [
                    'id',
                    'total_score',
                    'highest_wpm'
                ],
                raw: false
               });
               if(!record) {
                        await db.Record.create({
                            typing_id: typing.id,
                            total_score: score,
                            highest_wpm: WPM
                        })
                        resolve({
                            message: 'create new record'
                        })
                        return ;
               } 
               else {
                    let currentRecord = await db.Record.findOne({
                        where: {
                            id: record.id
                        }
                    })
                    currentRecord.update({
                        total_score: record.total_score + record.Typing.score,
                        highest_wpm: Math.max(record.highest_wpm, record.Typing.wpm)
                    })
                    resolve({
                        message: 'update record'
                    })
               }

        } catch(err){
            console.log(err);
            reject(err);
        }
    })
}

module.exports = {
    getAllRecords,
    getParagraphsExceptTest,
    getTestParagraphs,
    updateRecords
}