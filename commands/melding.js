const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {
    
    if (!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("Sorry u kan dit niet doen!");
    
    var melding = arguments.join(' ');

    if (!melding) return message.channel.send("**Geef een mededeling mee!**");

    var meldingEmbed = new discord.MessageEmbed()
        .setTitle("**Nieuw mededeling!**")
        .setColor("#a6732b")
        .addField("Melding:", melding)
        .addField('Ingezonden door:', message.author);

    var meldingChannel = message.guild.channels.cache.find(c => c.name == "📫mededelingen");
    if (!meldingChannel) return message.channel.send("Kanaal niet gevonden!");

    meldingChannel.send(meldingEmbed)

    message.channel.send("Mededeling opgegeven!");

}

module.exports.help = {
    name: "mededeling"
}