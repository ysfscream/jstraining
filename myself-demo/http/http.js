'use strict'

// node 加载静态页面在服务器 文件服务器

const http = require('http')
const fs  = require('fs')
const url = require('url')
const path = require('path')

const root = path.resolve(process.argv[2] || '.')
console.log(`static root dir ${root}`)

const server = http.createServer((req, res) => {
	let pathName = url.parse(req.url).pathname
	let filePath = path.join(root, pathName)
	console.log(`${req.method} : ${req.url}`)
	fs.stat(filePath, (err, stats) => {
		if (!err && stats.isFile()) {
			success(filePath, req, res)
		} else if (!err && stats.isDirectory()) {
			let findFilePath
			fs.existsSync('index.html') ?
				findFilePath = path.join(root, 'index.html') :
					findFilePath = path.join(root, 'default.html')
			findFilePath ? success(findFilePath, req, res) : error(req, res)
		} else {
			error(req, res)
		}
	})
})

function success(filepath, req, res) {
	console.log(`200 ${req.url}`)
	res.writeHead(200, {
		'Content-type': 'text/html'
	})
	fs.createReadStream(filepath).pipe(res)
}

function error(req, res) {
	console.log(`404 : ${req.url}`)
	res.writeHead(404, {
		'Content-type': 'text/html'
	})
	res.end('<h1>404 Not Found</h1>')
}

let port = process.env.port || 8081

server.listen(port)

console.log(`server is running : ${port}`)
