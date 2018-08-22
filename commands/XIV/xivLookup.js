const commando = require('discord.js-commando');
const https = require('https');

class xivlookup extends commando.Command{
  constructor(client){
    super(client, {
      name: 'xivlookup',
      group: 'xiv',
      memberName: 'xivlookup',
      description: 'DMs the user item names and their cooresponding item codes based on the XIVDB search engine.',
      examples: ['!xivlookup maiming'],
      args: [
				{
					key: 'string',
					label: 'string',
					prompt: 'What item are you lookin for?',
					type: 'string'
				}
			]
    });

  }

  async run(message, args){
    var url = 'https://api.xivdb.com/search?string=';
    var words = args.string.split(" ");
    for (var i = 0; i < words.length; i ++){
      url += words[i] + ",";
    }
    https.get(url, function(res){
      message.channel.send("Command Deprecated. If you still have a demand for this command, let Abel know.");
      /*
      var body = "";
      var answers = "";
      res.on('data', function(chunk){
        body += chunk;
      });
      res.on('end', function(){
        var searchResults = JSON.parse(body);
        for(var i = 0; i < 5; i++){
          if(searchResults.items.results[i] != undefined){
            answers += "**" +searchResults.items.results[i].name + "**: " + searchResults.items.results[i].id + "\n";
          }
        }
//        message.author.send(answers);
        message.reply("\n" + answers);
      });
      */
    });

  }


};

module.exports = xivlookup;
