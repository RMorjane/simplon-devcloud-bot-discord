// declare var process : any;
var Discord = require('discord.js');
var client = new Discord.Client();
var env = require('dotenv').config();
client.once('ready', function () {
    var generalChannel = client.channels.cache.find(function (channel) { return channel.name === "commandes-bot4"; });
    generalChannel.send("Damin is watching");
    console.log('ready !');
});
var my_greeting = ["hello", "Hello", "Hola", "hola", "Bonjour", "bonjour", "Salut", "salut", "Yo", "yo"];
client.on("message", function (receivedMessage) {
    //https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript
    if (my_greeting.includes(receivedMessage.content) || receivedMessage.content == "/hello") {
        receivedMessage.channel.send(receivedMessage.content + " " + receivedMessage.author.toString() + " !");
        //toString anable message to convert the id to the username
    }
});
client.login(process.env.token);
//console.log(process.env.token)
module.exports = client;
