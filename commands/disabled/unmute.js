module.exports.run = async (bot, message, args) => {

    if(message.member.roles.some(r=>["Développeur de bot", "Chevaucheur d'élite", "Chef", "Mod"].includes(r.name)) ) {
        // has one of the roles
      } else {
          message.reply("doesn't look like you can use that!")
          return;
        // has none of the roles
      }
    
      let tounmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!tounmute) return message.reply("Couldn't find user.");
      if(!tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
      let gRole = message.guild.roles.find(`name`, "muted");

      if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role.");
      await(rMember.removeRole('548548811400937503'));
      message.channel.send(`<@${tounmute.id}> has been unmuted!`);

    }