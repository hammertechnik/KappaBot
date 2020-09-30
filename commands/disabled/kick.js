module.exports = (client, message, args) => {
    const member = message.mentions.members.first()
    const devs = ["437999876828037158"];
    if (!~devs.indexOf(message.author.id)) {
        return;
    }
    if (!member) {
      return message.reply(`Who are you trying to kick? You must mention a user.`)
    }
  
    if (!member.kickable) {
      return message.reply(`I can't kick this user. Sorry!`)
    }
  
    return member
      .kick()
      .then(() => message.reply(`${member.user.tag} was kicked.`))
      .catch(error => message.reply(`Sorry, an error occured.`))
  };