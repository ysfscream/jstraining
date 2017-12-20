'use strict'

const  fs = require('fs')

//读取文件
fs.readFile('spa.png', (err, data) => {
	if (err) {
		console.log(err)
	} else {
		console.log(data.length)
	}
})

//写文件
let data = '### xxx'
fs.writeFile('output.md', data, (err) => {
	if (err) {
		console.log(err)
	} else {
		console.log('ok')
	}
})

//获取文件大小，创建时间等信息
fs.stat('spa.png', (err, stat) => {
	if (err) {
		console.log(err)
	} else {
		console.log(stat.isFile())
		console.log(stat.isDirectory())
		if (stat.isFile()) {
			console.log(stat)
		}
	}
})

