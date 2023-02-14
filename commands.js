export function help(msg, args) {
    const commandDescriptions = {
        Agree: 'Replies to the user with an agreeable message.',
        Duck: 'Recounts a harrowing tale about the dangers of duck antics.'
    }

    msg.channel.send('Commands should be prefixed with ">".');
    for (const desc in commandDescriptions) {
        const name = desc;
        msg.channel.send(name + ': ' + commandDescriptions[name]);
    }
}
export function agree(msg, args) {
    const reply = [
        'I agree.'
    ];
    
    msg.channel.send(reply);
}