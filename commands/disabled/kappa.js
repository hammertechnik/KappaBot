module.exports.run = async (client, message, args) => {
let kappa = client.emojis.find(emoji => emoji.name === 'kappa')
message.channel.send(kappa)
}