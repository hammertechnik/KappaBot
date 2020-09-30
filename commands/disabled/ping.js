exports.run = (client, message, args) => {
    if (message.substring(0, 1) == '=') {

            // =ping
            case 'ping':
        bot.sendMessage({
            to: channelID,
            message: 'Pong!'
        })
    }
};