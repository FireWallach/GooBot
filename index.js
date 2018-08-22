const Discord = require('discord.js');
const config = require('./config');
const commando = require('discord.js-commando');
const bot = new commando.Client();

bot.registry.registerGroup('random', 'Involves Random Attributes');
bot.registry.registerGroup('bitsnbobs', 'A command pick\'n\'mix');
bot.registry.registerGroup('math', 'Math commands, probably just practice for me');
bot.registry.registerGroup('overwatch', 'Overwatch Commands');
bot.registry.registerGroup('monhun', 'Monster Hunter');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname +"/commands")
bot.login(config.token);