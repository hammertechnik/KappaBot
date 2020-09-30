exports.run = async (client, message, args) => {
  const devs = ["437999876828037158"];

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");

    const deleteCount = parseInt(args[0], 10);
    
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: \n${error}`));
  }