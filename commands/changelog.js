const Discord = require("discord.js");

var locked=true
var debug=false

const devs = ["437999876828037158"];
//                  Hammer1279

const langfile= require ("../storage/translation/language.json")

let lan;

module.exports.run = async (client, message, args, prefix, language, beta) => {
    
    if(language == "eng") {
        lan=langfile.english.changelog
    }
    if(language == "ger") {
        lan=langfile.german.changelog
    }
    if(language == "fr") {
        lan=langfile.french.changelog
    }

if (locked) {
    if (!~devs.indexOf(message.author.id)) {
        message.reply("this command isn't aviable for you yet!")
        message.delete()
        return;
    }    
}

    const pic=client.user.displayAvatarURL;
    const hpic="https://cdn.discordapp.com/attachments/546008503299604508/564516393475899402/hammernew.png"
    const name=client.user.username

message.channel.send("**Kappa 3.1.0**\n\nChangelog:\n-Compleate overhaul of ``help``\n-added more translation\n-added version command")

}