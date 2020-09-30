const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args, prefix, language, beta) => {
  if (args == 0)return message.reply("you forgot who you want to unmute!")
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    // let role = message.guild.roles.find(r => r.name === "muted");
    let roles = JSON.parse(fs.readFileSync("./storage/roles.json", "utf8",));
    let role = roles[message.guild.id].muterole
    
    // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
    let member = message.mentions.members.first();

// if(message.member.roles.some( r=>["muted"].includes(r.name))) {
  if(!bUser.roles.some( r=>[role].includes(r.id))) {
    message.reply("the member isn't muted!")
    return;
  } else {}
    // or the person who made the command: let member = message.member;
    
    // Add the role!
    //member.addRole(role).catch(console.error);
    
    // Remove a role!
    member.removeRole(role).catch(console.error);
    message.channel.send(`The Member ${member} got unmuted!`)
    }