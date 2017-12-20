const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

router.get('/', (req, res) => {
	res.send('<h1>hello node.js</h1>')
})

router.post('/', (req, res) => {
	let name = req.body.name
	res.json({
		message: 'hello: ' + name
	})
})

app.use('/home', router)

const port = process.env.port || 8081
app.listen(port)
console.log('Magic happens on port :' + port);