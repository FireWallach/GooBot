const commando = require('discord.js-commando');
const http = require('https');

class trumpDescribesCommand extends commando.Command{
  constructor(client){
    super(client, {
      name: 'trumpdescribes',
      group: 'bitsnbobs',
      memberName: 'trumpdescribes',
      description: 'What does Trump think?',
      examples: ['trumpDescribes Randy'],
      args: [
				{
					key: 'name',
					label: 'name',
					prompt: 'Who should trump describe?',
					type: 'string'
				}
			]
    });

  }

  async run(message, args){
    var url = 'https://api.whatdoestrumpthink.com/api/v1/quotes';
    var tChannel = message.channel;
    http.get(url, function(res){
      var body = '';
      res.setEncoding('utf8');


      res.on('data', function(chunk){
        body += chunk;
      });
      res.on('end', function(){
        var trumpObject = JSON.parse(body);
        tChannel.send(args.name +' '+ trumpObject.messages.personalized[Math.floor((Math.random() * 48))]);
      });
    }).on('error', function(e){
      console.log("Got an error: ", e);
    })

  }


};

module.exports = trumpDescribesCommand;
