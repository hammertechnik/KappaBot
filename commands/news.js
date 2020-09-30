module.exports.run = async (bot, message, args) => {
    const Discord = require('Discord.js')
    const devs = ["437999876828037158", "392502749876584448"];
    if(!~devs.indexOf(message.author.id)) {
        message.delete();
        return;
    }
const hook = new Discord.WebhookClient("563841111437738026", "FbWLr9D9O4GOAwSzx_E6eiYwuXpU0i0Fvt9tfQ9Nr51Zgb7MPdJ5YyoDFZKyhFbFOA3I");
hook.send(args.join(' '));
message.delete();
}