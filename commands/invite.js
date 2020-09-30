exports.run = (client, message, args) => {
    message.author.send("Invite me to your Server:\nhttps://discordapp.com/oauth2/authorize?&client_id=539497240780341248&scope=bot&permissions=8")
    message.delete();
};