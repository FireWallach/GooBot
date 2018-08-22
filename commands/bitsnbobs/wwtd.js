const commando = require('discord.js-commando');
const http = require('https');

class trumpCommand extends commando.Command{
  constructor(client){
    super(client, {
      name: 'trump',
      group: 'bitsnbobs',
      memberName: 'trump',
      description: 'What does Trump think?'
    });
  }

  async run(message, args){
    var url = 'https://api.whatdoestrumpthink.com/api/v1/quotes';
    http.get(url, function(res){
      var body = '';
      res.setEncoding('utf8');


      res.on('data', function(chunk){
        body += chunk;
      });
      res.on('end', function(){
        var trumpObject = JSON.parse(body);
        message.reply(trumpObject.messages.non_personalized[Math.floor((Math.random() * 48))]);
      });
    }).on('error', function(e){
      console.log("Got an error: ", e);
    })

  }


}

module.exports = trumpCommand;
