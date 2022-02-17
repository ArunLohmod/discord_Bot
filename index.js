
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"] });

client.on('ready', () => {
  console.log(`${client.user.tag} bot is ready...`);
});

client.on("messageCreate", msg=>{
    if (msg.content.toLowerCase() === "hi"){
        msg.reply("welcome!")
    }
    else if(msg.content.toLowerCase() === "i love this bot"){
        msg.reply("😍")
    }
})

client.on("messageDelete", function(message){
    // console.log(`message is deleted -> ${message}`);
    message.channel.send("do not delete messages!")
});

client.on("guildMemberAdd", member =>{
    console.log(member)
})

client.login("write your token here");