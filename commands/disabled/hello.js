module.exports.run = async (client, message, args) => {
    //message.channel.send("Hello World!")
    //message.delete()
        
const Discord = require('Discord.js')
let embed = new Discord.RichEmbed()
.setColor('#00eedd')
.setAuthor("KappaBot", "https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png")
.setDescription("Hello, thanks for Inviting me to your Server!")
.setTitle("Hello!")
//.setImage('https://cdn.discordapp.com/attachments/547529560175017997/547897378024194068/unknown.png')
.setThumbnail('https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png')
.addField("Welcome:", `To Beginn just type in **!help** for any Help!` , false)
.addField("You are a BotTester?", `Do !setup`)
.addField("General Infos:", `Kappa is a Chat-and Moderatorbot with currently 40 Commands! To get access to the Moderator commands, make a Role Calld "Mod", "Admin" or "Dev".`)
.setFooter(`Kappa made by: Hammer1279`)
.setTimestamp()

message.channel.send({embed})
message.delete();
}
