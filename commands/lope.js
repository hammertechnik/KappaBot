// @ts-check

module.exports.run = async (client, message, args, prefix, language, beta) => {

    const devs = ["437999876828037158"];
    if (!~devs.indexOf(message.author.id)) {
        return;
    }

    let number;
    number = args[0]
    message.reply(`countdown from: ${args[0]} with speed: ${args[1]}s`)

    let loop = setInterval ( function() {
        number = number-1
        message.channel.send(number)
        if(number==0){
            clearInterval(loop);
            message.reply("done!")
        }
    }, args[1]*1000)

}