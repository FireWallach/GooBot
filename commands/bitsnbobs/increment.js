const commando = require('discord.js-commando');

class increment extends commando.Command{
  constructor(client){
    super(client, {
      name: 'increment',
      group: 'bitsnbobs',
      memberName: 'increment',
      description: 'adds 1 to a number',
      args: [
        {
          key: 'number',
          label: 'the number to be incremented',
          prompt: 'requires a number',
          type: 'string'
        }
      ]
    });
  }

  async run(message, args){
    message.channel.send(parseInt(args.number) + 1);
  }

};

module.exports = increment;
