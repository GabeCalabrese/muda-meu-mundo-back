const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios')

app.use(cors())

app.get('/', async(req, res) => {

    // response é a resposta do axios MAS eu tiro os dados de dentro do response
    const { data } = await axios('https://jsonplaceholder.typicode.com/users')
    console.log(data)

    return res.json([
        { name: 'gabe' },
        { name: 'leticia'}
    ])
})

app.listen('4567')