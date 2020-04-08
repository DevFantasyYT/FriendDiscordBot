const { RichEmbed } = require("discord.js");

const chooseArr = ["🗻", "📰", "✂"];

module.exports = {
    name: "rps",
    category: "fun",
    description: "Steen Papier Schaar spel. Reageer op een van de emoji's om het spel te spelen.",
    usage: "rps",
    run: async (client, message, argsuments) => {
        const embed = new RichEmbed()
            .setColor("#ffffff")
            .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
            .setDescription("Voeg een reactie toe aan een van deze emoji's om het spel te spelen!")
            .setTimestamp();

        const m = await message.channel.send(embed);
        // Wait for a reaction to be added
        const reacted = await promptMessage(m, message.author, 30, chooseArr);

        // Get a random emoji from the array
        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        // Check if it's a win/tie/loss
        const result = await getResult(reacted, botChoice);
        // Clear the reactions
        await m.clearReactions();

        embed
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);

        m.edit(embed);

        function getResult(me, clientChosen) {
            if ((me === "🗻" && clientChosen === "✂") ||
                (me === "📰" && clientChosen === "🗻") ||
                (me === "✂" && clientChosen === "📰")) {
                    return "Je hebt gewonnen!";
            } else if (me === clientChosen) {
                return "Gelijkspel!";
            } else {
                return "Je hebt verloren!";
            }
        }
    }
}