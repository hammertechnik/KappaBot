module.exports.run = async (client, message, args) => {
    const Discord = require('Discord.js')

    let strupi = client.emojis.find(emoji => emoji.name === 'Strupi')
    let embed = new Discord.RichEmbed()
    .setColor('#00eedd')
    //.setImage('https://cdn.discordapp.com/attachments/547529560175017997/547897378024194068/unknown.png')
    .setThumbnail('https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png')
    .addField("New to KappaBot?", `!setup - get a guide how to start with KappaBot\n!hello - get a nice welcome (for new KappaBot Users)`)
    .addField("Help:", `
    !ping/pong - get Ping/Pong
    !bug - report a bug
    !suggest - send a suggestion to the Devs
    `)
    //.addField("Need all commands now?", `contact me per DM to get a list of all commands: Hammer1279 [DEV]#2365`)
    .addField("Fun:", `!say - let the Bot speak`)
    .addField("Moderator:", `!purge - clears a chat\n!tempmute - tempmutes a User\n!kick - kicks a User\n!ban - bans a User`)
    .addField("Infos:", `!stats - get Bot Infos\n!credits - Creator Credits\n`)
    //.addField("󠀀󠀀Links:", `[Picture of Kappa](https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png)`)
    .setFooter(`Kappa made by: Hammer1279`, 'https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png')
    .setTimestamp()
    .setTitle("KappaBot:")
    .setDescription("This command is currently being redone!")

    //message.reply("Check your DM's!")
    message.channel.send({embed}).then(async msg => {
    //message.author.send({embed}).then(async msg => {
    await msg.react(strupi);
    })
}