module.exports.run = async (client, msg, args) => {
    const devs = ["437999876828037158"];
    if (!~devs.indexOf(msg.author.id)) {
        return (msg.reply("You are not allowed to use this command!"))
    }
const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == msg.guild.id);
voiceConnection.disconnect();
msg.delete()
}