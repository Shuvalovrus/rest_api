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