exports.run = (client, message, args) => {
// Check if they have one of many roles
if(message.member.roles.some(r=>["Dev", "Mod", "Server Staff", "Proficient"].includes(r.name)) ) {
    message.reply("yes")
    // has one of the roles
  } else {
      message.reply("no")
    // has none of the roles
  }
}