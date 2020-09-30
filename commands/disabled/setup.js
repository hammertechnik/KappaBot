module.exports.run = async (client, message, args) => {
    const Discord = require('Discord.js')
    let strupi = client.emojis.find(emoji => emoji.name === 'Strupi')
    let embed = new Discord.RichEmbed()
    .setColor('#00eedd')
    //.setImage('https://cdn.discordapp.com/attachments/547529560175017997/547897378024194068/unknown.png')
    .setThumbnail('https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png')
    .addField("Are you the Owner?", `Create the Roles: "Admin", "Mod" and if u you want "Dev"!`)
    .addField("Get the Basic Commands:", `"With !help"`)
    .addField("Set up Channels:", `Make a #warnings channel!`)
    .addField("Let Kappa set up some Roles:", `You will need to mute someone😄`)
    .addField("Any Questions?", `For now you can only contact our Support...\nThe DC or E-Mail... your choice!`)
    .setFooter(`Kappa made by: Hammer1279`, 'https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png')
    .setTimestamp()
    .setTitle("KappaBot")

    message.channel.send({embed}).then(async msg => {
    await msg.react(strupi);
    })
}