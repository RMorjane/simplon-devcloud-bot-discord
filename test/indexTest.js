const assert = require('chai').assert;
const expect = require('chai').expect;
const discord_client = require("../index.ts")
const reply_msg = require("../send-message-greeting.ts")
const reply_hello = require('../return_same_msg.ts')
const find_response = require('../find_response.ts')
// import { Course } from './course.js';

describe('test of our v.1 bot', function(){
    const client = discord_client
    const test_func_greeting = reply_msg
    const test_func_hello = reply_hello
    const test_func_find_response = find_response

    it('reply function is returning function', function(){
        assert.isFunction(test_func_greeting, "function");
    })

    it('reply msg function is returning function', function(){
        assert.isFunction(test_func_hello, "function");
    })

    it('verify the conformity of the message and return the correct response if it exists', function(){
    	let response = find_response("quel temps fait il ?");
	assert.equal(response,"il pleut");
    })

    // it('test if reply function return hello', async () => {

    //     await client.replySameMessage('hello')
    //     expect(channel.lastMessage.content).equal("hello !")
    //     done(); // call "done()" the parameter

    // }, 
    
    function(err) {
        if (err) throw err; // will fail the assert.doesNotThrow
        done();
    })

})
