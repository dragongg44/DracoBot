const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (client, message, args) => {
    try {
       const text = args.join(" ");
       if (text === null) return message.channel.send("Vous devez fournir un texte pour l'achivement");
            if (text.length > 25) return message.reply('le texte doit comporter moins de 25 caractères.');
        const superagent = require('superagent')
        const { body } = await superagent
            .get('https://www.minecraftskinstealer.com/achievement/a.php')
            .query({
                i: 1,
                h: 'Nouveau achievement !',
                t: text
            });
        message.channel.send({ files: [{ attachment: body, name: 'achievement.png' }] 
      });
    } catch (err) {
      message.channel.send("Vous devez fournir un texte pour l'achivement");
    }
}

module.exports.help = {
  name: 'achivement'
}