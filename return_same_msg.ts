module.exports = function replySameMessage(list, msg, channel){

    if (list.includes(msg) || msg == "/hello") {
        return channel.send(msg + " !");
        //toString anable message to convert the id to the username
    }
};