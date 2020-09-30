// @ts-check

const Discord = require("discord.js");
const dl = require('discord-leveling')
const exectMath = require('exact-math')
const fs = require("fs");
// let rank = require("../storage/ranks.json");

const inline = true

module.exports.run = async (client, message, args, prefix, language, beta) => {

let member;
let membername;
let memberpic;

let rankcard = JSON.parse(fs.readFileSync('./storage/rankcard.json', "utf8",));
let color;
const defcolor = "#00eedd"

if(!args[0]) {
member = (message.author.id + message.guild.id)
membername = message.author.tag
memberpic = message.author.avatarURL
if(!rankcard[message.author.id]) {
  color= defcolor
} else {
    color = rankcard[message.author.id].color
}
} else {
const tag = args.shift().slice(0, 1)
if(tag !== "<")return message.reply("invalid tag provided!").then(msg=>{msg.delete(5000)}).then(message.delete())

if(!rankcard[message.guild.member(message.mentions.users.first()).user.id]) {
  color= defcolor
} else {
    color = rankcard[message.guild.member(message.mentions.users.first()).user.id].color
}

member = message.guild.member(message.mentions.users.first()).user.id+message.guild.id// || message.guild.members.get(args[0]))
membername = message.guild.member(message.mentions.users.first()).user.tag
memberpic = message.guild.member(message.mentions.users.first()).user.avatarURL
}



    // const devs = ["437999876828037158"];
    // if (!~devs.indexOf(message.author.id)) {
    //     return;
    // }

//  if(!rank[message.author.id]){
//    rank[message.author.id] = {
//      rank: 0
//    };
//  }
    // if(!rank[message.author.id] || rank[message.author.id]==0){
    //     message.reply("your not ranked yet!")
    //     return
    // }

// let uRank = rank[message.author.id].rank;

var user = await dl.Fetch(member)
var xp = (user.xp)
var lvl = (user.level)
//var lvl = 5
var nlvl = exectMath.floor(5 * (lvl * lvl) + 50 * lvl + 100)
//var nlvl = exectMath.floor(5 * lvl^2 + 40 * lvl + 55)

  let rankEmbed = new Discord.RichEmbed()
  .setAuthor(membername)
  .setColor(color)
  .setTitle("Rank:")
  .setThumbnail(memberpic)
  .addField("XP:", `${xp}/${nlvl}`, inline)
  .addField("Level:", lvl, inline)
  .setFooter(`${client.user.username} by Hammer1279`, client.user.displayAvatarURL)
  .setTimestamp()

  message.channel.send(rankEmbed)//.then(msg => {msg.delete(8000)});
  message.delete()

}