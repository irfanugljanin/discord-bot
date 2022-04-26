module.exports = {
  name: "mul",
  aliases: [],
  description: "Multiply 2 numbers!",
  cooldown: 5,
  guildOnly: true,
  args: true,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    if (!a || !b) {
      return msg.reply("You need to provide two arguments!");
    }
    var a = parseInt(args[0]);
    var b = parseInt(args[1]);

    msg.reply(`Multiplication of 2 numbers is ${a * b}`);
  },
};
