const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log(req.headers, Object.keys(req))
    res.send(JSON.stringify(req.headers))
})

app.listen(4001, () => console.log('Example app listening on port 4001!'))