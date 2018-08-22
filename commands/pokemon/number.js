const commando = require('discord.js-commando');
const http = require('https');

class pokeNo extends commando.Command{
  constructor(client){
    super(client, {
      name: 'pokeno',
      group: 'pokemon',
      memberName: 'pokemon',
      description: 'Enter the number of the Pokemon you want info on'
    });
  }

  async run(message, args){
    var url = 'http://pokeapi.co/api/v2/pokemon/';
    if(!isNaN(args.string)){
      message.reply('That\'s not a number!');
    } else{
      http.get(url, function(res){
        var body = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk){
          body += chunk;
        });
        res.on('end', function(){
          var pokeObject = JSON.parse(body);
          console.log(pokeObject);
          message.channel.send(pokeObject);
        });
      }).on('error', function(e){
        console.log("Got an error: ", e);
      })
    }
  }
}

module.exports = pokeNo;
