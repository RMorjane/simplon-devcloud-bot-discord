FROM node
WORKDIR /app
COPY . .
RUN npm install -g typescript ts-node chai mocha discord.js dotenv node-cron simple-node-logger
CMD ["node", "index.ts"], ["node", "cron.ts"]

