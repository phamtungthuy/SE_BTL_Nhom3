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
                language: language,
                difficulty: level
               }
            });
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
                    await currentRecord.update({
                        total_score: currentRecord.total_score + score,
                        highest_wpm: Math.max(currentRecord.highest_wpm, WPM)
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

let createNewParagraph = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data);
            if(!data.content || !data.difficulty || !data.language) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameters'
                })
                return;
            }
            //check email is exists?

            await db.Paragraph.create({
                  difficulty: data.difficulty,
                  language: data.language,
                  is_test: data.is_test,
                  content: data.content
            })
            resolve({
                errCode: 0,
                message: 'OK'
            });
        } catch(e) {
            reject(e);
        }
    });
}

let getAllParagraphs = () => {
    return new Promise(async (resolve, reject) => {
        try{
            let paragraphs = await db.Paragraph.findAll();
            
            resolve(paragraphs);
      } catch(e) {
        console.log('error!!!!!!!!');
            reject(e);
        }
    })
}

let deleteParagraph = (paragraphId) => {
    return new Promise(async (resolve, reject) => {
        let paragraph = await db.Paragraph.findOne({
            where: {id: paragraphId}
        });
        if(!paragraph) {
            resolve({
                errCode: 2,
                errMessage: `The paragraph isn't exist`
            })
        }
        await paragraph.destroy({
            where: {id: paragraphId}
        });

        resolve({
            errCode: 0,
            errMessage: `The user has been deleted`
        })
    });
}

let updateParagraphData = async (data) => {
    return new Promise(async (resolve, reject) => {
        try{
            console.log(data);
            if(!data.id) {
                resolve({
                    errCode: 2,
                    errMessage: `Missing required parameters`
                })
            }
            let paragraph = await db.Paragraph.findOne({
                where: {id: data.id},
                raw: false
            });
            if(paragraph) {
                paragraph.difficulty = data.difficulty;
                paragraph.language = data.language;
                paragraph.is_test = data.is_test;
                paragraph.content = data.content;
                await paragraph.save();
                    
                resolve({
                    errCode: 0,
                    message: 'Update successfully!'
                });
            } else {
                resolve({
                    errCode: 1,
                    errMessage: `User's not found!`
                });
            }
        } catch(err){
            reject(err);
        }
    })
}

module.exports = {
    getAllRecords,
    getParagraphsExceptTest,
    getTestParagraphs,
    updateRecords,
    createNewParagraph,
    getAllParagraphs,
    deleteParagraph,
    updateParagraphData
}