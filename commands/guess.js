// const { parse } = require("dotenv/types");

let randomNumber = undefined;

module.exports = {
  name: "guess",
  aliases: ["g"],
  description: "Guess the number!",
  cooldown: 2,
  guildOnly: true,
  args: true,
  usage: false,
  // eslint-disable-next-line no-unused-vars
  execute(msg, args) {
    const argument = args[0];

    if (argument == start) {
      randomNumber = Math.trunc(Math.random() * 10) + 1;
      return msg.reply("The new game has started. Guess number!");
    }
    if (randomNumber == undefined) {
      return msg.reply("Please start the game by typing start");
    }

    if (randomNumber === parseInt(argument)) {
      randomNumber = undefined;
      return msg.reply("Congrats, you won!");

      return msg.reply("Keep guessing");
    }

    // if (randomNumber === undefined) {
    //   randomNumber = Math.trunc(Math.random() * 10) + 1;
    //   return msg.reply("The game has started. Guess number!");
    // } else {
  },
};
