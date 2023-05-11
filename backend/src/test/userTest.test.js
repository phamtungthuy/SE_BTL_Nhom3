const request = require("supertest")
const baseURL = "http://localhost:8000"

const adminInfo = {
    "email": "admin@admin.com",
    "password" : "password"
}

const wrongPass = {
    "email": "admin@admin.com",
    "password" : "chipu"
}

const wrongEmail = {
    "email" : "wrong@gmail.com",
    "password": "password"
}

const injection = {
    "email" : "'' or ''=''",
    "password": "'' or ''=''"
}

const newUser1 = {
    "name" : "nghia",
    "email" : "gg@gmai.com",
    "password" : "123",
    "address" : "VietNam",
    "phoneNumber" : "172017",
    "gender" : 0
}

const newUser2 = {

}

const newUser3 = {

}


describe('user-api', () => {
    it("get all users", async () => {
        const res = await request(baseURL).get('/api/get-all-users')
        expect(res.body.errCode).toBe(0)
        // expect(res.body.dataValues.id).toBe(1)
    })

    // it("create new user 1", async () => {
    //     const res =await request(baseURL).post('/api/create-new-user').send(newUser1)
    //     expect(res.body.errCode).toBe(0)
    // })

    // it("create new user 2 (invalid user same email)", async () => {
    //     const res =await request(baseURL).post('/api/create-new-user').send(newUser2)
    //     expect(res.body.errCode).toBe(1)
    //     expect(res.body.errMessage).toBe("")
    // })

    // it("create new user 3 (invalid user missing info)", async () => {
    //     const res =await request(baseURL).post('/api/create-new-user').send(newUser3)
    //     expect(res.body.errCode).toBe(1)
    //     expect(res.body.errMessage).toBe("Missing parameters")
    // })

    it("login 1 admin", async () => {
        const res = await request(baseURL).post('/api/login').send(adminInfo)
        expect(res.body.errCode).toBe(0)
        expect(res.body.errMessage).toBe("OK")
        // expect(res.body.user).not.toBe({})
    })

    it("login 2 sql injection test", async () => {
        const res = await request(baseURL).post('/api/login').send(injection)
        expect(res.body.errCode).toBe(1)
        // expect(res.body.user).toBe({})
    })

    it("login 3 invalid password", async () => {
        const res = await request(baseURL).post('/api/login').send(wrongPass)
        expect(res.body.errCode).toBe(3)
        // expect(res.body.user).toBe({})
    })

    it("login 4 invalid email", async () => {
        const res = await request(baseURL).post('/api/login').send(wrongEmail)
        expect(res.body.errCode).toBe(1)
        // expect(res.body.user).toBe({})
    })

})