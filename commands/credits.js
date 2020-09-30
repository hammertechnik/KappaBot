const Discord = require("discord.js");

const langfile= require ("../storage/translation/language.json")

let lan;

module.exports.run = async (client, message, args, prefix, language) => {

    if(language == "eng") {
        lan=langfile.english.credits
    }
    if(language == "ger") {
        lan=langfile.german.credits
    }
    if(language == "fr") {
        lan=langfile.french.credits
    }

    //if (message.guild.id == 546008502754082830) {}
    //else {
    //message.delete()
    //return;
    //}
    //let strupi = client.emojis.find(emoji => emoji.name === 'Strupi')

    const pic=client.user.displayAvatarURL;
    const hpic="https://cdn.discordapp.com/attachments/546008503299604508/564516393475899402/hammernew.png"
    const ht = "https://cdn.discordapp.com/attachments/553609449898639360/566005853795123201/HammerTechnik.png"
    const name=client.user.username

    let embed = new Discord.RichEmbed()
.setAuthor("KappaBot", pic)
.setThumbnail(ht)
.setColor('#00eedd')
.setTitle(lan.name)
.setDescription("HammerTechnik-Development")
//.addField("Creators", `Hammer1279\nHab\nLordBidoof\nWoofFighter`)
//.addBlankField()
.addField(lan.mp, lan.mp2)
// .addField(lan.sp, lan.sp2)
.addField(lan.jr, lan.jr2)
.addField(lan.d, lan.d2)
.addField(lan.t, lan.t2)
.setFooter(`${name} ${lan.creator}`, hpic)
.setTimestamp()

    message.channel.send({embed});
    message.delete()
}