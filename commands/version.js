const Discord = require("discord.js");
const config = require('../package.json');
const change = require('../storage/change.json')

const inline = false

module.exports.run = async (client, message, args, prefix, language, beta) => {

    const pic=client.user.displayAvatarURL;
    const name=client.user.username;
    const hpic="https://cdn.discordapp.com/attachments/546008503299604508/564516393475899402/hammernew.png";

if (!beta) {
    const embed = new Discord.RichEmbed()
    .setAuthor(name, pic)
    .addField("Version:", `${config.version}`, inline)
    .addField("Change Notes:", `
    ${change.changes}
        `, inline)
    .setFooter(`${name} made by Hammer1279`, hpic)
    .setTimestamp()
    .setColor('#00eedd')
    message.channel.send(embed)
    message.delete()
    return
} else {
    const embed = new Discord.RichEmbed()
    .setAuthor(name, pic)
    .addField("Version:", `${config.version} - Beta`, inline)
    .addField("Change Notes:", `
${change.changes}
    `, inline)
    .setFooter(`${name} made by Hammer1279`, hpic)
    .setTimestamp()
    .setColor("#ff0000")
    message.channel.send(embed)
    message.delete()
    return
}
}
