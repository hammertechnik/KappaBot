module.exports.run = async (client, message, args) => {
  if (!args || args < 1)return message.channel.send('you forgot ur suggestion along the way');

  const Discord = require('discord.js')
  const embed = new Discord.RichEmbed()
  .setColor(746215)
  .setFooter(`Kappa made by: Hammer1279, suggested by ${message.author.tag} `, 'https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png')
  .setTimestamp()
  //.setThumbnail('https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png')
  .setThumbnail(message.guild.iconURL)
  .addField(`Server: ${message.guild.name}`, args.join(" "), true)
  
  client.awaitReply = async (msg, question, limit = 60000) => {
      const filter = m => m.author.id === msg.author.id;
      await msg.channel.send(question);
      try {
        const collected = await msg.channel.awaitMessages(filter, { max: 1, time: limit, errors: ["time"] });
        return collected.first().content;
      } catch (e) {
        return false;
      }
  };
  
  const response = await client.awaitReply(message, 'Do you really want to send this?');
  let suggestchannel = message.guild.channels.find(`name`, "suggestions");
  if(!suggestchannel) return message.channel.send(`Couldn't find "suggestions" channel.`);

  if (["y", "yes"].includes(response.toLowerCase())) {
      message.channel.send('Suggestion sent');
      client.channels.get(suggestchannel).send({embed});
  }else

  if (["n","no","cancel"].includes(response)) {
      message.channel.send('Cancelled');
  }
 

  console.log(`${message.author.tag} Sent a suggestion!`)
 
}