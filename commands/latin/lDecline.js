const commando = require('discord.js-commando');

class LDecline extends commando.Command{
  constructor(client){
    super(client, {
      name: 'ldecline',
      group: 'latin',
      memberName: 'ldecline',
      description: 'declines latin'
    });
  }
  async run(message, args){
    message.channel.send("I got no idea how to do this.")
  }
}

module.exports = LDecline;
