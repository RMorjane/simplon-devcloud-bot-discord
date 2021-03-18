// declare var process : any;
const Discord = require('discord.js');
const client = new Discord.Client();
const env = require('dotenv').config();
//import replytToGreeting from "./send-message-greeting";
const replytToGreeting = require("./send-message-greeting.ts");
//import {{replytToGreeting}} from "./send-message-greeting";


client.once('ready', function () {
    const generalChannel = client.channels.cache.find(function (channel) { return channel.name === "commandes-bot4"; });
    //generalChannel.send("Damin is watching");
    console.log('ready !');
});


const my_greeting = ["hello", "Hello", "Hola", "hola", "Bonjour", "bonjour", "Salut", "salut", "Yo", "yo"];


client.on("message", function (receivedMessage) {
    //https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript
    
    replytToGreeting(my_greeting,receivedMessage.content, receivedMessage.channel, receivedMessage.author)
    console.log(typeof(replytToGreeting))
        //toString anable message to convert the id to the username
    }
);


client.login(process.env.token);
//console.log(process.env.token)
module.exports = client;
