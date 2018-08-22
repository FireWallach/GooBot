const commando = require('discord.js-commando');
const http = require('http');

class numberFacts extends commando.Command{
  constructor(client){
    super(client, {
      name: 'numberfacts',
      group: 'math',
      memberName: 'numberfacts',
      description: 'Provides trivia relating to the number chosen',
      examples: ['!numberfacts 42'],
      args: [
				{
					key: 'number',
					label: 'number',
					prompt: 'What number should I enlighten you about?',
					type: 'string'
				}
			]
    });

  }

  async run(message, args){
    var url = 'http://numbersapi.com/' + args.number;
    http.get(url, function(res){
      var body = '';
      res.setEncoding('utf8');


      res.on('data', function(chunk){
        body += chunk;
      });
      res.on('end', function(){
        message.reply(body);
      });
    }).on('error', function(e){
      console.log("Got an error: ", e);
    })

  }


};

module.exports = numberFacts;
