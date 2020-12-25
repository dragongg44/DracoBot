const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");
const { MessageEmbed } = require("discord.js")

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send('❌ Vous n\'avez pas la permission d\'utiliser cette commande.')
    const member = message.mentions.members.first()
    if (!member) return message.channel.send('Veuillez mentionner le membre à kick.')
    if (member.id === message.guild.ownerID) return message.channel.send('Vous ne pouvez pas kick le propriétaire du serveur.')
    if (message.member.roles.highest.comparePositionTo(member.roles.highest) < 1 && message.author.id !== message.guild.ownerID) return message.channel.send('Vous ne pouvez pas kick ce membre.')
    if (!member.kickable) return message.channel.send('Le bot ne peut pas kick ce membre.')
    const reason = args.slice(1).join(' ') || 'Aucune raison fournie'
    await member.kick(reason)
    message.channel.send(`${member.user.tag} a été kick !`)

    const embed = new MessageEmbed()
    .setAuthor(`${member.user.tag}`)
    .setColor("#ffa500")
    .setDescription(`**Action** : kick\n**Raison** : ${reason}`)
    .setThumbnail(member.user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());
    client.channels.cache.get('790668269203095572').send(embed);
  },

module.exports.help = {
  name: "kick"
}
