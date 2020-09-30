let kplayers = new Set();
let k2players = new Set();
let players = new Set();
module.exports.run = async (client, message, args) => {
    const Discord = require('Discord.js')

    let kappa = client.emojis.find(emoji => emoji.name === 'Kappa')
    let kappa2 = client.emojis.find(emoji => emoji.name === 'Kappa2')
    let arrow = client.emojis.find(emoji => emoji.name === 'Arrow')
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField('Kappa Tic Tac Toe', `${arrow} ${arrow} ${arrow} \n${arrow} ${arrow} ${arrow} \n${arrow} ${arrow} ${arrow}`)

    message.channel.send({embed}).then(async msg => {
        await msg.react(kappa);
        await msg.react(kappa2)
        setTimeout(() => {
            msg.awaitReactions(reaction => {
                if(reaction.emoji.name === 'Kappa'){
                    if(players.has(message.author.id))return message.channel.send('You have already joined a team');
                    players.add(message.author.id);
                    kplayers.add(message.author.id);
                    message.reply(`joined team ${kappa.toString()}`);

                }

                if(reaction.emoji.name === 'Kappa2'){
                    if(players.has(message.author.id))return message.channel.send('You have already joined a team');
                    players.add(message.author.id);
                    k2players.add(message.author.id);
                    message.reply(`joined team ${kappa2.toString()}`);
                }
            });
        }, 2500);
    })
}