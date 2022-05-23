const express = require('express')
const mySql = require('mysql2')
const bodyParser = require('body-parser')
const app = express()
const port = 3500

app.use(bodyParser.urlencoded({
    extended: true
}))

const connection = mySql.createConnection({
    host: 'localhost',
    port: '85',
    user: 'root',
    password: 'root',
    database: 'users'
})

connection.connect()

/* POST */
app.post('/api/addStudent' , (req, res) => {
    connection.query('INSERT INTO users (name, lastname, middlename, birthday, class) VALUES (?,?,?,?,?)' ,[req.body.name, req.body.lastname, req.body.middlename, req.body.date, req.body.class],
    (err, result) => {
        if (err) {
            throw err;
            res.redirect('/')
        } else {
            res.redirect('/')
        }
    })
})