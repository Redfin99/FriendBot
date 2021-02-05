export function agree(msg, args) {
    const replyList = [
        'I agree.',
        'Agree I do.',
        '100%.',
        'True.',
        'Agreed.'
    ];
    
    const randomInt = Math.floor(Math.random() * replyList.length);
    msg.channel.send(replyList[randomInt]);
}
export function duck(msg, args) {
    const ducktale = 'Someone please help me if you’re familiar with ducks and duck antics. I am away at college and I live in a dorm room on campus. There are a lot of ducks around but there is this one fucking duck that won’t leave me alone. I swear to god this duck is a fucking psychopath. I don’t even understand what it wants from me. Whenever I look out my door room window theres that fucking duck taunting me. I decided I should maybe walk over to it and give it some food to see if we could get along so I tried giving it my leftover arbys but it wouldn’t eat it. Not only would it not eat it but it wouldn’t even fucking break eye contact with me. It was staring at me acting all fucking smug as if it knew something about me that I didn’t even know. Last night I had a nightmare about the duck. He wouldn’t stop following me and kept yelling out the word “drallam”. I woke up with my heart beating out of my chest and I was covered in sweat. I looked out my window and there it was in the same fucking spot staring right at me. I’m afraid to even go to sleep tonight. I need to get this duck out of my fucking head. Please respond if you can help me figure out what this duck wants with me.'

    msg.channel.send(ducktale);
}