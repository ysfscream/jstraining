var add = require('./add.js')
var expect = require('chai').expect

describe('加法测试函数', function() {
    it('3 + -3 应该等于 0', function() {
        expect(add(3, -3)).to.be.equal(0)
    })
})