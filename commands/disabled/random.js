module.exports.run = async (client, message, args) => {
let randValue = Math.floor(Math.random * (10));
if(randValue == 1) message.channel.send("0")
if(randValue == 1) message.channel.send("1")
}