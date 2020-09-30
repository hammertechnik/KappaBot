exports.run = (client, message, args) => {
    if (!args || args < 1)return message.reply('You need to add the Bug you want to report!'), message.delete();
    message.reply("your Bug has been Reported to the Devs, for further questions cantact them here: **hammertechnik@gmail.com**")
    client.channels.get("548653209531711528").send(`${message.author.tag} did find the Error: ${args.join(" ")}`)
    console.error (`${message.author.tag} | ${args.join(" ")}`)
    message.delete();
};