
const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();
client.login(process.env.token);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('FriendBot Engaged');
}

client.on('message', checkMessage);

const replyList = [
    'I agree.',
    'Agree I do.',
    '100%.',
    'True.',
    'Agreed.'
];

function checkMessage(msg) {
    const randomInt = Math.floor(Math.random() * replyList.length);
    
    if(msg.content.includes('FB?')) {
        msg.channel.send(replyList[randomInt]);
    }
}