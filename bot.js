const Discord = require('discord.js');
 
const bot = new Discord.Client();
 
const token = "Hell Nah";
 
var prefix = '=';
 
var eb = ["You can help youself right?",
"Not right now Please",
"Nope",
"NOOOOOOO",
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes, definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"];
 
bot.on("ready", function() {
      bot.user.setGame("🔥 Fps Boost Client And Fps Pack Release! 🔥 Prefix [=]" , "https://www.twitch.tv/123silly");
    console.log(`Started bot as: ${bot.user.tag}!`);
});
 
bot.on("guildMemberAdd", function(member) {
let joinleaves = member.guild.channels.find("name","main-chat");
if(!joinleaves) return;
joinleaves.sendMessage(member.toString() + " welcome to the server!");
 
if(!joinleaves) return;
 
});
 
bot.on("guildMemberRemove", function(member) {
 
let joinleaves = member.guild.channels.find("name","main-chat");
 
if(!joinleaves) return;
 
joinleaves.send(member.toString() + " has left... We will miss you! :cry:");
});
 
bot.on("message", function(message) {
if (message.author.equals(bot.user)) return;
 
if (!message.content.startsWith(prefix)) return;
 
var args = message.content.substring(prefix.length).split(" ");
 
switch (args[0].toLowerCase()) {
 
case "emojis":
const emojiList = message.guild.emojis.map(e=>e.toString()).join(" ");
message.channel.send(emojiList);
break;
case "8ball":
if (args[1]) {
  message.channel.sendMessage(':8ball: ' + message + '? - `' + eb[Math.floor(Math.random() * eb.length)] + '`');
} else {
  message.channel.sendMessage("Please provide a question");
}
break;
case "coinflip":
var result = Math.floor((Math.random() * 2) + 1);
    if (result === 1) {
    message.reply('The coin landed on heads');
} else if (result === 2) {
message.reply('The coin landed on tails');
}
break;
		
case "help":
message.delete("help")
console.log(`Help message has been sent to <@${message.author.id}> !`)
message.channel.sendMessage(`<@${message.author.id}> -> **Commands List** has been sent to your pm/dm!`)
var embedt = new Discord.RichEmbed()
.setTitle("All Commands")
.setDescription('These Commands Will Help You!')
.setThumbnail ('https://ak4.picdn.net/shutterstock/videos/10035044/thumb/1.jpg')
.addField(`=8ball`, `:8ball: Gives A Answer!`)
.addField(`=ping`, `Shows A 99% Correct Ping.`)
.addField(`=emojis`, `Shows A L Emoji / Image.`)
.addField(`=say`, `Say Whatver You Said.`)
.addField(`=animesearch`, `Search The Anime You Like.`)
.addField(`=mc [player]`, `Shows Minecraft Info.`)
.addField(`=ban [user]`, `Bans A User.`)
.addField(`=kick [user]`, `Kicks A User.`)
.addField(`=mute [user]`, `Mutes A User.`)
.addField(`=umute [user]`, `Unmutes A User.`)
.setFooter("Latenci [Help]")
.setColor(0x1ab517)
message.author.sendEmbed(embedt)
break;

case "ping":
message.reply(`Pong! ${Math.round(bot.ping)}ms`);
break;
		
case "say":
    var sayargs = message.content.substring(5).split(" ");
                    const saymsg = sayargs.join(" ");
                    message.delete().catch(O_o=>{});
		    message.channel.sendMessage(saymsg);
  break;

case "animesearch":
if (args[1]) {
    message.reply(`https://www.animepower.net/` + args[1]);
} else {
    message.reply(`How to use: \n${prefix}searchanime [anime] **NOTICE: DONT USE SPACES, USE - =**`);
}
break;

        case "kick":
    let modRoles = message.guild.roles.find("name", "Moderator");
        if (args[1]) {
    if(message.member.roles.has(modRoles.id)) {
      let kickMember = message.guild.member(message.mentions.users.first());
      message.guild.member(kickMember).kick();
      message.channel.sendMessage(":fire: You Have been Kicked on Riskii's Discord :fire:");
      message.mentions.users.first().send(`:x: **You have been KICKED on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
    } else {
      return message.reply(":x: **You dont have permissions to do that!** :x:");
    }
    } else {
    return message.reply(`:x: **Please mention a user** :x:`);
    }
break;
case "ban":
    let modRolesss = message.guild.roles.find("name", "Moderator");
        if (args[1]) {
    if(message.member.roles.has(modRolesss.id)) {
      let banMember = message.guild.member(message.mentions.users.first());
      message.guild.member(banMember).ban();
      message.channel.sendMessage(":fire: You Have been banned on Riskii's Discord :fire:");
      message.mentions.users.first().send(`:x: **You have been PERM BANNED! on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
    } else {
      return message.reply(":x: **You dont have permissions to do that!** :x:");
    }
    } else {
    return message.reply(`:x: **Please mention a user** :x:`);
    }
break;
case "mute":
let modRolez = message.guild.roles.find("name", "Moderator");
if(message.member.roles.has(modRolez.id)) {
 let muteMember = message.guild.member(message.mentions.users.first());
 muteMember.addRole(muteMember.guild.roles.find("name", "Muted"));
 message.channel.sendMessage(":fire: You Have been Muted on Riskii's Discord :fire:");
 message.mentions.users.first().send(`:x: **You have been MUTED on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
}
else {
 return message.reply("=mute [player]");
}
break;
case "unmute":
let modRolezz = message.guild.roles.find("name", "Moderator");
if (args[1]) {
if(message.member.roles.has(modRolezz.id)) {
let unMember = message.guild.member(message.mentions.users.first());
unMember.removeRole(unMember.guild.roles.find("name", "Muted"));
message.channel.sendMessage(":fire: You Have been Unmuted on Riskii's Discord :fire:");
message.mentions.users.first().send(`:tada: **You have been unmuted on ${message.guild.name}! :wink: Please contact <@${message.author.id}> for more information!** :tada:`)
} else {
  return message.reply(":x: **You dont have permissions to do that!** :x:");
}
} else {
return message.reply(`=unmute [player]`);
}
break;
case "warn":
let modRoless = message.guild.roles.find("name", "Moderator");
if (args[1]) {
if(message.member.roles.has(modRoless.id)) {
let wMember = message.guild.member(message.mentions.users.first());
message.channel.sendMessage(":fire: You Have been Warned on Riskii's Discord :fire:");
message.mentions.users.first().send(`:x: **You have been warned on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
}
else
{
  return message.reply(":x: **You dont have permissions to do that!** :x:");
  } } else {
      return message.reply(`=mute [player]`);
  }
break;
case "unwarn":
let modRolex = message.guild.roles.find("name", "Moderator");
if (args[1]) {
if(message.member.roles.has(modRolex.id)) {
let uMember = message.guild.member(message.mentions.users.first());
message.channel.sendMessage(":arrow_right: The Member Has Been Unwarned! :point_left:");
 message.mentions.users.first().send(`:tada: **You have been unwarned on ${message.guild.name}! :wink: Please contact <@${message.author.id}> for more information!** :tada:`)
}
else
{
  return message.reply(":x: **You dont have permissions to do that!** :x:");
}
} else {
return message.reply(`:x: **Please mention a user** :x:`);
}
break;
  
case "purge":
if (args[1]) {
    if (args[1] > 2) {
        if (args[1] > 50) {
            message.reply("You are clearing too much messages!");
        }
        else {
let messagecount = parseInt(args[1]);
  message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
        }
    } else {
        message.reply("You can only delete 5 messages or more.");
    }
} else {
    message.reply("Please type number of messages to delete.");
}
break;

 		case "mc":
		    var mcargs = message.content.substring(4).split(" ");
                    const mcmsg = mcargs.join("");
                    message.delete().catch(O_o=>{});
		    var mcskin = new Discord.RichEmbed()
		    .setTitle(`Minecraft Information`)
		    .setDescription(`Welcome back ` + mcmsg + `! Here is some information about you:`)
                    .addField(`Username:`, mcmsg, true)
		    .addField(`Skin:`, `https://minecraftskinstealer.com/skin.php?u=`+mcmsg+`&s=700`, true)
		    .addField(`Use this skin to your account:`, `[Click Me!](https://www.minecraft.net/profile/skin/remote?url=https://minecraft.net/skin/`+mcmsg+`.png)`)
                    .setFooter(`Latenci`)
		    .setThumbnail(`https://minotar.net/avatar/`+mcmsg+`/100.png`)
                    .setColor(0x6bf442)
                    message.channel.sendEmbed(mcskin);
		    break;
		
case "serverinfo":
message.delete("serverinfo")
var sie = new Discord.RichEmbed()
.setTitle(`--==Server Info==--`)
.setDescription(`The information about this server is here:`)
.addField(`Name:`, message.guild.name, true)
.addField(`ID:`, message.guild.id, true)
.addField(`Owner:`, message.guild.owner, true)
.addField(`Server Region:`, message.guild.region, true)
.addField(`Channels:`, message.guild.channels.size, true)
.addField(`Membercount:`, message.guild.memberCount, true)
.addField(`Server Created At:`, message.guild.createdAt, true)
.setFooter(`Latenci`)
.setColor(hexcols[~~(Math.random() * hexcols.length)]);
message.channel.sendEmbed(sie)
break;
		
case "userinfo":
if (args[1]) {

let useri = message.mentions.users.first();
var ui = new Discord.RichEmbed()
.setTitle(`--==User Info==--`)
.setDescription(`<@${useri.id}>'s Info:`)
.setThumbnail(useri.avatarURL)
.addField("Account Created:", `${useri.createdAt}`)
.addField(`Username:`, `${useri.username}`)
.addField(`Status:`,`${useri.presence.status}`)
.addField(`Avatar:`, `${useri.avatarURL}`)
.addField("ID:", `${useri.id}`)
.setFooter("Latenci")
.setColor(0xff0000)
message.channel.sendEmbed(ui)
} else {
  message.channel.sendMessage("Who's UserInfo Are You Asking For?");
}
break;
		
case "bp":
message.channel.fetchMessages({limit: 100}).then(messages => message.channel.bulkDelete(messages));
message.reply("Chat Has Been Cleared");
break;
 
 
 
 
 
}
});
 
 
 
 
 
 
bot.login(process.env.BOT_TOKEN);
