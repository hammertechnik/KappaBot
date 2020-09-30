exports.run = (client, message, args) => {
    const devs = ["437999876828037158"];
    if (!~devs.indexOf(message.author.id)) {
        return;
    }
message.delete()
client.destroy()
};