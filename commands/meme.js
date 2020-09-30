const Discord = require("discord.js");

const pic="https://tenor.com/view/battlefieldfriends-promoted-neebs-gif-9659776"

module.exports.run = async (client, message, args, prefix, language, beta) => {

    let ran = Math.floor(Math.random() * (99 + 1));

    var superagent = require("superagent")
    let {body} = await superagent.get("https://api.imgflip.com/get_memes").catch(e => {message.reply(`${e}`)})

    let embed = new Discord.RichEmbed()
    .setTitle(body.data.memes[ran].name)
    .setImage(body.data.memes[ran].url)
    .setColor("RANDOM")
    //.setColor("#ff4500")

message.channel.send(embed)
message.delete()
}