const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) => {

    
    const catogoryId = "696352762543210496";

    var userName = message.author.username;
    var userDiscriminator = message.author.discriminator;

    var bool = false;

    message.guild.channels.forEach((channel) => {

        if(channel.name == userName.toLowerCase() + "-" + userDiscriminator){

            message.channel.send("> **U heeft al een ticket.**");

            bool = true;

        }

    });

    if(bool == true) return;

    var embedCreate = new discord.RichEmbed()
        .setTitle("Hoi, " + message.author.username)
        .setColor("#10c71f")
        .setFooter("Uw ticket is aangemaakt.");

        message.channel.send(embedCreate);

        message.guild.createChannel(userName + "-" + userDiscriminator, "text").then((createdChan) => {

            createdChan.setParent(catogoryId).then((settedParent) => {

                settedParent.overwritePermissions(message.guild.roles.find("name", "@everyone"), {"READ_MESSAGES": false});

                settedParent.overwritePermissions(message.author, {

                    "READ_MESSAGES": true, "SEND_MESSAGES": true,
                    "ÄTTACH_FILES": true, "CONNECT": true,
                    "CREATE_INSTANT_INVITE": false,

                });

                var embedCreateChannel = new discord.RichEmbed()
                .setTitle("Hoi, " + message.author.username.toString())
                .setColor("#10c71f")
                .setDescription("Zet hier uw vraag/klacht.");

                settedParent.send(embedCreateChannel)
            
            }).catch(err => {
                message.channel.send("Er is wat fout gegaan.");
            });

        }).catch(err => {
            message.channel.send("Er is wat fout gegaan.");
        });

}

module.exports.help = {
    name: "tickete"
}