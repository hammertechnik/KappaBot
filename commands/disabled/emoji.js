exports.run = (client, message, args) => {
  client.emojis.find(emoji => emoji.name === "Strupi");
};