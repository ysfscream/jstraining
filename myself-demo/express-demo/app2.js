const express = require('express')
const app = express()

const router = express.Router()

router.get('/:name', (req, res) => {
	res.send('<h1>hello node' + req.params.name + '</h1>')
})

app.use('/home', router)

const port = process.env.port || 3200
app.listen(port)
console.log('Magic happens on port :' + port);