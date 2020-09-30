exports.run = (client, message, args) => {
    message.channel.send(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
    message.delete();
};