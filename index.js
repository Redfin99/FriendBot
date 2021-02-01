const Discord = require('discord.js');
const client = new Discord.Client();

client.login('ODA0OTg4NDg3MzU0NDE3MTYy.YBUV8w.0mQ-RrmF4wd4FV-EYgFxT1FwaqI');

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('<3');
}

client.on('message', checkMessage);

const replyList = [
    'I agree',
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
