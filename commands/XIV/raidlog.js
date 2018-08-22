const commando = require('discord.js-commando');
const https = require('https');

module.exports = class raidlog extends commando.Command{
  constructor(client){
    super(client, {
      name: 'raidlog',
      group: 'xiv',
      memberName: 'raidlog',
      description: 'Returns a player\'s top logs.',
      examples: ['!raidlog "Abel Redd" Leviathan Monk'],
      args: [
				{
					key: 'name',
					prompt: 'What\'s the player\'s name?',
					type: 'string'
				},
        {
          key: 'server',
          prompt: 'What server are they from?',
          type: 'string'
        },
        {
          key:'ffjob',
          prompt: 'Want to restrict it to a specific job? Type that here.',
          type: 'string',
          default: 'none'
        }
			]
    });

  }

  async run(message, { name, server, ffjob }){
    message.channel.send('Command Deprecated due to FFLogs API changes. Let Abel know if there\'s a demand for it to be updated');
  //   //Determining HTTP endpoint:
  //   var uriname = encodeURIComponent(name.trim());
  //   var url = `https://www.fflogs.com:443/v1/parses/character/${uriname}/${server}/NA?api_key=cba1dfb0ca1348ab01f10180126878f5`
  //   console.log(url);
  //   //Making HTTP request:
  //   https.get(url, function(res){
  //     var body = "";
  //     res.on('data', function(chunk){
  //       body += chunk;
  //     });
  //     res.on('end', function(){
  //       if(res.statusCode >= 400){
  //         message.channel.send("Bad Request, try again scrub.");
  //         return;
  //       }
  //       var jobs = [];
  //       var player = {

  //       };

  //       //Determine what classes a player uses:
  //       var fights = JSON.parse(body);
  //       if(ffjob != 'none'){
  //         player[ffjob] = {name:ffjob};
  //         player[ffjob]["encounters"] = [];
  //         jobs.push(ffjob);
  //       } else {
  //         fights.forEach((tier)=>{
  //           tier.specs.forEach((division)=>{
  //             player[division.spec] = {name : division.spec};
  //             player[division.spec]["encounters"] = [];
  //             if(!jobs.includes(division.spec)){
  //               jobs.push(division.spec);
  //             }
  //           });
  //         });
  //       }

  //       //Determine what each class' best DPS and Historical Percentage are:

  //       jobs.forEach((job) =>{
  //         fights.forEach((fight) =>{
  //           fight.specs.forEach((spec) =>{
  //             if(spec.spec == player[job].name){
  //               player[job].encounters.push(fight.name);
  //               player[job][fight.name] = {
  //                 maxDps: 0,
  //                 maxHist: 0
  //               }
  //               spec.data.forEach((parse)=>{
  //                 if(parse.persecondamount > player[job][fight.name].maxDps){
  //                   player[job][fight.name].maxDps = parse.persecondamount;
  //                 }
  //                 if(parse.historical_percent > player[job][fight.name].maxHist){
  //                   player[job][fight.name].maxHist = parse.historical_percent;
  //                 }
  //               })
  //             }
  //           })
  //         })
  //       })

  //       //Format and Send response:
  //       var response = `***${name}'s Top Stats: \n***`;
  //       jobs.forEach((job) =>{
  //         response += ` _ ${player[job].name}: _ \n`
  //         player[job].encounters.forEach((encounter)=>{
  //           response += "     __" + encounter + "__: \n       ** "+ player[job][encounter].maxDps + "** [" + player[job][encounter].maxHist.toFixed(2) + "%]\n"
  //         })
  //       })
  //       message.channel.send(response);
  //     });
  //   }).on('error', function(e){
  //     console.log("Got an error: ", e);
  //   })
  };
};
