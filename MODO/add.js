const Discord = require ("discord.js");
const { Message } = require('discord.js')
const {PREFIX} = require("../../config.js");


module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('Tu ne possèdes pas les permissions. 🎄')
    const target = message.mentions.members.first() //member = mentions
    if(!target) return message.channel.send('Il faut que tu spécifies un membre ! 🎄')
    const role = message.mentions.roles.first() // roles = mentions
    if(!role) return message.channel.send('Il faut que tu spécifies un rôle ! 🎄')
    await target.roles.add(role)
    message.channel.send(`${target.user.username} a obtenu ce rôle ! 🎄 `)
}

module.exports.help = {
  name: "add"
}
