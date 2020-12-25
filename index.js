//----------------Discord.js----------------
const {Collection, Client} = require("discord.js"),
        client = new Client();
        const Discord = require('discord.js');

const fs = require('fs');
const {TOKEN, PREFIX } = require("./config");
const moment = require("moment");
const ms = require("ms");
const axios = require('axios');

client.commands = new Collection();

client.login(TOKEN);

//----------------Handler.js----------------

// Recherche de toutes les commandes
fs.readdir("./Commandes/", (err, content) => {
    if(err) console.log(err);
    if(content.length < 1) return console.log('Veuillez créer des dossiers dans le dossier commandes !');
    var groups = [];
    content.forEach(element => {
        if(!element.includes('.')) groups.push(element); // Si c'est un dossier
    });
    groups.forEach(folder => {
        fs.readdir("./Commandes/"+folder, (e, files) => {
            let js_files = files.filter(f => f.split(".").pop() === "js");
            if(js_files.length < 1) return console.log('Veuillez créer des fichiers dans le dossier "'+folder+'" !');
            if(e) console.log(e);
            js_files.forEach(element => {
                let props = require('./Commandes/'+folder+'/'+element);              client.commands.set(element.split('.')[0], props);
            });
        });
    });
  });

// EVENTS
fs.readdir('./Events/', (error, f) => {
  if (error) {
      return console.error(error);
  }
  console.log(`[INFO] ${f.length} fichiers dans le dossier events chargé avec succès ! `);

  f.forEach((f) => {
      let events = require(`./Events/${f}`);
      let event = f.split('.')[0];

  });
});


//---------------Connection------------
client.on("ready", async () =>{ 
    console.log("Le bot est Allumé!")
    client.user.setStatus("online");
    setInterval(() => {
        client.user.setActivity(`${PREFIX}vote`, {type: "PLAYING"});
        setTimeout(function() {
        }, 30000)
          client.user.setActivity(`${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} utilisateur`, {type: "PLAYING"});
        }, 10000)
        setTimeout(function() {
          client.user.setActivity(`${PREFIX}invite`, {type: "PLAYING"});
        }, 10000)
        setTimeout(function() {
          client.user.setActivity(`${client.guilds.cache.size.toString()} serveur`, {type: "PLAYING"});
        }, 10000)
        setTimeout(function() {
          client.user.setActivity(`${PREFIX}help`, {type: "PLAYING"});
        }, 10000)
      }, 30000)

client.on('message', async message => {
  let config = require("./config.js")
if (message.channel.type === "dm") return;
if (message.author.bot) return;
})


//----------MEMTION----------

client.on('message', async message => {
  let config = require("./config.js")
if (message.channel.type === "dm") return;
if (message.author.bot) return;
       

const mentionemb = new Discord.MessageEmbed()
.setTitle("Tu ma mentionner ??")
.setDescription(`👋 **Salut, je suis** <@784720144482959360>\n\n <:__:787338236397486122> Si tu veux de l'aide fait la commande : \`${PREFIX}help\`\n\n  <:__:787338236397486122> Tu peux aussi m'inviter en fessant  cette commande : \`${PREFIX}invite\`\n\n  <:__:787338236397486122> Tu peux aussi rejoindre le serveur support du bot en fessant  cette commande : \`${PREFIX}support\`
`)
.setColor(`#2f3136`)
if(message.mentions.users.has(client.user.id)) {message.channel.send(mentionemb);};

})


//----------AJOUT-RETRAIT----------

client.on("guildCreate", async guild => {
  
  let canal = client.channels.cache.get("790639866731823124")
  
       const embed = new Discord.MessageEmbed()
      .setThumbnail(guild.iconURL)
      .setTitle("✅ DracoBot a rejoint un serveur")
      .setDescription(`Merci à ** ${guild.owner.user.tag} ** de m'avoir ajouté dans son serveur.
       Je suis maintenant dans ** ${client.guilds.cache.size}  serveurs**.\n
       **<:IconsStats:784495902631002133> Info du serveur**
       • :pencil: **Nom du serveur:**  ${guild.name} 
       • 👥 **Membres:** ${guild.memberCount}
       • <:IconsCrown:784495902639390740> **Propriétaire:**  ${guild.owner.user.tag} `)
      .setTimestamp()
      .setColor("#d3a46c")
  
      canal.send({ embed });
  });

  client.on("guildDelete", async guild => {
  
    let canal = client.channels.cache.get("790639866731823124")
    
         const embed = new Discord.MessageEmbed()
        .setThumbnail(guild.iconURL)
        .setTitle("❌ DracoBot a quitée un serveur 😪")
        .setDescription(`Dommage ** ${guild.owner.user.tag} ** viens de me kick de son serveur.
         Maintenant je suis plus que dans ** ${client.guilds.cache.size} serveurs**.\n
         **Info du serveur**
       • :pencil: **Nom du serveur:**  ${guild.name} 
       • 👥 **Membres:** ${guild.memberCount}
       • :crown: **Propriétaire:**  ${guild.owner.user.tag} `)
      .setTimestamp()
        .setColor("#d3a46c")
    
        canal.send({ embed });
    });

    client.on('message', message => {

      let args = message.content.substring().split(" ");
    
      switch (args[0]) {
        case 'salut':
          case 'Salut':
            case 'bonjour':
              case 'Bonjour':
        message.channel.send("").then(message.react('👋'))
        break;
      }
    })
    
    client.on('guildMemberAdd', (member) => {
    
      let bvnembed = new Discord.MessageEmbed()
      .setTitle(" Bienvenue !")
      .setDescription("<:arrived:784495900059500585> Bienvenue " + `**${member}**` + " merci d'avoir rejoint le serveur ")
      .setColor('#35f092')
      .setImage("https://cdn.discordapp.com/attachments/791001661127786496/791813444440948746/bienvenue.png")
      .setFooter("Un utilisateur a rejoint")
      .setTimestamp()
      client.channels.cache.get("790306152607907846").send(bvnembed)
    
    })
    
    client.on('guildMemberRemove', (member) => {
    
      let bvnembed = new Discord.MessageEmbed()
      .setTitle(" Au revoir !")
      .setDescription("<:leave:784495902260985888> " + `**${member}**` + "  a quitter le serveur ")
      .setColor('#b61515')
      .setImage("https://cdn.discordapp.com/attachments/791001661127786496/791816657269162004/Sans_titre_2.png")
      .setFooter("Un utilisateur a quitté")
      .setTimestamp()
      client.channels.cache.get("790306152607907846").send(bvnembed)
    
    })


    setInterval(() => {
     //client.channels.cache.get("k").setName(`${client.guilds.cache.size} serveur`)
      //client.channels.cache.get("k").setName(`Uptime du bot ${ms(client.uptime, { long: true })}`)
  }, 3e4)


