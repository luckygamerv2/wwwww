const Discord = require('discord.js');
const client = new Discord.Client();
const aprefix ="!";

client.on("guildMemberAdd", member => {
  client.channels.find('id', 'ا560421350867730442').send(**. welcome To LOte servre  ${member}اتمني تستمتع معانا **)
});

client.login(process.env.BOT_TOKEN);
