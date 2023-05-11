const request = require("supertest")
const baseURL = "http://localhost:8000"


const editRecord = {
    "userId" : 3,
    "paragraphId": 3,
    "score" : 67.5,
    "wpm" : 80,
    "accuracy" : 90
}




describe('record-api', () => {
    it("get all records", async () => {
        const res = await request(baseURL).get('/api/get-all-records')
        expect(res.body.errCode).toBe(0) 
        expect(res.body.errMessage).toBe("OK")
    })

    it("update record", () => {
        const res = request(baseURL).post('/api/update-records').send(editRecord)
        expect(res.body.object).not.toBe({})   
    })

})