module.exports = {
  name: "getmessage",
  aliases: ["gm"],
  description: "Get user message!",
  cooldown: 5,
  guildOnly: true,
  args: false,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  async execute(msg, args) {
    const filter = (m) => m.author.id === msg.author.id;

    const msgNew = await msg.channel.awaitMessage(filter, {
      max: 4,
      time: 10000,
    });
    msg.reply(`You sent this: ${msgNew.first()?.content}`);
  },
};
