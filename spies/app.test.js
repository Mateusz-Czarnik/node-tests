const expect = require('expect')
const rewire = require('rewire')

//Swap actual app object with rewire
let app = rewire('./app')

describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    }
    app.__set__('db', db)

    it('should call the spy correctly', () => {
        let spy = expect.createSpy()
        spy('Mateo', 333)
        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith('Mateo', 333)
    })

    it('should call saveUser with user object', () => {
        let email = 'mateo@mateo.com'
        let password = 'tsst32'

        app.handleSignup(email, password)
        expect(db.saveUser).toHaveBeenCalledWith({ email, password })
    })
})