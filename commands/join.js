module.exports.run = async (bot, msg, args) => {
    const devs = ["437999876828037158"];
    if (!~devs.indexOf(msg.author.id)) {
        return (msg.reply("You are not allowed to use this command!"))
    }
msg.member.voiceChannel.join()
msg.delete()
}