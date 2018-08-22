const commando = require('discord.js-commando');
const https = require('https');

class xivrecipe extends commando.Command{
  constructor(client){
    super(client, {
      name: 'xivrecipe',
      group: 'xiv',
      memberName: 'xivrecipe',
      description: 'Responds with information about an item based on its Item ID in XIVDB\'s database. ',
      examples: ['!xivrecipe 17433'],
      args: [
				{
					key: 'string',
					label: 'string',
					prompt: 'Give me an Item ID',
					type: 'string'
				}
			]
    });

  }

  async run(message, args){
    message.channel.send("Command Deprecated. If you still have a demand for this command, let Abel know.");
    /*
    var url = 'https://api.xivdb.com/item/' + args.string;

    https.get(url, function(res){
      var body = "";
      var itemResponse = "";
      res.on('data', function(chunk){
        body += chunk;
      });
      res.on('end', function(){
        var itemObject = JSON.parse(body);
        itemResponse += "**--"+itemObject.name + "--**\n";
        for(var i = 0; i < itemObject.attributes_params.length; i ++){
          for(var k = 0; k < itemObject.craftable.length; k++){
            for(var i = 0; i < itemObject.craftable[0].tree.length; i ++){
              itemResponse += itemObject.craftable[0].tree[i].name + " x"+ itemObject.craftable[0].tree[i].quantity + "\n";
            }
          }
        }
        message.channel.send(itemResponse);
      });
    });
    */
  };
};




module.exports = xivrecipe;
