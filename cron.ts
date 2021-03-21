const Discord = require('discord.js');
const client = new Discord.Client();
const cron = require('node-cron');   //npm install --save node-cron, command that need to be run to install cron with npm 
const env = require('dotenv').config();
const log = require('simple-node-logger').createSimpleFileLogger('loggings.log'); //npm install simple-node-logger --save

client.once('ready', () => {
    log.info("READY start: the Damin bot is online")
    console.log('ready !')
    log.info("READY end: the Damin bot is online")
});

cron.schedule("30 09 * * *", function(){
    console.log("The cron is running...");
    log.info("CRON start: sending message at 9:30")

    const channel = client.channels.cache.find(channel => channel.name === "channel-marwa-tiphaine-morjane")
    channel.send("Hello la team, time to code! ")

    log.info("CRON end: sending message at 9:30")
});

cron.schedule("00 11 * * *", function(){
    console.log("The cron is running...");
    log.info("CRON start: sending message at 11:00")

    const channel = client.channels.cache.find(channel => channel.name === "channel-marwa-tiphaine-morjane")
    channel.send("Break time people! ")

    log.info("CRON end: sending message at 11:00")
});

cron.schedule("00 13 * * *", function(){
    console.log("The cron is running...");
    log.info("CRON start: sending message at 13:00")

    const channel = client.channels.cache.find(channel => channel.name === "channel-marwa-tiphaine-morjane")
    channel.send("Lunch break! ")

    log.info("CRON end: sending message at 13:00")

});

cron.schedule("00 14 * * *", function(){
    console.log("The cron is running...");
    log.info("CRON start: sending message at 14:00")

    const channel = client.channels.cache.find(channel => channel.name === "channel-marwa-tiphaine-morjane")
    channel.send("No nap for the brave, go back to work! ")

    log.info("CRON end: sending message at 14:00")

});

cron.schedule("00 16 * * *", function(){
    console.log("The cron is running...");
    log.info("CRON start: sending message at 16:00")

    const channel = client.channels.cache.find(channel => channel.name === "channel-marwa-tiphaine-morjane")
    channel.send("Break time people! ")

    log.info("CRON end: sending message at 16:00")

});

cron.schedule("30 17 * * *", function(){
    console.log("The second cron is running...");
    log.info("CRON start: sending message at 17:30")

    const channel = client.channels.cache.find(channel => channel.name === "channel-marwa-tiphaine-morjane")
    channel.send("Time to go back home ... but coding never stops! ")

    log.info("CRON end: sending message at 17:30")

});
// mettre dans un fichier solo 

client.login(process.env.token);
//console.log(process.env.token)
