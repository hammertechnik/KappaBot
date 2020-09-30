module.exports.run = async (client, message, args) => {
    message.channel.send('...')

    console.log(`${message.author.tag} (${message.author.id}) ...`)
}