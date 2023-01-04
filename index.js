// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: false });

const sendMessage = function(chatId, text) {
    console.log("[INFO] " + text);
    const res = bot.sendMessage(chatId, text);
    return res;
}

const sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const acende = async function(chatId) {
    const tsssPromise = sendMessage(chatId, "tsssss");

    const shots = "pra";
    const boom = "POOOW!";

    tsssPromise.then(async (resolve, reject) => {
        var joinShots = "";
        for (var i = 0; i < 11;) {
            const joinCount = Math.floor(Math.random() * 5);
    
            for (var j = 0; j < joinCount; j++) {
                joinShots += shots + " ";
                i++;
            }
            
            if (!!joinShots) {
                const firePromise = sendMessage(chatId, joinShots);                
                
            }
            joinShots = "";
        }
    
        const waitForPromise = sendMessage(chatId, "...");
    });

    const lastBoom = Math.floor(Math.random() * 10);
    if (lastBoom !== 0) {
        const waitLastBoom = Math.floor(Math.random() *3) + 3;
        await sleep(waitLastBoom * 1000);
        const boomPromise = sendMessage(chatId, boom);
    }
}

const Fuguete = {
    sendMessage : sendMessage,
    acende : acende,
}

exports.handler = (event) => {
    const body = JSON.parse(event.body);
    console.log(event);
    if (body.message.text && 
        (body.message.text.startsWith('/acende') || 
         body.message.text.startsWith('/gambeta'))) {

        Fuguete.acende(body.message.chat.id);
    }
    const response = {
        statusCode: 200,
        body: JSON.stringify('BOOM'),
    };

    return response;    
};
