// declare var process : any;
const Discord = require('discord.js');
const client = new Discord.Client();
const log = require('simple-node-logger').createSimpleFileLogger('loggings.log'); 
 
const env = require('dotenv').config();

const replytToGreeting = require("./send-message-greeting.ts");

const replySameMessage = require('./return_same_msg.ts')

client.once('ready', () => {
    log.info("READY start: the Damin bot is online")
    console.log('ready !')
    log.info("READY end: the Damin bot is online")

})
const my_greeting = ["hello", "Hello", "Hola", "hola", "Yo", "yo", "salut", "Salut", "bonjour", "Bonjour"]

client.on("message", (receivedMessage) => {
    //replytToGreeting(my_greeting, receivedMessage.content, receivedMessage.channel, receivedMessage.author.toString())
    replySameMessage(my_greeting, receivedMessage.content, receivedMessage.channel)
});

client.login(process.env.token);
//console.log(process.env.token)
module.exports = client;
