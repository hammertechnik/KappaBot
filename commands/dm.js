const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

    const pic=client.user.displayAvatarURL;
    const name=client.user.username
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Doesn't look like you can use that.");

    if(!args[0] || args[0] == 0) {
        message.reply("you forgot the Message and the Member!")
        message.delete()
        return
    }

let userID = args[0].replace('<', '').replace('@', '').replace('!', '').replace('>', '');   
if(args.join(' ').replace(args[0], '') == 0) {
    message.reply("where is the message?")
    message.delete()
    return
}

let embed = new Discord.RichEmbed()
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription (args.join(' ').replace(args[0], ''))
.setColor('#00cccc')
.setTimestamp()
.setFooter(`${name} made by Hammer1279`, pic)

// client.users.get(userID).send(args.join(' ').replace(args[0], ''));

client.users.get(userID).send(embed)
message.delete()
console.log(`| ${message.author.tag} | dm  "${args.join(' ')}"`)
}