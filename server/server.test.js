const request = require('supertest')
const expect = require('expect')

const app = require('./server').app

describe('Server', () => {

    describe('GET /', () => {
        it('should return hello world response', (done) => {
            request(app)
                .get('/')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        text: 'Hello moto!'
                    })
                })
                .end(done)
        })
    })

    describe('GET /users', () => {
        it('should return array of users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Rico',
                        age: 20
                    })
                })
                .end(done)
        })
    })
})


