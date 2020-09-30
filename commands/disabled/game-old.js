module.exports.run = async (client, message, args) => {
    const Discord = require('Discord.js')

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField('Kappa Tic Tac Toe', 'GAMELAYOUT HERE')

    message.channel.send(embed).then(async msg => {
        await msg.react(kappa)
        await msg.react(kappa2)
    })
}