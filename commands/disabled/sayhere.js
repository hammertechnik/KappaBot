exports.run = (client, message, args) => {
    if(!args[0] ) return message.channel.send('Dude, u forgot the Message!');
    message.channel.send(args.join(' '))
    message.delete();
};