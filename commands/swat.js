module.exports.run = async (client, message, args) => {
    const devs = ["437999876828037158"];
    if (!~devs.indexOf(message.author.id)) {
        return (message.reply("You are **NOT** allowed to use this command!"))
    }

message.channel.send("👐**UR SWATTED! HANDS UP!**👐\nhttps://tenor.com/view/swat-raids-party-gif-11411207").then(async msg => {
    await msg.react('👐');
    })
    message.delete()
} 