const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

const router = express.Router()

let time = new Date()

router.use((req, res, next) => {
	console.log('There is requesting:' + time)
	next()
})

// router.get('/:name', (req, res) => {
// 	console.log(app.mountpath)
// 	res.send('<h1>hello node.js' + req.params.name + '</h1>')
// })

router.post('/', (req, res) => {
	let name = req.body.name
	res.json({
		message: 'hello: ' + name
	})
})

app.use((req, res, next) => {
	console.log('There is requesting:' + time)
	next()
})

app.get('/home', (req, res) => {
	console.log(app.mountpath)
	res.send('<h1>hello node.js' + req.query.name + '</h1>')
})

const port = process.env.port || 8080
app.listen(port)
console.log('Magic happens on port :' + port);