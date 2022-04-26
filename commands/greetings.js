module.exports = {
  name: "greetings",
  aliases: ["hello"],
  description: "The bot will greet you!",
  cooldown: 5,
  guildOnly: true,
  args: false,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    var randomMessage = Math.floor(Math.random() * 5);

    switch (randomMessage) {
      case 1:
        return msg.channel.send(`Merhaba ${msg.author.username}`);
      case 2:
        return msg.channel.send(`Djez ba ${msg.author.username}`);
      case 3:
        return msg.channel.send(`Selam Alejkum ${msg.author.username}`);
      case 4:
        return msg.channel.send(`Pozdrav ${msg.author.username}`);
      case 5:
        return msg.channel.send(`kako e ${msg.author.username}`);
    }
  },
};
