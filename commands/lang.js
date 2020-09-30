const Discord = require("discord.js");
const fs = require("fs");

const devs = ["437999876828037158"];

module.exports.run = async (client, message, args, prefix, language, beta) => {
  if (args[0]) {
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    message.reply("Dude, ur not a admin!")
    message.delete()
    return};
  }
  if(args[0 == "help"]) {
    message.reply(`Usage: ${prefix}language <desired language here>`);
    message.delete()
    return}

  let lan = JSON.parse(fs.readFileSync("./storage/languages.json", "utf8",));
  let slan;
  let lang;
  let rlan;
  let tlan
  if(lan[message.guild.id]){
  tlan = lan[message.guild.id].language
  } else {
    tlan="eng"
  }
  if(tlan == "eng") {
    rlan="English"
}
if(tlan == "ger") {
    rlan="German"
}
if(tlan == "fr") {
    rlan="French"
}

if(!args[0]) {
  message.delete()
message.reply(`current language: **${rlan}**`).then(m => {m.delete(2500)})
  return
}

  switch (args[0]) {

    case "english": {
        slan="eng"
        lang="english"
        break
    }

    case "eng": {
      slan="eng"
      lang="english"
      break
  }

    case "german": {
        slan="ger"
        lang="german"
        break
    }

    case "ger": {
      slan="ger"
      lang="german"
      break
  }

    case "french": {
        slan="fr"
        lang="french"
        break
    }

    case "fr": {
      slan="fr"
      lang="french"
      break
  }

    default: {
        message.reply("this Language is not saved in the system!")
        return;
    }
  }


  lan[message.guild.id] = {
    language: slan
  };

  fs.writeFile("./storage/languages.json", JSON.stringify(lan, null, '\t'), (err) => {
    if(err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Language Set!")
  .setDescription(`Set to ${lang}`);

  message.channel.send(sEmbed).then(msg=>{msg.delete(30000)})
  message.delete()

}

module.exports.help = {
  name: "language"
}
