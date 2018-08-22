const commando = require('discord.js-commando');
const http = require('https');

class newName extends commando.Command{
  constructor(client){
    super(client, {
      name: 'newname',
      group: 'bitsnbobs',
      memberName: 'newname',
      description: 'Gives you a new identity'
    });
  }


  async run(message, args){
      var url = 'https://randomuser.me/api/';
      http.get(url, function(res){
        var body = '';
        res.setEncoding('utf8');
        if(message.channel.type == 'dm'){
          message.reply('Cannot be done in a DM');
          return;
        }


        res.on('data', function(chunk){
          body += chunk;
        });
        res.on('end', function(){
          var userObj = JSON.parse(body);
          var name = userObj.results[0].name.first.charAt(0).toUpperCase() + userObj.results[0].name.first.slice(1) + " " + userObj.results[0].name.last.charAt(0).toUpperCase() + userObj.results[0].name.last.slice(1);
          message.reply("Your new name is: " + name);
          message.member.setNickname(name);
        });
      }).on('error', function(e){
        console.log("Got an error: ", e);
      })

  }
}

module.exports = newName;
