exports.run = (client, message, args) => {
    client.channels.get(args[0].slice(2, 21)).send(args.splice(1, 1))
    message.delete();
};
