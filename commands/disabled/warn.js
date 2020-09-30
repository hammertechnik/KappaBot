const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

const pic=client.user.displayAvatarURL;
const hpic="https://cdn.discordapp.com/attachments/546008503299604508/564516393475899402/hammernew.png"
const name=client.user.username

    const mention = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))

    let embed = new Discord.RichEmbed()
    .setTitle("Warnung:")
    .setAuthor(mention.user.tag, mention.user.displayAvatarURL)
    .setThumbnail(pic)
    .setDescription(`Gemeldet von: ${message.author.tag}`)
    .setColor('#00eedd')
    .addField("Grund:", `
${args.join(" ")}
    `)
    .setFooter(`${name} erstellt von Hammer1279`, hpic)
    .setTimestamp()

message.channel.send(embed)
message.delete()

}