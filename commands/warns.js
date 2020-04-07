const discord = require("discord.js");
const fs = require("fs");

const warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, arguments) => {

    //!warn {gebruiker} {reden}

    if (!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("**Sorry geen permissie!**");

    var user = message.guild.member(message.mentions.users.first() || message.guild.members.get(arguments[0]));

    if (!user) return message.channel.send("> **Geef een gebruiker op, of deze gebruiker is niet op deze server!**");

    if (user.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Sorry deze gebruiker kunt u niet warnen!**");

    var reason = arguments.join(" ").slice(22);

    if (!reason) return message.channel.send("**Geef een reden op!**");

    if (!warns[user.id]) warns[user.id] = {
        warns: 0
    };

    warns[user.id].warns++;

    fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err);
    });

    var warnEmbed = new discord.MessageEmbed()
    .setDescription("Warn")
    .setColor("#d48a0b")
    .addField("Warned User", user)
    .addField("Opdrachtgever", message.author)
    .addField("Reden", reason)
    .addField("Aantal warns:", warns[user.id].warns);

var warnChannel = message.guild.channels.cache.find(c => c.name == "📍logs");
if (!warnChannel) return message.guild.send("Tekstkanaal niet gevonden.");

warnChannel.send(warnEmbed); 
message.channel.send(`${message.mentions.users.first()} is gewarnd`)

    if(warns[user.id].warns === 3 ){

        var warnisdrie = new discord.MessageEmbed()
        .setDescription(`PAS OP ${message.mentions.users.first()}`)
        .setColor("#a82b0c")
        .addField("Bericht:", "Nog 1 warn en je word gekickt!!")

        message.channel.send(warnisdrie);
        

    } else if (warns[user.id] == 4){

        message.guild.member(user).kick(reason);
        message.channel.send(`${user} is gekickt!!`);

    } 


}

module.exports.help = {
    name: "warn"
}