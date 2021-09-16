require("dotenv").config();

const { Client } = require('discord.js');
const client = new Client();
const PREFIX = "%"; //could do cc or smth
//client is subclass of event

client.on('ready', () => {
    console.log(`${client.user.username} has logged in.`);
});

client.on('message', (message) => {
    console.log(`${message.author.tag}: ${message.content}`);


    //could put in function
    if (message.content.startsWith(PREFIX)){
        const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
        
        if (CMD_NAME === 'thing'){
            message.channel.send('whoa dude, look at this *thing*');
        }

    }

    //cache - is a collection, check docs
    //maps are faster than array

    //if (args.length ===0) provide ID

    //play kiwi music command?


    //PUT ALL THIS IN A FUNCTION

    //convert to lower to check more options
    lowerMsg = message.content.toLowerCase();

    //if(message.author.bot) return;
    //stop it from replying to bot messages

    if (lowerMsg === 'hello' || lowerMsg === 'hi'){
        message.reply('HELLOOOOOO :D'); // tags user
        //message.channel.send('hello) doesn't ping
    }
    if (message.content === ':D' || message.content === ':DD'){
        message.reply(':DDD');
    }
    if (lowerMsg === 'what a loser'){
        message.reply('Yeah, what a loser! :b');
    }
    if (lowerMsg === 'happy birthday!' || lowerMsg === 'happy birthday'){
        message.reply('Yeah happy birthday!!!! :D');
    }
    if (lowerMsg === "you know i'm right" || lowerMsg=== 'me right'){
        message.reply("You right!");
    }
    if (lowerMsg === "aren't i so smart"){
        message.reply("you're a genius! :D")
    }
})

client.login(process.env.DISCORDJS_BOT_TOKEN);
