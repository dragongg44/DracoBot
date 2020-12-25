const Discord = require("discord.js");
const PREFIX = require('../../config');

const answers = [
    "https://static.hentai-image.com/upload/20160308/36/35881/29.gif",
    "https://i.makeagif.com/media/1-17-2016/rqADFk.gif",
    "https://hentaiporns.net/wp-content/uploads/2017/08/HELTER_01.gif",
    "https://hentaiporns.net/wp-content/uploads/2018/02/6305161-00c4460505f21a29630d063f9440afa0.gif",
    "https://th.bing.com/th/id/OIP.V45YagwvP1rwgDsJ6Ir-uAHaFg?pid=Api&rs=1",
    "https://s.smutty.com/media_smutty_2/b/i/k/e/p/biker4fun-y3aqh-a9831b.gif",
    "https://th.bing.com/th/id/OIP.7utXyC2CmUinzc7QTc9p2wHaFj?pid=Api&rs=1",
    "https://th.bing.com/th/id/OIP.zXX6JnxBLv50OnCD8bFKzQAAAA?pid=Api&rs=1",
    "https://cdnio.luscious.net/Hentai_man/338/lusciousnet_lusciousnet_kanokon-schoolgirl-flashing-her-tits_407043710.gif"
]

module.exports.run = (client, message, args) => {
   

    if (message.channel.nsfw === true) {
 
        const answer = answers[Math.floor(Math.random() * answers.length)];
     
        let embeddog = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("hentai")
        .setImage(answer)
     
        message.channel.send(embeddog);
     
    }else {
        message.channel.send("Ce n'est pas un salon NSFW") 
    } 
   
}


module.exports.help = {
    name: 'hentai',
  };
