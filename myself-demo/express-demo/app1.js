const express = require('express')
const app = express()

const router = express.Router()

router.get('/', (req, res) => {
	let sort = req.param('sort')
	res.send('<h1>hello node</h1>')
})

app.use('/home', router)

const port = process.env.port || 2000
app.listen(port)
console.log('Magic happens on port :' + port);