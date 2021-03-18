const Discord = require('discord.js');
const client = new Discord.Client();
const log = require('simple-node-logger').createSimpleFileLogger('loggings.log'); 
 
const env = require('dotenv').config();

client.once('ready', () => {
    log.info("READY start: the Damin bot is online")
    console.log('ready !')
    log.info("READY end: the Damin bot is online")

})


client.login(process.env.token);
//console.log(process.env.token)