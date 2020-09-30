module.exports.run = async (client, message, args) => {
    const Discord = require('Discord.js')

    let strupi = client.emojis.find(emoji => emoji.name === 'Strupi')
    let embed = new Discord.RichEmbed()
    .setColor('#00eedd')
    .setAuthor("KappaBot", "https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png")
    .setDescription("Some kind of Shit Test? huh?")
    .setTitle("This is your title, it can hold 256 characters")
    .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
    //.setImage('https://cdn.discordapp.com/attachments/547529560175017997/547897378024194068/unknown.png')
    .setThumbnail('https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png')
    .addField("Test:", `Testing is realy boring, but u need to test before release...`)
    .addField("long text?", `Thiis is a text about a total usless thema with extreamly fully of typos but i dont even care about it becouse it is just a test to test a command!`, true)
    .setFooter(`Kappa made by: Hammer1279`, 'https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png')
    .setTimestamp()
    .setTitle("Tests:")

    message.channel.send({embed})

}