const Discord = require("discord.js");
const fs = require("fs");

const langfile= require ("../storage/translation/language.json")

let lan;

module.exports.run = async (client, message, args, prefix, language, beta) => {

    if(language == "eng") {
        lan=langfile.english.set.welcome
    }
    if(language == "ger") {
        lan=langfile.german.set.welcome
    }
    if(language == "fr") {
        lan=langfile.french.set.welcome
    }

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(lan.e1);

if(!args || args < 1) return message.channel.send(lan.e2); message.delete();

let channelId = args[0].replace('<', '').replace('#', '').replace('>', '');

if(!message.guild.channels.has(channelId)){message.reply(lan.e3) 
message.delete()
return}

let channels = JSON.parse(fs.readFileSync("./storage/channels.json", "utf8",));
let syschannel = message.guild.systemChannel.id

let suggestchannel;
if (channels[message.guild.id]) {
if (channels[message.guild.id].suggestchannel) {
  suggestchannel = channels[message.guild.id].suggestchannel
} else {
  suggestchannel = syschannel
}} else {
  suggestchannel = syschannel
}

channels[message.guild.id] = {
    suggestchannel: suggestchannel,
    welcomechannel: channelId
};

fs.writeFile("./storage/channels.json", JSON.stringify(channels, null, '\t'), (err) => {
  if(err) console.log(err)
});

const embed = new Discord.RichEmbed()
.setColor("#FF9900")
.setTitle(lan.m1)
.setDescription(`${lan.m2} <#${channelId}>`);

await message.channel.send(embed).then(msg=>{msg.delete(30000)})

}