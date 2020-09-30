const Discord = require("discord.js");

const whitelisted="437999876828037158"
const devs = ["437999876828037158", "317279640354029569", "400743315856687114", "392502749876584448", "188762891137056769"];
//                  Hammer1279          TheFireDragon            Sean0142           Lord Bidoof                Hab
const note = "565590674506907648";
const devserver = "546008502754082830";

module.exports.run = async (client, message, args, prefix) => {

if (!~devs.indexOf(message.author.id)) {
    message.delete()
    return;
}

if (message.guild.id !== devserver) {
    if (message.author.id!==whitelisted) {
        message.delete()
        message.reply("cant use that here!")
        return
    }
}

const slicer = args.join(" ").indexOf("|")
var title = args.join(" ").slice(0, slicer)
const text = args.join(" ").replace(`${title}| `, "")

if (!args || args < 1)return message.reply('You need to add the note you want to save!'), message.delete();
if (slicer == -1)return message.reply(`your syntax is wrong! Use it like this: \`\`${prefix}note title | description\`\``)

const pic=client.user.displayAvatarURL;
const authorpic=message.author.avatarURL
const author=message.author.tag

let embed = new Discord.RichEmbed()
//.setTitle("Bug:")
.setDescription(`Note by: ${author}`)
.setColor('#00eedd')
.setThumbnail(authorpic)
.addField(title, text)
//.setFooter(`Server: ${message.guild.name}`, message.guild.iconURL)
.setTimestamp()

client.channels.get(note).send({embed})
message.delete()
}