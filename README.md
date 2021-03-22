# Bot discord

Here is our Damin Discord Project, that replies to your greeting and reminds you to take a break from time to time.

## Technologies

In this project, we used :  

 - Javascript                            
 - Node.js
 - Typescript
 
 ### Libraries

 1. Chai
 2. Mocha
 3. Discord.js
 4. Node-cron
 5. simple-node-logger
 6. dotenv

 
 You can install them locally or in your python docker container if you write this command line :

    npm install chai mocha Discord.js node-cron simple-node-logger dotenv


## Files and Organisations


In this project, all the files are interconnected to produce the final result.
The main file that connect the bot to the discord channel is `index.ts`.

We have several files that return some functionalities.
The `cron.ts` has all the reminder of the bot, such as break time, send hello and goodbye in the end of the day or a message when it's lunch time.

`send-message-greeting.ts` ans `find-reponse.ts` files reply to user with specific values.

Then, we tested our functions in the `test folder` with Chai and Mocha, running it on `.github` to assert that all the test are applicable.



## Next step

In the near futur, we will add more functionnalities in our discord bot :

 - [ ] Creating groups with cron
 - [ ] Convert all of our script in TypeScript 
 - [X] Adding some test
 - [X] Deploying it with Azure App Service

## Credits
- Marwa Majbri : https://github.com/Marwacoding
- Tiphaine Minguet : https://github.com/Tiphnm
- Morjane Rhellab : https://github.com/RMorjane
 
## Timeline

All our steps to realize this project can be find in our Notion workplace and in our GitHub Project
Notion : https://www.notion.so/Bot-Discord-60f5f7bfc7434e349178a89f83a9a9e1



Github : https://github.com/RMorjane/simplon-devcloud-bot-discord/projects/1
