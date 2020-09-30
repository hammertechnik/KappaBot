const Discord = require("discord.js");

var debug=false

const langfile= require ("../storage/translation/language.json")

let lan;

module.exports.run = async (client, message, args, prefix, language, beta) => {

if(language == "eng") {
    lan=langfile.english.bug
}
if(language == "ger") {
    lan=langfile.german.bug
}
if(language == "fr") {
    lan=langfile.french.bug
}

    const slicer = args.join(" ").indexOf("|")
    var title = args.join(" ").slice(0, slicer)
    const text = args.join(" ").replace(`${title}| `, "")

    if (!args || args < 1)return message.reply(lan.e1), message.delete();
    if (slicer == -1)return message.reply(`${lan.e2} \`\`${prefix}bug title | description\`\``)

    const pic=client.user.displayAvatarURL;
    const authorpic=message.author.avatarURL
    const author=message.author.tag

let embed = new Discord.RichEmbed()
.setTitle("Bug:")
.setDescription(`${lan.rb} ${author}`)
.setColor('#00eedd')
.setThumbnail(authorpic)
.addField(title, text)
.setFooter(`${lan.server} ${message.guild.name}`, message.guild.iconURL)
.setTimestamp()

console.error (`${message.author.tag} | ${title}: ${text}`)
if (debug) {
message.channel.send({embed})
} else {
client.channels.get("548653209531711528").send({embed})
}
message.delete()
if (debug) {

    } else {
        message.reply(lan.send)
    }
}