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
    "username" : "nghia567",
    "email" : "gg1@gmai.com",
    "password" : "1234",
    "address" : "VietNam",
    "phoneNumber" : "172017",
    "gender" : 0
}

const newUser2 = {
    "username" : "nghia56777",
    "email" : "gg1@gmai.com",
    "password" : "122234",
    "address" : "VietNam",
    "phoneNumber" : "1720523217",
    "gender" : 0
}

const newUser3 = {
    "username" : "nghia567",
    "email" : "gg1@gmai.com",
    // "password" : "1234",
    "address" : "VietNam",
    "phoneNumber" : "172017",
    "gender" : 0
}

const existUser = {
    "username" : "chupu123",
    "email" : "gg@gmai.com",
    "password" : "123",
}

const editUserInfo = {
    "id" : 6,
    "name" : "nghia123testedit",
    "address": "namdinh",
    "phoneNumber" : "0000"
}

const deleteId = {
    "id" : 5
}


describe('user-api', () => {
    it("get all users", async () => {
        const res = await request(baseURL).get('/api/get-all-users')
        expect(res.body.errCode).toBe(0)
        // expect(res.body.dataValues.id).toBe(1)
    })

    it("create new user 1", async () => {
        const res =await request(baseURL).post('/api/create-new-user').send(newUser1)
        expect(res.body.errCode).toBe(0)
    })

    it("create new user 2 (invalid user same email)", async () => {
        const res =await request(baseURL).post('/api/create-new-user').send(newUser2)
        expect(res.body.errCode).toBe(1)
        expect(res.body.errMessage).toBe("")
    })

    it("create new user 3 (invalid user missing info)", async () => {
        const res =await request(baseURL).post('/api/create-new-user').send(newUser3)
        expect(res.body.errCode).toBe(1)
        expect(res.body.errMessage).toBe("Missing parameters")
    })

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

    it("create user", () => {
        const res = request(baseURL).post('/api/create-new-user').send(newUser1)
        // console.log(res)
        expect(res.body.errCode).toBe(0)
        expect(res.body.message).toBe("OK")
    })

    it("edit user info", () => {
        const res = request(baseURL).put('/api/edit-user').send(editUserInfo)
        expect(res.body.errCode).toBe(0)
        expect(res.body.errMessage).toBe("Update successfully!")
    })

    it("delete user", () => {
        const res = request(baseURL).delete('api/delete-user').send(deleteId)
        expect(res.body.errCode).toBe(0)
        expect(res.body.errMessage).toBe("The user has been deleted")
    })
})