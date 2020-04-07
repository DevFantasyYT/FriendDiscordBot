const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) =>{


    try{

        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry u kan dit niet doen!");

        var text = "**__Admin Commands__** \n\n `!kick` - Kick een user. \n `!ban` - Ban een speler. \n `!tempmute` - Mute iemand voor een bepaalde tijd | *!tempmute {gebruiker} {tijd}* \n `!clear` - Verwijder aantal berichten. | **Nooit hoger opgeven dan 100!!** \n `!warn` - Waarschuw een gebruiker. \n `!close` - Sluit een ticket! \n `!mededeling` - Plaats een mededeling. \n `!addrole` - Voeg een role bij iemand toe. \n `!removerole` - Verwijder een role bij iemand.";

        message.author.send(text);

        message.channel.send("**Alle admin commands staan in je pm! 📬**");

    }catch (error){
        message.channel.send("Er is iets fout gegaan.");
    }

}
  

module.exports.help = {
    name: "helpadmin"
}