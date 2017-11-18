const express = require('express')

let app = express()

app.get('/', (req, res) => {
    res.send({
        err:'Page not found',
        text:'Hello moto!'
    })
})

app.get('/users', (req, res) => {
    res.send([
        {
            name: 'Rico',
            age: 20
        },
        {
            name: 'Moco',
            age:24
        },
        {
            name: 'Poco',
            age:99
        }
    ])
})

app.listen(3000)

module.exports.app = app