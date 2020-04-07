const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) =>{

        return message.channel.send(`Dit is in aanmaak!`)

}

module.exports.help = {
    name: "addrole"
}