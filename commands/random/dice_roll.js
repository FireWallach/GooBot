const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command{
  constructor(client){
    super(client, {
      name: 'roll',
      group: 'random',
      memberName: 'roll',
      description: 'Rolls a die'
    });
  }
  async run(message, args){
    if(/*message.author.avatar == 'a0dd3d3c476a2710d92be42bc8135813'*/false){
      message.reply("You rolled a 9999");
    }else{
      if(message.author.avatar == '419c3a49e56e921ddf644d08b7226067'){
        message.reply("You dropped the die on the ground and must roll again");
      }else{
        var roll = Math.floor(Math.random()*6+1);
        message.reply("You rolled a " + roll);
        console.log(message.author.avatar);
      }
    }
  }
}

module.exports = DiceRollCommand;
