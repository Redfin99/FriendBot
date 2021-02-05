import * as commands from './commands.js'

export function commandHandler(msg) {
    let tokens = msg.content.split(' ');
    let prefix = tokens.shift();
    
    if (prefix.charAt(0) !== '!') {
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
        ['🦆', 'duck'],
    ])
    const reactName = reaction.emoji.name;
    const command = reactMap.get(reactName);
    
    try {
        commands[command](reaction.message, '');
    }
}