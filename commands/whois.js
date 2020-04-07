const discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, arguments) =>{

	var icon = message.author.avatarURL();
	
	var user =  message.author;

    const exampleEmbed = new discord.MessageEmbed()
	.setColor('#9e5811')
	.setTitle(`Profiel van: ${user.username}`,)
	.setThumbnail(icon)
	.addField('ID:', user.id)
	.addField('Gejoint op:',  moment(user.JoinedAt).format("Do MMM YY"))
	.addField('Account:', moment(user.CreateAt).format("Do MMM YY"))
	.setTimestamp()
    .setFooter('Profiel info!');
    
    message.channel.send(exampleEmbed);

}

module.exports.help = {
    name: "whois"
}