const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, arguments) =>{

    var botIcon = bot.user.displayAvatarURL();

    var bot = bot.user

    var botEmbed = new discord.MessageEmbed()
        .setDescription("Discord bot info.")
        .setColor("#9e5811")
        .setThumbnail(botIcon)
        .addField("Bot naam:", bot.username)
        .addField("Gemaakt op:", bot.createdAt);

    return message.channel.send(botEmbed);

}

module.exports.help = {
    name: "botinfo"
}