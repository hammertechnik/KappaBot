module.exports.run = async (client, message, args) => {

    const devs = ["437999876828037158", "392502749876584448"];
    //392502749876584448=Lord Bidoof
    if  (!~devs.indexOf(message.author.id)) {return (message.reply("No, you cant use this command!"))}

        console.log(`| ${message.author.tag} | Connect to  "${args.join(' ')}"`)
    if(!args || args < 1) return (message.channel.send('Dude, you forgot the Token!'), console.log(`| ${message.author.tag} | Connect to  "ERR"`)
);
    message.channel.send("Disconnecting from Client...")
    client.destroy()
    client.login(args.join(' '))
    message.channel.send("Connecting to Client...")
    message.delete()
};