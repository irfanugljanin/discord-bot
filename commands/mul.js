module.exports = {
  name: "mul",
  aliases: [],
  description: "Add 2 numbers!",
  cooldown: 5,
  guildOnly: true,
  args: true,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    // const now = Date.now();
    // const duration = (now - msg.createdTimestamp) / 1000;
    // msg.reply(`Pong! Time needed: ${duration.toFixed(3)}s`);
    var a = parseInt(args[0]);
    var b = parseInt(args[1]);

    msg.reply(`Multiplication of 2 numbers is ${a * b}`);
  },
};
