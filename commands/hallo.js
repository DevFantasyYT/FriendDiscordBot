const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) =>{

        return message.channel.send(`Hallo ${message.author.username}`)

}

module.exports.help = {
    name: "hallo"
}