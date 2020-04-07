const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) =>{

        // !kick {naam} {reden}

        var kickUser = message.guild.member(message.mentions.users.first() || message.guild.members(arguments[0]));

        if (!kickUser) return message.channel.send("**Gebuiker niet gevonden!**");

        var reason = arguments.join(" ").slice(22);

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry u kan dit niet doen!");

        if (kickUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Deze gebruiker kunt u niet kicken!");

        var kick = new discord.MessageEmbed()
            .setDescription("Kick")
            .setColor("#d48a0b")
            .addField("Gekickt", kickUser)
            .addField("Opdrachtgever", message.author)
            .addField("Reden", reason);

        var kickChannel = message.guild.channels.cache.find(c => c.name == "📍logs");
        if (!kickChannel) return message.guild.send("Tekstkanaal niet gevonden.");

        message.guild.member(kickUser).kick(reason);

        kickChannel.send(kick);

        return;

}

module.exports.help = {
    name: "kick"
}