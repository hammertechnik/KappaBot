module.exports.run = async (client, message, args) => {
    const devs = ["437999876828037158"];
    if (!~devs.indexOf(message.author.id)) {
        return;
    }
    client.destroy()
    client.login("token")
    message.delete()
};