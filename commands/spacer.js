module.exports.run = async (client, message, args) => {

    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Doesn't look like you can use that.");

message.channel.send("__-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------__")
message.delete()
}