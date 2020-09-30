const fs = require("fs");

module.exports.run = async (client, message, args, prefix, language, beta) => {
    if(!beta)return
message.channel.send("<:sophie:560967165662986262>\n<:Kappa:547189334692855808>")
let lan = JSON.parse(fs.readFileSync("./storage/languages.json", "utf8",));
if(lan[message.guild.id]) message.reply("true")
if(!lan[message.guild.id]) message.reply("false")
}