const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()

const app = express()
app.use(cors())
const apiKey = process.env.API_KEY

port = 3000

app.get('/top-headlines', async (req, res) => {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
        const response = await fetch(apiUrl)
        const data = await response.json()
        res.json(data)
    }
    catch (error) {
        console.error("Error")
        res.status(500).json({ error: "Error" })
    }
});

app.get('/world', async (req, res) => {
    try {
        const initialSearchQuery = "world";
        const initialLanguage = "en";
        const apiUrl = `https://newsapi.org/v2/everything?q=${initialSearchQuery}&language=${initialLanguage}&from=2024-03-10&sortBy=publishedAt&apiKey=${apiKey}`;
        const response = await fetch(apiUrl)
        const data = await response.json()
        res.json(data)
    }
    catch (error) {
        console.error("Error")
        res.status(500).json({ error: "Error" })
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})