import dotenv  from "dotenv"
dotenv.config()
import * as Discord from 'discord.js'
import { commandHandler, reactCommandHandler } from './commandHandler.js'

const client = new Discord.Client();

client.login(process.env.token);

client.on('ready', () => {
    console.log('FriendBot Engaged');
});

client.on('message', commandHandler);

client.on("messageReactionAdd", reactCommandHandler);