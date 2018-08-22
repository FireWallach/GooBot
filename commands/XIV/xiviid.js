const commando = require('discord.js-commando');
const https = require('https');

class xiviid extends commando.Command{
  constructor(client){
    super(client, {
      name: 'xiviid',
      group: 'xiv',
      memberName: 'xiviid',
      description: 'Responds with information about an item based on its Item ID in XIVDB\'s database. ',
      examples: ['!xiviid 17433'],
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
        itemResponse += "**--" + itemObject.name + "--**\n";
        for(var i = 0; i < itemObject.attributes_params.length; i ++){
          var hq = itemObject.attributes_params[i].value_hq !== undefined ? itemObject.attributes_params[i].value_hq : "n/a";
          itemResponse += itemObject.attributes_params[i].name + ": " + itemObject.attributes_params[i].value + "/" + hq + "(hq)\n";
        }
        itemResponse += "\n " + itemObject.help;
        message.channel.send(itemResponse);
      });
    });
    */
  };
};




module.exports = xiviid;
