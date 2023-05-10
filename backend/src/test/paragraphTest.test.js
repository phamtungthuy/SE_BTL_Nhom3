const request = require("supertest")
const baseURL = "http://localhost:8000"

const bodyDataIsTest = {
    language: "english",
    level: "beginner",
    is_test: 1
}

const bodyDataIsTestv = {
    language: "vietnamese",
    level: "advanced",
    is_test: 1
}

const bodyDataIsNotTest = {
    language: "english",
    level: "beginner",
    is_test: 0
}

const bodyDataIsNotTestv = {
    language: "vietnamese",
    level: "intermediate",
    is_test: 0
}


describe("paragraph-api", () => {
    it("get user parag1 test", async () => {
        const res = await request(baseURL).post('/api/get-test-paragraphs').send(bodyDataIsTest)
        // console.log(res.body)
        expect(res.body.errCode).toBe(0);
        expect(res.body.errMessage).toBe('OK')
        expect(res.body.paragraphs.length).toBe(2);
    })

    it("get user parag2 test", async () => {
        const res = await request(baseURL).post('/api/get-test-paragraphs').send(bodyDataIsTestv)
        // console.log(res.body)
        expect(res.body.errCode).toBe(0);
        expect(res.body.errMessage).toBe('OK')
        expect(res.body.paragraphs.length).toBe(2);
    })

    it("get user parag1 not test", async () => {
        const res = await request(baseURL).post('/api/get-test-paragraphs').send(bodyDataIsNotTest)
        // console.log(res.body)
        expect(res.body.errCode).toBe(0);
        expect(res.body.errMessage).toBe('OK')
        expect(res.body.paragraphs.length).toBe(2);
    })

    it("get user parag2 not test", async () => {
        const res = await request(baseURL).post('/api/get-test-paragraphs').send(bodyDataIsNotTestv)
        // console.log(res.body)
        expect(res.body.errCode).toBe(0);
        expect(res.body.errMessage).toBe('OK')
        expect(res.body.paragraphs.length).toBe(2);
    })

    it("test guest parag", async () => {
        const res = await request(baseURL).get('/api/get-paragraphs')
        expect(res.body.errCode).toBe(0);
        expect(res.body.errMessage).toBe('OK')
        expect(res.body.paragraphs.length).toBe(12);
    })
    
    it("test guest parag", async () => {
        const res = await request(baseURL).get('/api/get-paragraphs')
        expect(res.body.errCode).toBe(0);
        expect(res.body.errMessage).toBe('OK')
        expect(res.body.paragraphs.length).toBe(12);
    })
});