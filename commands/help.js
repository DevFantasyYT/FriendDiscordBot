const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) =>{


    try{

        var text = "**__Commands__** \n\n `!whois` - Laat je profiel zien. \n `!serverinfo` - Laat de info van de server zien. \n `!botinfo` - Laat info van de bot zien. \n `!ticket` - Maak een ticket aan. \n\n **__Muziek commands__** \n\n `;;play` Doe dit commando met een link/naam van een nummer erachter en het nummer word afgespeelt. \n `;;skip` Skip een nummer. \n `;;join` Laat de bot joinen. \n `;;leave` Laat de bot leaven. \n `;;queue` Laat de queue zien. ";
        
        message.author.send(text);

        message.channel.send("**Al de commands staan in je pm! 📬**");

    }catch (error){
        message.channel.send("Er is iets fout gegaan.");
    }

}
  

module.exports.help = {
    name: "help"
}