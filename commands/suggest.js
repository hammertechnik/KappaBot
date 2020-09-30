const Discord = require("discord.js");

var debug=false

const langfile= require ("../storage/translation/language.json")

let lan;

module.exports.run = async (client, message, args, prefix, language, beta, NaN, suggestchannel) => {

if(language == "eng") {
    lan=langfile.english.suggest
}
if(language == "ger") {
    lan=langfile.german.suggest
}
if(language == "fr") {
    lan=langfile.french.suggest
}

  const slicer = args.join(" ").indexOf("|")
  var title = args.join(" ").slice(0, slicer)
  const text = args.join(" ").replace(`${title}| `, "")

  if (!args || args < 1)return message.reply(lan.e1), message.delete();
  if (slicer == -1)return message.reply(`${lan.e2} \`\`${prefix}suggest title | description\`\``)

  const pic=client.user.displayAvatarURL;
  const authorpic=message.author.avatarURL
  const author=message.author.tag
  const name=client.user.username

  //if (!args || args < 1)return message.channel.send('you forgot ur suggestion along the way');

  const embed = new Discord.RichEmbed()
  //.setColor(746215)
  // .setTitle(`${lan.server} ${message.guild.name}`, message.guild.iconURL)
  .setColor('#00eedd')
  // .setDescription(`${lan.sb} ${author}`)
  .setTitle(`${lan.sb} ${author}`)
  .setFooter(`${name} ${lan.mb}`, pic)
  //.setFooter(`Kappa made by Hammer1279, suggested by ${message.author.tag} `, 'https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png')
  .setTimestamp()
  //.setThumbnail('https://cdn.discordapp.com/attachments/488708867337748510/546066712118951940/kappa.png')
  //.setThumbnail(message.guild.iconURL)
  .setThumbnail(authorpic)
  //.addField(`Server: ${message.guild.name}`, args.join(" "), true)
  .addField(title, text)
  
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
  
  const response = await client.awaitReply(message, lan.question);

  if (lan.yes.includes(response.toLowerCase())) {
      message.channel.send(lan.send);
      //let suggestchannel = message.guild.channels.find(`name`, "suggestions");
      client.channels.get(suggestchannel).send({embed}).then(async msg => {
        await msg.react('👍');
        await msg.react('👎');
    });
  }else

  if (lan.no.includes(response)) {
      message.channel.send(lan.cancel);
  }
 

  console.log(`${message.author.tag} Sent a suggestion!`)
 
}