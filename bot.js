const Discord = require('discord.js');
const client = new Discord.Client();
const najzx = '#'



client.on("guildMemberAdd", member => {
  client.channels.find('id', '556594043623047169').send(`**welcome : [ ${member} TO HuleR SSRVER**
■■■■اتمني تستمتع معانا■■■■:heart:
** ]**`)
});
 
 
 
 
client.login(process.env.BOT_TOKEN);
 
      