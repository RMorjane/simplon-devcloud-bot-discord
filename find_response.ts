class BotDictionary {

	_keys: string[] = [];
	_values: string[] = [];

	constructor(){
		
	}

    add(key: string, value: any) {
        this._keys.push(key);
        this._values.push(value);
    }

    remove(key: string) {
        var index = this._keys.indexOf(key, 0);
        this._keys.splice(index, 1);
        this._values.splice(index, 1);
    }

    keys(): string[] {
        return this._keys;
    }

    values(): string[] {
        return this._values;
    }

	valueOf(key: string){
		var index = this._keys.indexOf(key, 0);
		return this._values[index];
	}

    containsKey(key: string) {
        if (this._keys.indexOf(key)==-1) {
            return false;
        }

        return true;
    }

}

export function find_response(message: string): string {
	var today: Date
	var str_date: string
	var str_time: string
	var key_words: BotDictionary
	var list_words: Array<string>
	var word: string
	var response: string

	today = new Date()
	str_date = today.toLocaleDateString("fr")
	var dateFormat = require('dateformat') // npm install dateformat
	str_time = dateFormat(today,"hh:MM:ss")

	key_words = new BotDictionary()
	key_words.add("comment vas tu ?","très bien")
	key_words.add("quelle heure est il ?","il est : "+str_time)
	key_words.add("quel jour sommes nous ?","nous sommes le : "+str_date)
	key_words.add("quel temps fait il ?","il pleut")

	list_words = message.split('  ')
	word = list_words[0]
	response = key_words.valueOf(word.toLowerCase())
	if(response == undefined){
		return "je ne sais pas"
	}else{
		return response
	}
}