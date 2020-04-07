const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var banUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

    if (!banUser) return message.channel.send("**Gebuiker niet gevonden!**");

    var reason = arguments.join(" ").slice(22);

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry u kan dit niet doen!");

    if (banUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kunt u niet bannen!");

    var ban = new discord.RichEmbed()
        .setDescription("Ban")
        .setColor("#d48a0b")
        .addField("Geband", banUser)
        .addField("Opdrachtgever", message.author)
        .addField("Reden", reason);

    var banChannel = message.guild.channels.cache.find(c => c.name == "📍logs");
    if (!banChannel) return message.guild.send("Tekstkanaal niet gevonden.");

    message.guild.member(banUser).ban(reason);

    banChannel.send(ban);

    return;

}

module.exports.help = {
    name: "ban"
}