const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");


module.exports.run = (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("❌ Vous n’avez pas cette permission ");
    const channels = message.guild.channels.cache.filter(ch => ch.type !== 'category');
        if (args[0] === 'on') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: false
                })
                })
            return message.channel.send('verrouillé tous les salon');
        } else if (args[0] === 'off') {
            channels.forEach(channel => {
                channel.updateOverwrite(message.guild.roles.everyone, {
                    SEND_MESSAGES: true
                })
            })
            return message.channel.send('déverrouillé tous les salon')
        }
    }

module.exports.help = {
    name: 'lock',
};