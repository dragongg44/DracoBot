const Discord = require ("discord.js");
const {PREFIX} = require("../../config.js");
const figlet = require('figlet');


module.exports.run = (client, message, args) => {
    if(!args[0]) return message.channel.send('Merci de mettre un mot ou une phrase');

    msg = args.join(" ");

    figlet.text(msg, function (err, data){
        if(err){
            console.log('Merci de mettre un mot ou une phrase');
            console.dir(err);
        }
        if(data.length > 2000) return message.channel.send('Merci de mettre moins de 2000 caractére!')

        message.channel.send('```' + data + '```')
    })

}


module.exports.help = {
    name: 'ascii',
};