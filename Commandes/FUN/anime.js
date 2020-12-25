const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");
const fetch = require("node-fetch")
const Kitsu = require('kitsu.js');
const kitsu = new Kitsu();

module.exports.run = async (bot, message, args) => {
    if (!args[0]) {
        return message.channel.send("S’il vous plaît Donner ous le nom de l’anime");
         
       }
       //main part
           var search = message.content.split(/\s+/g).slice(1).join(" ");
           kitsu.searchAnime(search).then(async result => {
               if (result.length === 0) {
                   return message.channel.send(`Aucun résultat trouvé pour **${search}**!`);
               }
             
             var anime = result[0]
   
               let embed = new Discord.MessageEmbed()
                   .setColor('#1f9db9')
                   .setAuthor(`${anime.titles.english ? anime.titles.english : search} | ${anime.showType}`, anime.posterImage.original)
                   .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
                   .addField('❯\u2000\Information', `•\u2000\**Nom :** ${anime.titles.romaji}**\n\•\u2000\**NSFW:** ${anime.nsfw ? 'Yes' : 'No'}`, true)
                   .addField('❯\u2000\Stats', `•\u2000\**Note moyenne:** ${anime.averageRating}\n\•\u2000\**Classement de notation:** ${anime.ratingRank}\n\•\u2000\**Classement de popularité:** ${anime.popularityRank}`, true)
               
                   .setThumbnail(anime.posterImage.original, 100, 200);
             
   
               return message.channel.send({ embed })
           }).catch(err => {
               console.log(err) //cathing error
               return message.channel.send(`Aucun résultat trouvé pour **${search}**!`);
           });
       }
   
   

module.exports.help = {
  name: "anime"
}
