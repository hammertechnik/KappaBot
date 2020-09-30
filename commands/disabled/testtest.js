module.exports.run = async (client, message, args) => {
    const Discord = require('Discord.js')

    let kappa = client.emojis.find(emoji => emoji.name === 'Kappa')
    let arrow = client.emojis.find(emoji => emoji.name === 'Arrow')
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Kappa Tic Tac Toe', "${arrow} ${arrow} ${arrow} \n${arrow} ${arrow} ${arrow}")

    message.channel.send(embed).then(async msg => {
        await msg.react(kappa);
    })
}