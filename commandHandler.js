import * as commands from './commands.js'

export function commandHandler(msg) {
    let tokens = msg.content.split(' ');
    let prefix = tokens.shift();

    if (prefix.charAt(0) !== '>' || msg.author.bot) {
        console.log(msg)
        return;
    }
    prefix = prefix.substring(1);
    
    try {
        commands[prefix](msg, tokens);
    }
    catch {
        msg.channel.send(`I'm sorry ` + msg.author.username + ` but I don't recognize that command.`);
    }
}
export function reactCommandHandler(reaction) {
    const reactMap = new Map([
        ['👍', 'agree'],
    ]);
    const reactName = reaction.emoji.name;
    const command = reactMap.get(reactName);
    
    if (command) {
        commands[command](reaction.message, '');
    }
}