var dateFormat = require('dateformat'); // npm install dateformat

function find_response(message){
	let today = new Date()
	let str_date = today.toLocaleDateString("fr")
	let str_time = dateFormat(today,"hh:MM:ss")
	let key_words = {
		"comment vas tu ?": "très bien",
		"quelle heure est il ?": "il est : "+str_time,
		"quel jour sommes nous ?": "nous sommes le : "+str_date,
		"quel temps fait il ?": "il pleut"
	}
	let list_words = message.split('  ')
	let word = list_words[0]
	let response = key_words[word.toLowerCase()]
	if(response == undefined){
		return "je ne sais pas"
	}else{
		return response
	}
}

var assert = require('assert');
describe('find_response',function(){
	it('find_response',function(){
		let response = find_response("quel temps fait il ?");
		assert.equal(response,"il pleut")
	});
});
