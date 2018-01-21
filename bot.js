const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js');
 
var token = "NOPE M8";
 
var guilds = {};
 
 
bot.on("ready", function() {
      bot.user.setGame("https://dear-aquarius.glitch.me | (help", "https://www.twitch.tv/123silly");
    console.log(`Started bot as: ${bot.user.tag}!`);
});
 
//===========================================
 
bot.on("guildMemberAdd", function(member) {
 
let joinleave = member.guild.channels.find("name","join-leave");
let memberRole = member.guild.roles.find("name", "Member");
 
if(!joinleave) return;
if(!memberRole) return;
 
joinleave.send(`:tada: Welcome **` + member.toString() + `** to ${member.guild.name}! Our membercount is: **${member.guild.members.size}**!`);
member.addRole(memberRole.id);
});
 
bot.on("guildMemberRemove", function(member) {
 
let joinleaves = member.guild.channels.find("name","join-leave");
 
if(!joinleaves) return;
 
joinleaves.send(`Oh no... **` + member.toString() + `** left. Our membercount is now **${member.guild.members.size}** :frowning:`);
});
//============================
 
 
bot.on("message", function(message) {
  try{
      if (!guilds[message.guild.id]) {
          guilds[message.guild.id] = {
              prefix: "("
          };
      }
  } catch (e) {
    console.log(e);
  }
 
  const prefix = guilds[message.guild.id].prefix;
 
  if (message.author.bot) return;
 
  if (message.author.equals(bot.user)) return;
 
  if (!message.content.startsWith(prefix)) return;
 
  var args = message.content.substring(prefix.length).split(" ");
 
  switch (args[0].toLowerCase()) {
case "ping":
message.reply(`Pong! ${Math.round(bot.ping)}ms`);
break;
case "prefix":
if(message.channel.type === 'dm') {
  message.reply(":x: **This command is not allowed in PM's!** :x:");
} else {
  const newPrefix = args.slice(1).join(" ");
  guilds[message.guild.id].prefix = newPrefix;
  message.reply(`New prefix for **${message.guild.name}** is **${newPrefix}** ! :x: **NOTICE:** Prefix cannot be changed to music part, sorry. | PLEASE USE 1 LETTER PREFIX, YOU CAN GLITCH SOME COMMANDS!`);
}
break;
case "help":
var helpembed = new Discord.RichEmbed()
.setTitle(`Aloid's Commands List`)
.setDescription(`${prefix}prefix [prefix] - Sets new prefix for the bot!\n${prefix}clear [AMOUT OF MESSAGES FROM 4 TO 49] - Clears amout of messages you wrote.\n${prefix}meme - DANK MEME\n${prefix}searchanime - Search your favourite anime!\n${prefix}anime - Anime list\n${prefix}help - Shows this help message\n${prefix}ping - Says pong!\n${prefix}serverinfo - Shows information about your server!\n${prefix}8ball [QUESTION] - Ask me a question and i will answer it!\n${prefix}avatar | ${prefix}avatar @USER - Shows your avatar or users avatar!\n${prefix}mc [MINECAFT USERNAME] - Shows your minecraft account!\n${prefix}servers - Shows in which servers i am!\n${prefix}say - Says what you say! \n\n**MUSIC COMMANDS**\n\n(play - Plays music\n(stop - Stops music [DJ ONLY]\n(volume [0 - 150] - Sets volume [DJ ONLY]\n(nowplaying - See whats playing!\n(queue - Shows queue!\n(remove [position/all] - Removes a song or removes all songs.\n(skip - Vote to skip the song.\n(forceskip - Forceskip song! [DJ ONLY]\n(pause - Pause music [DJ ONLY]\n(skipto [POSITION] - skips to a song!\n\nPrefix is: **${prefix}** !\n\n[Invite Me!](http://aloid.tk)\n[Support Discord Server](https://discord.gg/fVuRsby)\n[Special thanks to telk](https://discord.gg/x248vBh) `)
.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
.setFooter(`TIP: Use 1 letter prefix, because 2 letter prefix or more can glitch commands like ${prefix}say or ${prefix}8ball !!`)
.setThumbnail(`https://cdn.discordapp.com/avatars/403514826241998859/b72c880cbe06de93ff6d27bd638cec93.png?width=999&height=999`)
.setColor(0x721487)
message.channel.sendEmbed(helpembed);
break;
case "servers":
var servers = new Discord.RichEmbed()
.setTitle("Aloid's Servers")
.setDescription(`**I am in ${bot.guilds.size} servers, with ${bot.users.size} users and guilds:\n**` + bot.guilds.map(g=>g.name).join(", "))
.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
.setColor(0x721487)
message.channel.sendEmbed(servers);
break;
case "say":
if(message.author.id == "395954014715510784") {
    var sayargs = message.content.substring(4).split(" ");
                    const saymsg = sayargs.join(" ");
                    message.delete().catch(O_o=>{});
            message.channel.sendMessage(saymsg);
    } else {
 
        message.channel.send(":x: **Bot Owner Only**");
    }
break;
case "mc":
if (args[1]) {
 var mcskin = new Discord.RichEmbed()
.setTitle(`Minecraft Information`)
.setDescription(`Welcome back ` + args[1] + `! Here is some information about you:`)
.addField(`Username:`, args[1], true)
.addField(`Skin:`, `https://minecraftskinstealer.com/skin.php?u=`+ args[1] +`&s=700`, true)
.addField(`Use this skin to your account:`, `[Click Me!](https://www.minecraft.net/profile/skin/remote?url=https://minecraft.net/skin/` + args[1] + `.png)`)
.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
.setThumbnail(`https://minotar.net/avatar/`+ args[1] + `/100.png`)
.setColor(0x721487)
message.channel.sendEmbed(mcskin);
} else {
message.reply("Please enter a nickname!");
}
break;
case "8ball":
if (args[1]) {
var balls = ["Nope", "No", "Nah", "Nuu!", "Never", "I think not", "Maybe no", "Yes", "Yas", "Always", "I think yes", "Maybe yes", "Maybe"];
var qargs = message.content.substring(6).split(" ");
const qumsg = qargs.join(" ");
var balle = new Discord.RichEmbed()
.setTitle(`Aloid's 8ball`)
.setDescription(`Question: ` + qumsg + `\n\nAnswer: ` + balls[Math.floor(Math.random() * balls.length)])
.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
.setThumbnail(`https://emojipedia-us.s3.amazonaws.com/thumbs/120/apple/118/billiards_1f3b1.png`)
.setFooter(`Here is my answer to your question...`)
.setColor(0x721487)
message.channel.sendEmbed(balle);
} else {
    message.reply("Please write a question.");
}
break;
case "avatar":
let useri = message.mentions.users.first();
if (args[1]) {
    var ave = new Discord.RichEmbed()
    .setImage(useri.avatarURL)
    .setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
    .setColor(0x721487)
    message.channel.sendEmbed(ave);
} else {
    var spme = new Discord.RichEmbed()
    .setImage(message.author.avatarURL)
    .setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
    .setColor(0x721487)
    message.channel.sendEmbed(spme);
}
break;
case "meme":
message.reply("Aye matey, u want dank memz? Thatz gud place 4 u, pls check my creators **MEME** page: **http://memz.tk**");
break;
case "serverinfo":
var si = new Discord.RichEmbed()
.setTitle(`:desktop: Information about ${message.guild.name}`)
.setDescription(`:white_small_square: ID: **${message.guild.id}**\n:white_small_square: Owner: **${message.guild.owner}**\n:white_small_square: Location: **${message.guild.region}**\n:white_small_square: Creation: **${message.guild.createdAt}**\n:white_small_square: Users: **${message.guild.members.size}**\n:white_small_square: Channels: **${message.guild.channels.size}**`)
.setThumbnail(message.guild.iconURL)
.setFooter(`${message.guild.name} information`)
.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
.setColor(0x721487)
message.channel.sendEmbed(si);
break;
case "anime":
var aembedo = new Discord.RichEmbed()
.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
.setTitle(`Anime List in Aloid`)
.setDescription(`[Sword art online I | Dub](http://kissanime.ru/Anime/Sword-Art-Online-Dub)\n[Sword art online I | Sub](http://kissanime.ru/Anime/Sword-Art-Online)\n[Sword art online II | Dub](http://kissanime.ru/Anime/Sword-Art-Online-II-Dub)\n[Sword art online II | Sub](http://kissanime.ru/Anime/Sword-Art-Online-II)\n[Tokyo ghoul | Dub](http://kissanime.ru/Anime/Tokyo-Ghoul-Dub)\n[Tokyo ghoul](http://kissanime.ru/Anime/Tokyo-Ghoul)\n[Tokyo ghoul Root A | Dub](http://kissanime.ru/Anime/Tokyo-Ghoul-Root-A-Dub)\n[Tokyo ghoul Root A | Sub](http://kissanime.ru/Anime/Tokyo-Ghoul-A)\n[Another | Dub](http://kissanime.ru/Anime/Another-Dub)\n[Another | Sub](http://kissanime.ru/Anime/Another)\n[Zero no Tsukaima | Dub](http://kissanime.ru/Anime/Zero-no-Tsukaima-Dub)\n[Zero no Tsukaima | Sub](http://kissanime.ru/Anime/Zero-no-Tsukaima)\n[Owari no Seraph](https://myanimelist.net/anime/26243/Owari_no_Seraph)\n[NO game NO life | Dub](http://kissanime.ru/Anime/No-Game-No-Life-Dub)\n[NO game NO life | Sub](http://kissanime.ru/Anime/No-Game-No-Life)\n[Corpse Party: Tortured Souls - Bougyakusareta Tamashii no Jukyou](http://kissanime.ru/Anime/Corpse-Party-Tortured-Souls-Bougyakusareta-Tamashii-no-Jukyou)\n[Nisekoi](http://kissanime.ru/Anime/Nisekoi)`)
.setColor(0x721487)
message.channel.sendEmbed(aembedo);
var aembed = new Discord.RichEmbed()
.setDescription(`[Charlotte | Dub](http://kissanime.ru/Anime/Charlotte-Dub)\n[Charlotte | Sub](http://kissanime.ru/Anime/Charlotte)\n**High school DXD soon!**\n[Boku no Hero Academia | Dub](http://kissanime.ru/Anime/Boku-no-Hero-Academia-Dub)\n[Boku no Hero Academia | Sub](http://kissanime.ru/Anime/Boku-no-Hero-Academia-My-Hero-Academia)\n[Boku no Hero Academia 2nd Season | Dub](http://kissanime.ru/Anime/Boku-no-Hero-Academia-2nd-Season-Dub)\n[Boku no Hero Academia 2nd Season | Sub](http://kissanime.ru/Anime/Boku-no-Hero-Academia-2nd-Season)\n[Ousama Game | Dub](http://kissanime.ru/Anime/Ousama-Game-Dub)\n[Ousama Game | Sub](http://kissanime.ru/Anime/Ousama-Game-The-Animation)\n[Sakurasou no Pet na Kanojo](http://kissanime.ru/Anime/Sakurasou-no-Pet-na-Kanojo)\n[Mirai Nikki TV | Dub](http://kissanime.ru/Anime/Mirai-Nikki-TV-Dub)\n[Mirai Nikki TV | Sub](http://kissanime.ru/Anime/Mirai-Nikki-TV)\n[Shiki | Dub](http://kissanime.ru/Anime/Shiki-Dub)\n[Shiki | Sub](http://kissanime.ru/Anime/Shiki)\n[Death Note | Dub](http://kissanime.ru/Anime/Death-Note-Dub)\n[DeathNote | Sub](http://kissanime.ru/Anime/Death-Note)\n[Kiseijuu: Sei no Kakuritsu | Dub](http://kissanime.ru/Anime/Kiseijuu-Sei-no-Kakuritsu-Dub)\n[Kiseijuu: Sei no Kakuritsu | Sub](http://kissanime.ru/Anime/Kiseijuu-Sei-no-Kakuritsu)`)
.setFooter(`Search anime by typing ${prefix}searchanime`)
.setColor(0x721487)
message.channel.sendEmbed(aembed);
break;
case "searchanime":
if (args[1]) {
    message.reply(`http://kissanime.ru/Anime/` + args[1]);
} else {
    message.reply(`How to use: \n${prefix}searchanime [anime] **NOTICE: DONT USE SPACES, USE - !!**`);
}
break;
case "clear":
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
        message.reply("You can only delete 3 messages or more.");
    }
} else {
    message.reply("Please type number of messages to delete.");
}
break;
case "weather":
        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) {
            if (err) message.channel.send(err);
            if (result.length === 0) {
                message.channel.send(':x: **Please enter a valid location.** :x:')
                return;
            }
            var current = result[0].current;
            var location = result[0].location;
            const embed = new Discord.RichEmbed()
                .setDescription(`Weather For ${current.observationpoint} | **${current.skytext}**`)
                .setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
                .setThumbnail(current.imageUrl)
                .setColor(0x721487)
                .addField('Timezone',`UTC${location.timezone}`, true)
                .addField('Degree Type',location.degreetype, true)
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)
                message.channel.send({embed});
        });
        break;
 
        case "kick":
    let modRoles = message.guild.roles.find("name", "BTMod");
        if (args[1]) {
    if(message.member.roles.has(modRoles.id)) {
      let kickMember = message.guild.member(message.mentions.users.first());
      message.guild.member(kickMember).kick();
      message.channel.sendMessage(":arrow_right: The Member Has Been Kicked From The Server! :point_left:");
      message.mentions.users.first().send(`:x: **You have been KICKED on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
    } else {
      return message.reply(":x: **You dont have permissions to do that!** :x:");
    }
    } else {
    return message.reply(`:x: **Please mention a user** :x:`);
    }
break;
case "ban":
    let modRolesss = message.guild.roles.find("name", "BTMod");
        if (args[1]) {
    if(message.member.roles.has(modRolesss.id)) {
      let banMember = message.guild.member(message.mentions.users.first());
      message.guild.member(banMember).ban();
      message.channel.sendMessage(":arrow_right: The Member Has Been **PERM BANNED** From The Server! :point_left");
      message.mentions.users.first().send(`:x: **You have been PERM BANNED! on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
    } else {
      return message.reply(":x: **You dont have permissions to do that!** :x:");
    }
    } else {
    return message.reply(`:x: **Please mention a user** :x:`);
    }
break;
case "mute":
let modRolez = message.guild.roles.find("name", "BTMod");
if (args[1]) {
if(message.member.roles.has(modRolez.id)) {
    if (message.guild.roles.find("name", "aloid-mute"))  {
    message.guild.createRole({
        name: "aloid-mute",
        color: 0x000000,
        permissions: [readMessageHistory, readMessages]
    }).then(function(role) {
        let muteMember = message.guild.member(message.mentions.users.first());
        muteMember.addRole(role);
        message.channel.sendMessage(":arrow_right: The Member Has Been Muted! :point_left:");
      message.mentions.users.first().send(`:x: **You have been MUTED on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
    });
} else {
    let smuteMember = message.guild.member(message.mentions.users.first());
    smuteMember.addRole(unMember.guild.roles.find("name", "aloid-mute"));
    message.channel.sendMessage(":arrow_right: The Member Has Been Muted! :point_left:");
    message.mentions.users.first().send(`:x: **You have been MUTED on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
}
}
else {
  return message.reply(":x: **You dont have permissions to do that!** :x:");
}
} else {
return message.reply(`:x: **Please mention a user** :x:`);
}
break;
case "unmute":
let modRolezz = message.guild.roles.find("name", "BTMod");
if (args[1]) {
if(message.member.roles.has(modRolezz.id)) {
let unMember = message.guild.member(message.mentions.users.first());
unMember.removeRole(unMember.guild.roles.find("name", "Muted"));
message.channel.sendMessage(":arrow_right: :tada: The Member Has Been Unmuted! :tada: :point_left:");
message.mentions.users.first().send(`:tada: **You have been unmuted on ${message.guild.name}! :wink: Please contact <@${message.author.id}> for more information!** :tada:`)
} else {
  return message.reply(":x: **You dont have permissions to do that!** :x:");
}
} else {
return message.reply(`:x: **Please mention a user** :x:`);
}
break;
case "warn":
let modRoless = message.guild.roles.find("name", "BTMod");
if (args[1]) {
if(message.member.roles.has(modRoless.id)) {
let wMember = message.guild.member(message.mentions.users.first());
message.channel.sendMessage(":arrow_right: The Member Has Been Warned! :point_left:");
message.mentions.users.first().send(`:x: **You have been warned on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
}
else
{
  return message.reply(":x: **You dont have permissions to do that!** :x:");
  } } else {
      return message.reply(`:x: **Please mention a user** :x:`);
  }
break;
case "unwarn":
let modRolex = message.guild.roles.find("name", "BTMod");
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
case "addmod":
if(message.guild.member(message.author).hasPermission(`ADMINISTRATOR`)) {
let bmod = message.guild.member(message.mentions.users.first());
if (args[1]) {
  if (message.guild.roles.find("name", "BTMod"))  {
      bmod.addRole(bmod.guild.roles.find("name", "BTMod"));
    message.channel.sendMessage(`:white_check_mark: <@${bmod.id}> has been added to ModList!`);
  } else  {
message.guild.createRole({
    name: "BTMod",
    color: 0x0077ff,
    permissions: [readMessages, sendMessages, readMessageHistory]
}).then(function(role) {
    bmod.addRole(role);
    message.channel.sendMessage(`:white_check_mark: <@${bmod.id}> has been added to ModList!`);
});
}
} else {
    return message.reply(`Please mention a user.`);
}
} else {
return message.channel.sendMessage(`:x: <@${message.author.id}> You need **ADMINISTRATOR** permissions to do that!`)
}
break;
case "delmod":
if(message.guild.member(message.author).hasPermission(`ADMINISTRATOR`)) {
let bs = message.guild.member(message.mentions.users.first());
if (args[1]) {
    bs.removeRole(bs.guild.roles.find("name", "BTMod"));
    message.channel.sendMessage(`:white_check_mark: <@${bs.id}> has been removed from the ModList!`);
} else {
    message.reply(`Please mention a user.`);
}
} else {
return message.channel.sendMessage(`:x: <@${message.author.id}> You need **ADMINISTRATOR** permissions to do that!`)
}
break;
 
  }
});
 
 
bot.login(process.env.BOT_TOKEN);
