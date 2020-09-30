exports.run = (client, message, args) => {
    message.reply("i know that you are hyped... but Hab has no time no. And Hammer not either. Sry")
    client.channels.get('539510278434586635').send('Someone is rly hyped!');
    message.delete();
};