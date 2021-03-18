
module.exports = function replytToGreeting(list, msg, channel, username){

    if (list.includes(msg) || msg == "/hello") {
        return channel.send(msg + " " + username.toString() + " !");
        //toString anable message to convert the id to the username
    }
};
