const Discord = require('discord.js');
const client = new Discord.Client();
 
const env = require('dotenv').config();

client.once('ready', () => {
    console.log('ready !')
})



client.login(process.env.token);
//console.log(process.env.token)