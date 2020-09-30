const Discord = require("discord.js");
const fs = require("fs");

const langfile= require ("../storage/translation/language.json")

let lan;

module.exports.run = async (client, message, args, prefix, language, beta) => {

    if(language == "eng") {
        lan=langfile.english.set.mute
    }
    if(language == "ger") {
        lan=langfile.german.set.mute
    }
    if(language == "fr") {
        lan=langfile.french.set.mute
    }

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(lan.e1);

if(!args || args < 1) return message.channel.send(lan.e2); message.delete();

if(args[0] == "create") {
    try{
        muterole = await message.guild.createRole({
          name: "Muted",
          mentionable: true,
          color: "#595959",
          permissions:[]
        })
        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
      message.delete()
      message.reply(lan.created)
      return
}

let roleID = args[0].replace('<', '').replace('@', '').replace('&', '').replace('>', '');

if(!message.guild.roles.has(roleID)){message.reply(lan.e3) 
message.delete()
return}

let roles = JSON.parse(fs.readFileSync("./storage/roles.json", "utf8",));
// let defrole = message.guild.roles.find(r => r.name === "Muted");

console.log()

roles[message.guild.id] = {
        muterole: roleID
};

fs.writeFile("./storage/roles.json", JSON.stringify(roles, null, '\t'), (err) => {
  if(err) console.log(err)
});

const embed = new Discord.RichEmbed()
.setColor("#FF9900")
.setTitle(lan.m1)
.setDescription(`${lan.m2} <@&${roleID}>`);

await message.channel.send(embed).then(msg=>{msg.delete(30000)})

}