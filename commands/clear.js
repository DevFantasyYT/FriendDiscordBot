const discord = require("discord.js");

module.exports.run = async (bot, message, arguments) =>{

    //!clear 21

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**Je hebt geen toestemming tot dit commando!**");

    if (!arguments[0]) return message.channel.send("**Geef een aantal op!**");

    if(Number.isInteger(parseInt(arguments[0]))) {

        var amount = parseInt(arguments[0]) + 1;

        message.channel.bulkDelete(amount).then(() => {

            if(arguments[0] == 0){

                message.channel.send(`Ik kan geen 0 berichten verwijderen.`).then(msg => msg.delete(3000));

            } else if (arguments[0] == 1){

                message.channel.send(`1 bericht verwijderd.`).then(msg => msg.delete(3000));

            } else{

                message.channel.send(`${arguments[0]} berichten verwijderd.`).then(msg => msg.delete(3000));

            }
        });

    } else {
        return message.channel.send("Geef een getal op");
    }
    
}

module.exports.help = {
    name: "clear"
}