const discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, arguments) => {

    // !tempmute {gebruiker} {tijd}

    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("**Sorry geen permissie!**");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));

    if (!user) return message.channel.send("> **Geef een gebruiker op, of deze gebruiker is niet op deze server!**");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Sorry deze gebruiker kunt u niet tempmuten!**");

    var muteRole = message.guild.roles.cache.get('696688394943856681');

    if (!muteRole) return message.channel.send("**De role mute bestaat niet!**");

    var muteTime = arguments[1];

    if (!muteTime) return message.channel.send("**Geef een tijd mee!**");

    await (user.roles.add(muteRole.id));

    message.channel.send(`${user} is gemute voor ${muteTime}`);

    setTimeout(function() {

        user.roles.remove(muteRole.id)

        return message.channel.send(`${user} is geunmuted`);

    }, ms(muteTime));

}

module.exports.help = {
    name: "tempmute"
}