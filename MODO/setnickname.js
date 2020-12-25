const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");

module.exports.run = (client, message, args) => {

if (!message.member.hasPermission(["MANAGE_GUILD", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {color: "RED", description: "Vous ne pouvez pas utiliser cette commande!"}})
  }
  
  let user = message.mentions.users.first(); // You can mention someone, not only just user.
  if (!user) return message.channel.send({embed: {color: "RED", description: "Vous devez mentionner l’utilisateur!"}});
  
  let nick = args.slice(1).join(" ");
  if (!nick) return message.channel.send({embed: {color: "RED", description: "Vous devez entrer le surnom!"}});
  
  let member = message.guild.members.cache.get(user.id);
  
    member.setNickname(nick).catch(err => message.channel.send({embed: {color: "RED", description: `Error: ${err}`}}));
  return message.channel.send({embed: {color: "GREEN", description: `Changement réussi **${user.tag}** surnom à **${nick}**`}});
}


module.exports.help = {
    name: 'setnickname',
};