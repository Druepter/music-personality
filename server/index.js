const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "asdf1234",
    database: "spotify_data"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', (req, res) => {

    const sqlInsert = "INSERT INTO users (username, valenz, arousal) VALUES ('testUser', 10, 10)"
    db.query(sqlInsert, (err, result) => {
        console.log(err)
        console.log(result)
        res.send(err)
    })   
})

app.post("/createEntry", (req, res) => {

    const username = req.body.username
    const valenz = req.body.valenz
    const arousal = req.body.arousal

    const sqlInsert = "INSERT INTO users (username, valenz, arousal) VALUES (?, ?, ?)"
    db.query(sqlInsert, [username, valenz, arousal], (err, result) => {
        console.log(err)
        console.log(result)
    })
    res.send("huhu")
})

app.listen(3001, () => {
    console.log("running")
})