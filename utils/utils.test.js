const expect = require('expect')

const utils = require('./utils')

describe('Utils', () => {
    it('should add two numbers', () => {
        let result = utils.add(1, 2)

        expect(result).toBe(3).toBeA('number')
    })

    it('should async add two numbers', (done) => {
        let result = utils.asyncAdd(3, 5, (sum) => {
            expect(sum).toBe(8)
            done()
        })
    })

    it('should async square two numbers', (done) => {
        let result = utils.asyncSquare(5, (sum) => {
            expect(sum).toBe(25).toBeA('number')
            done()
        })
    })

    it('should square number', () => {
        let result = utils.square(4)

        expect(result).toBe(16).toBeA('number')
    })
    
    it('should verify if firstName and lastName are set in object', () => {
        let result = utils.setName({ age: 25, location: 'Cracow' }, 'Mateusz Czarnik')

        expect(result).toInclude({
            firstName: 'Mateusz',
            lastName: 'Czarnik'
        }).toBeA('object')
    })
})

