module.exports.run = async (client, message, args, prefix, language) => {

const langfile= require ("../storage/translation/language.json")
let lan;
    if(language == "eng") {
        lan=langfile.english.stats
    }
    if(language == "ger") {
        lan=langfile.german.stats
    }
    if(language == "fr") {
        lan=langfile.french.stats
    }
const Discord = require('discord.js')

const name=client.user.username
const pic=client.user.displayAvatarURL;

let totalSeconds = (client.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;

let uptime = `${hours} ${lan.h}, ${minutes} ${lan.min} ${Math.floor(seconds)} ${lan.sec}`;

let embed = new Discord.RichEmbed()
.setColor('#00eedd')
.setURL("https://www.hammertechnik.ga/")
.setAuthor("KappaBot:")
.setThumbnail("https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png")
.setTimestamp()
.setFooter(`${name} ${lan.creator}`, pic)
.addField("Stats:", `👨${lan.Us} ${client.users.size}  
\n🔗${lan.S} ${client.guilds.size}  
\n#⃣${lan.C} ${client.channels.size}  
\n🛰${lan.P} ${Math.round(client.ping)}ms 
\n🖥${lan.L} Discord.js
\n🔋${lan.U} ${uptime}`
//\n"Links:"`, true)
)

message.channel.send({embed});
message.delete()
}