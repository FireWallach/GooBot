const commando = require('discord.js-commando');
const https = require('https');

class mhcraft extends commando.Command{
  constructor(client){
    super(client, {
      name: 'mhcraft',
      group: 'monhun',
      memberName: 'mhcraft',
      description: 'returns the crafting recipe of an object',
      args: [
        {
          key: 'type',
          label: 'the type of object to be crafted',
          prompt: 'What kind of object is it?',
          type: 'string'
        },
        {
          key: 'name',
          label: 'the name of the item or set',
          prompt: 'What\'s the name of the item or set?',
          type:'string'
        }
      ]
    });
  }

  async run(message, args){
    //Defining Preliminary Method:
    var addCraftingRecipe= function(id){
      url = 'https://mhw-db.com/armor/' + id;
      https.get(url,function(res){
        var body='';
        res.setEncoding('utf8');
        res.on('data', function(chunk){
          body += chunk;
        });
        res.on('end',function(){
          var piece = JSON.parse(body);
          var materials = piece.crafting.materials;
          return body;
        });
      });
    };


    if(args.type.toLowerCase() == "weapon"){
      //GET WEAPON CRAFTING INFO:
      
      //Shaping the URL:
      var encodedName = encodeURI(args.name);
      var url = "https://mhw-db.com/weapons?q={\"name\":\""+ encodedName +"\"}";
      //Receiving the resulting JSON:
      https.get(url, function(res){
        var body = '';
        res.setEncoding('utf8');
        res.on('data', function(chunk){
          body += chunk;
        });
        res.on('end', function(){
          //JSON received pulling out crafting info
          var weaponList = JSON.parse(body);
          var output = "";
          if(weaponList[0]){
            var weapon = weaponList[0];
            if(weapon.crafting.craftable || weapon.crafting.upgradeMaterials[0]){
              if(weapon.crafting.craftingMaterials[0])
              {  var craftingMats = weapon.crafting.craftingMaterials;
                output += "__Crafting Mats__:\n";
                craftingMats.forEach(element => {
                  output+="  " + element.quantity+"x **" + element.item.name +"**\n";
                });}
              output +="\n";
              if(weapon.crafting.upgradeMaterials[0]){
                var upgradeMats = weapon.crafting.upgradeMaterials;
                output+="__Upgrade Mats__:\n";
                url = "https://mhw-db.com/weapons/" + weapon.crafting.previous;
                body = "";
                https.get(url,function(res){
                  res.setEncoding('utf8');
                  res.on('data', function(chunk){
                    body += chunk;
                  });
                  res.on('end', function(){
                    var oldWeapon = JSON.parse(body);
                    output+="  1x **" + oldWeapon.name + "**\n";
                    upgradeMats.forEach(element =>{
                      output+="  " + element.quantity+"x **" + element.item.name + "**\n";
                    })
                    message.channel.send(output);
                  })
                })
              } else {
                message.channel.send(output);
              }
            } else {
              message.channel.send("Item is not craftable");
            }
          } else {
            message.channel.send("No weapon found under that name");
          }
        });
      }).on('error', function(e){
        console.log("Got an error: ", e);
      })
  
    } else if(args.type.toLowerCase() =="armor"){
      //GET ARMOR CRAFTING INFO:
      //You can get the crafting mats for each piece in the JSON. Look closer;

      var output = "";
      var encodedName = encodeURI(args.name);
      var url = "https://mhw-db.com/armor/sets?q={\"name\":\""+ encodedName +"\"}";
      var body = "";
      https.get(url, function(res){
        res.on('data', (chunk)=>{
          body+=chunk;
        });
        res.on('end',()=>{
          var armorset = JSON.parse(body);
          if(armorset[0]){
             output +="**__" + armorset[0].name + " Armor:__**\n"
             //Loop through the set pieces:
             armorset[0].pieces.forEach((piece)=>{
               output+="  __"+piece.name+":__\n";
              //Loop through the crafting materials:
              piece.crafting.materials.forEach((material)=>{
                output+="    "+material.quantity +"x **"+material.item.name+"**\n";
              });
             });
             message.channel.send(output);
             console.log(output)
          } else{
            message.channel.send('No Armor Set found by that name');
          }
        });
      })
      

    } else if(args.type.toLowerCase() == "charm"){
      //GET CHARM CRAFTING INFO:
      var output = "";
      var encodedName = encodeURI(args.name);
      var url = "https://mhw-db.com/charms?q={\"name\":\""+ encodedName +"\"}";
      var body = "";
      var body = "";
      https.get(url, function(res){
        res.on('data', (chunk)=>{
          body+=chunk;
        });
        res.on('end',()=>{
          var charmset = JSON.parse(body);
          if(charmset[0]){
            output +="**__" + charmset[0].name + ":__**\n"
            //Loop through the set pieces:
            charmset[0].ranks.forEach((rank)=>{
              output+="  __"+rank.name+":__\n";
             //Loop through the crafting materials:
             rank.crafting.materials.forEach((material)=>{
               output+="    "+material.quantity +"x **"+material.item.name+"**\n";
             });
            });
            message.channel.send(output);
         } else{
           message.channel.send('No Charm Set found by that name');
         }
        })
      })

    } else{
      message.channel.send('Item type not recognized.')
    }
  }
}

module.exports = mhcraft;
