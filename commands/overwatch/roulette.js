const commando = require('discord.js-commando');

class HeroRoulette extends commando.Command{
  constructor(client){
    super(client, {
      name: 'owroulette',
      group: 'overwatch',
      memberName: 'owroulette',
      description: 'Spits out a random overwatch hero',
      examples: ['!owroulette tank'],
      args: [
				{
					key: 'class',
					label: 'class',
					prompt: 'What class should we spit at you?',
					type: 'string',
          default: ""
				}
			]
    });
  }
  async run(message, args){
    var roll = Math.floor(Math.random()*26+1);
    var offense = ["Go play Doomfist and be an inferior flanker.","Are you a pro Genji???","It's High Noon...","Play nice, Play Pharah","Go be Reaper, you edgelord.","Dad:76","Debes estar Sombra","The world could always use more Tracers."];
    var defense = ["Play Bastion if you like on-rails shooters","Handsoap","Play junkrat, you didn't want to aim anyway.","Mei's Adorable and Infuriating.","Play Torbjörn, but if you get potg, you better be dead.","WindowWasher"];
    var tank = ["Baby D.Va main btw","Centaur","I'LL BE YOUR SHIELD","Roadhog, but don't expect to tank anything.","No aim, No brain, Winston Main","Play Zarya if you want a somewhat better reinhardt ult you get in 4x the time."];
    var support = ["Try to play Ana, I guess?","Lúcio. Try your best.","Mercy for EZ win.","Quick! Play Moira before she gets nerfed","Symmetra, but you ain't no healer","GAYS, INTO THE IRIS."];
    if(args.class == ""){
      var category = Math.floor(Math.random()*4);
      switch(category){
        case 1:
          roll = Math.floor(Math.random()*8);
          message.reply(offense[roll]);
          break;
        case 2:
          roll = Math.floor(Math.random()*6);
          message.reply(defense[roll]);
          break;
        case 3:
          roll = Math.floor(Math.random()*6);
          message.reply(tank[roll]);
          break;
        case 4:
          roll = Math.floor(Math.random()*6);
          message.reply(support[roll]);
          break;
      }
    }else{
      if(args.class == "offense"){
        roll = Math.floor(Math.random()*8);
        message.reply(offense[roll]);
      } else if(args.class == "defense"){
        roll = Math.floor(Math.random()*6);
        message.reply(defense[roll]);
      } else if(args.class == "tank"){
        roll = Math.floor(Math.random()*6);
        message.reply(tank[roll]);
      } else if(args.class == "support"){
        roll = Math.floor(Math.random()*6);
        message.reply(support[roll]);
      }
    }
  }
}


module.exports = HeroRoulette;
