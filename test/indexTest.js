const assert = require('chai').assert;
const R = require("../index")

describe('test of our v.1 bot', function(){
    let client = R
    let str = "shqkdklq"
   

    it('reply fun is returning str', function(){
        assert.isString(str);
    })
})