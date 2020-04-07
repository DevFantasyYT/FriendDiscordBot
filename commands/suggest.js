const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    var idee = arguments.join(' ');
    if (!idee) return message.channel.send("**Geen idee meegegeven, geef een idee mee!**");

    var ideeEmbed = new discord.MessageEmbed()
        .setTitle("**Nieuw Idee!**")
        .setColor("#35fc03")
        .addField("Idee:", idee)
        .addField("Ingezonden door:", message.author);

    var ideeChannel = message.guild.channels.cache.find(c => c.name == "📋suggesties");
    if (!ideeChannel) return message.channel.send("Kanaal niet gevonden!");

    ideeChannel.send(ideeEmbed).then(embedMessage => {
        embedMessage.react('👍');
        embedMessage.react('👎');

        

    });

    message.channel.send("Idee opgegeven!");

}

module.exports.help = {
    name: "suggest"
}