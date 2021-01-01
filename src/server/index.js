var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
const fetch = require("node-fetch");
dotenv.config();

const app = express()
let application_key = process.env.API_KEY;
console.log(`your key: ${process.env.API_KEY}`);

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/api', async function (req, res) {
    // console.log(req.body)
    let url = "https://api.meaningcloud.com/sentiment-2.1?key="
    const response = await fetch(`${url}${application_key}&txt=${req.body.text}&lang=en`)

    data = await response.json()
    console.log(data)
    res.send(data)
})