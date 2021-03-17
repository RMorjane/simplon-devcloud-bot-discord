const Discord = require('discord.js');
const client = new Discord.Client();
 
const env = require('dotenv').config();

client.once('ready', () => {
    let generalChannel = client.channels.cache.find(channel => channel.name === "commandes-bot4")
    generalChannel.send("Damin is watching") 
    console.log('ready !')
})

let my_greeting = ["hello", "Hello", "Hola", "hola", "Bonjour", "bonjour", "Salut", "salut", "Yo", "yo"]

client.on("message", (receivedMessage) => {
    //https://stackoverflow.com/questions/237104/how-do-i-check-if-an-array-includes-a-value-in-javascript
    if (my_greeting.includes(receivedMessage.content)) {
        receivedMessage.channel.send(receivedMessage.content + " " + receivedMessage.author.toString() + " !");
        //toString anable message to convert the id to the username
    }
});


client.login(process.env.token);
//console.log(process.env.token)