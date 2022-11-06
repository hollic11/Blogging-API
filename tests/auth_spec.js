const request = require('supertest')
const {connect} = require('./database')
const userModel = require('../models/user.model')
const app = require('../app');

describe('Auth: Signup', () => {
    let conn;

    beforeAll(async () => {
        conn = await connect()
    })

    afterEach(async () => {
        await conn.cleanup()
    })

    afterAll(async () => {
        await conn.disconnect()
    })

    it('should signup a user', async () => {
        const response = await request(app).post('/signup')
        .set('content-type', 'application/json')
        .send({ 
            username: 'hollic11', 
            password: '280697', 
            firstName: 'Elijah',
            lastName: 'Odetokun',
            email: 'odetokunelijah8@gmail.com'
        })

        expect(response.status).toBe(201)
        expect(response.body).toHaveProperty('message')
        expect(response.body).toHaveProperty('user')
        expect(response.body.user).toHaveProperty('username', 'hollic11')
        expect(response.body.user).toHaveProperty('first_name', 'Elijah')
        expect(response.body.user).toHaveProperty('last_name', 'Odetokun')
        expect(response.body.user).toHaveProperty('email', 'odetokunelijah8@gmail.com')        
    })


    it('should login a user', async () => {
        // create user in out db
        const user = await userModel.create({ username: 'odetokunelijah8@gmail.com', password: '280697'});

        // login user
        const response = await request(app)
        .post('/login')
        .set('content-type', 'application/json')
        .send({ 
            username: 'odetokunelijah8@gmail.com', 
            password: '280697'
        });
    

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('token')      
    })
})