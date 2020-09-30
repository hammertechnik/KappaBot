module.exports.run = async (client, message, args) => {
    const devs = ["437999876828037158"];
    if (!~devs.indexOf(message.author.id)) {
        return;
    }
    client.destroy()
    client.login("NTM5ODU3MjU3OTQxMTcyMjQ0.DzIc7g.S7l17rXGqMaFbJaVKBCmAfj4mtw")
    message.delete()
};