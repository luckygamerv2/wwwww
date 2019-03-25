const Discord = require('discord.js');
const client = new Discord.Client();
const najzx = '#'



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`By : :"}.`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(``);
}); // 


client.on('guildMemberAdd', member  => {
var channel = member.guild.channels.find('name', 'chat')
         console.log('-');
    console.log('-');
    console.log('-');
    console.log('-');


if (!channel) return;
   

       
                          
                           
                   setTimeout(() => {
            
               channel.send(`${member}**WELOCME TO HuleR SSRVER 
■■■■اتمني تستمتع معانا■■■■:heart:
**
`) ;  
},5000)                            
});

client.login(process.env.BOT_TOKEN);
 
      
