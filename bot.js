const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!"

client.on("guildMemberAdd", member => {
let we = client.channels.get("558253531107164170");
      if(!we) return;
      if(we) {
welcomer.send(`***WELOCME TO TM SSRVER`اتمني تستمتع معانا:heart:``)
}
})

client.login(process.env.BOT_TOKEN);	