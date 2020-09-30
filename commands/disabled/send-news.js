const fs = require("fs");

const channels = [/<channels.id's>/]

module.exports.run = async (client, message, args, prefix, language, beta) => {

const devs = ["437999876828037158"];
if (!~devs.indexOf(message.author.id)) {
    return;
}

channels.forEach(async (value, index, array) => {
    const channel = client.channels.get(channels[index])
    channel.send(args.join(" "))
})

}