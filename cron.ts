const Discord = require('discord.js');
const client = new Discord.Client();
const cron = require('node-cron');   //npm install --save node-cron, command that need to be run to install cron with npm 
const env = require('dotenv').config();

client.once('ready', () => {
    console.log('ready !')
});

cron.schedule("30 09 * * *", function(){
    console.log("The cron is running...");
    const channel = client.channels.cache.find(channel => channel.name === "channel-marwa-tiphaine-morjane")
    channel.send("Hello la team, time to code! ")
});

cron.schedule("00 11 * * *", function(){
    console.log("The cron is running...");
    const channel = client.channels.cache.find(channel => channel.name === "channel-marwa-tiphaine-morjane")
    channel.send("Break time people! ")
});

cron.schedule("00 13 * * *", function(){
    console.log("The cron is running...");
    const channel = client.channels.cache.find(channel => channel.name === "channel-marwa-tiphaine-morjane")
    channel.send("Lunch break! ")
});

cron.schedule("00 14 * * *", function(){
    console.log("The cron is running...");
    const channel = client.channels.cache.find(channel => channel.name === "channel-marwa-tiphaine-morjane")
    channel.send("No nap for the brave, go back to work! ")
});

cron.schedule("00 16 * * *", function(){
    console.log("The cron is running...");
    const channel = client.channels.cache.find(channel => channel.name === "channel-marwa-tiphaine-morjane")
    channel.send("Break time people! ")
});

cron.schedule("30 17 * * *", function(){
    console.log("The second cron is running...");
    const channel = client.channels.cache.find(channel => channel.name === "channel-marwa-tiphaine-morjane")
    channel.send("Time to go back home ... but coding never stops! ")
});
// mettre dans un fichier solo 

client.login(process.env.token);
//console.log(process.env.token)