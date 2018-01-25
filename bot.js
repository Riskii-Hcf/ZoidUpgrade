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
let joinleaves = member.guild.channels.find("name","general");
if(!joinleaves) return;
joinleaves.sendMessage(member.toString() + " welcome to the server!");
 
if(!joinleaves) return;
 
});
 
bot.on("guildMemberRemove", function(member) {
 
let joinleaves = member.guild.channels.find("name","general");
 
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
            message.channel.sendMessage(`<@${message.author.id}> -> **Commands/Help List** has been sent to your PM!`)
            var embedt = new Discord.RichEmbed()
            .setTitle("Music Commands")
            .setDescription(':robot: Here are music commands you can use: :robot:')
            .setThumbnail ('data:image/jpeg;base64,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')
            .addField(`=help `, `Command List`)
            .addField(`=8ball`, `:8ball:`)
            .addField(`=coinflip`, `Does A Random Result Of CoinFlip In Virtual`)
            .addField(`$$mskipto [number of song in queue]`, `Skips the queue to song what you wrote.`)
            .addField(`$$mpause`, `Pauses current song.`)
            .addField(`$$mforceskip`, `Force skips the song`)
            .addField(`$$mremove [ALL/Position]`, `Removes the song or other.`)
            .addField(`$mnowplaying`, `You can now see whats playing.`)
            .addField(`$mqueue`, `Queue of the songs in your server.`)
            .addField(`$$mshuffle`, `Shuffles songs you have added.`)
            .setFooter("Made by 123silly#5224 | LightBlue 3.0v")
            .setColor(0x1ab517)
            message.author.sendEmbed(embedt)
           var embedth = new Discord.RichEmbed()
           .setTitle("Fun Commands")
           .setDescription(":smiley: Some Fun Commands :smiley:")
           .addField(`$$dankmemes`, `Dank memes generator...`)
           .addField(`$$kill [mention]`, `Kills a user you mentioned.`)
           .addField(`$$afk`, `Makes you afk so no one disturbs you!`)
           .addField(`$$unafk`, `Makes You No Longer afk.`)
           .addField(`$$cutecat`, `Sends a cute cat.`)
           .addField(`$$hello`, `Says hello to LightBlue / Responses: $$good $$bad $$sad`)
           .addField(`$$user`, `Tells some information about you.`)
           .addField(`$$pm [text]`, `PMs you the text you wrote | **FEATURE GLITCHED OUT!!**`)
           .addField(`$$8ball [Question]`, `You ask a question and LightBlue randomly answers!`)
           .setFooter("Made by 123silly#5224 | LightBlue 3.0v")
           .setColor(0xf44141)
           message.author.sendEmbed(embedth)
           var embedf = new Discord.RichEmbed()
           .setTitle(`Moderation Commands`)
           .setDescription(`:hammer: Kicks, Bans etc. :hammer:`)
           .addField(`$$kick [mention]`, `Kicks a member. | **REASONS OF KICKS NOT ADDED**`)
           .addField(`$$ban [mention]`, `Bans a member. | **REASONS OF BANS NOT ADDED**`)
           .addField(`$$joinhelp`, `Instructions how to set up autorole and join messages!`)
           .setFooter("Made by 123silly#5224 | LightBlue 3.0v")
           .setColor(0x29a7d8)
           message.author.sendEmbed(embedf)
           var embedfiv = new Discord.RichEmbed()
           .setTitle(`Pranks!`)
           .setDescription(`:rofl: With these commands you can prank your friends! :rofl:`)
           .addField(`$$grass`,`Plays Spongebob mario remix in the voice chat you are!`)
           .addField(`$$chilledwindows`, `Plays a windows error sounds music!`)
           .addField(`$$airhorn`, `Plays little eisteins airhorn remix!`)
           .addField(`$$brainpower`, `Plays whole song of Brain Power!`)
           .addField(`$$fakeping`, `Sends a discord notification`)
           .addField(`$$win`, `Plays a winner epic song!`)
           .setFooter("Made by 123silly#5224 | LightBlue 3.0v")
           .setColor(0xad0505)
          message.author.sendEmbed(embedfiv)
           var embedfi = new Discord.RichEmbed()
           .setTitle(`Secret Commands`)
           .setDescription(`:cloud_lightning: **SECRET COMMANDS**\nThere are some secret commands you need to guess! Good Luck! :cloud_lightning:`)
           .setFooter("Made by 123silly#5224 | LightBlue 3.0v")
           .setColor(0x42008e)
           message.author.sendEmbed(embedfi)
           message.author.sendMessage(`You can invite me here: http://macius.bts.net.pl/LightBlue/invite`);
           break;

case "ping":
message.reply(`Pong! ${Math.round(bot.ping)}ms`);
break;

case "anime":
var aembedo = new Discord.RichEmbed()
.setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL)
.setTitle(`Anime List in Latenci`)
.setDescription(`[Sword art online I | Dub](http://kissanime.ru/Anime/Sword-Art-Online-Dub)\n[Sword art online I | Sub](http://kissanime.ru/Anime/Sword-Art-Online)\n[Sword art online II | Dub](http://kissanime.ru/Anime/Sword-Art-Online-II-Dub)\n[Sword art online II | Sub](http://kissanime.ru/Anime/Sword-Art-Online-II)\n[Tokyo ghoul | Dub](http://kissanime.ru/Anime/Tokyo-Ghoul-Dub)\n[Tokyo ghoul](http://kissanime.ru/Anime/Tokyo-Ghoul)\n[Tokyo ghoul Root A | Dub](http://kissanime.ru/Anime/Tokyo-Ghoul-Root-A-Dub)\n[Tokyo ghoul Root A | Sub](http://kissanime.ru/Anime/Tokyo-Ghoul-A)\n[Another | Dub](http://kissanime.ru/Anime/Another-Dub)\n[Another | Sub](http://kissanime.ru/Anime/Another)\n[Zero no Tsukaima | Dub](http://kissanime.ru/Anime/Zero-no-Tsukaima-Dub)\n[Zero no Tsukaima | Sub](http://kissanime.ru/Anime/Zero-no-Tsukaima)\n[Owari no Seraph](https://myanimelist.net/anime/26243/Owari_no_Seraph)\n[NO game NO life | Dub](http://kissanime.ru/Anime/No-Game-No-Life-Dub)\n[NO game NO life | Sub](http://kissanime.ru/Anime/No-Game-No-Life)\n[Corpse Party: Tortured Souls - Bougyakusareta Tamashii no Jukyou](http://kissanime.ru/Anime/Corpse-Party-Tortured-Souls-Bougyakusareta-Tamashii-no-Jukyou)\n[Nisekoi](http://kissanime.ru/Anime/Nisekoi)`)
.setColor(0x721487)
message.channel.sendEmbed(aembedo);
var aembed = new Discord.RichEmbed()
.setDescription(`[Charlotte | Dub](http://kissanime.ru/Anime/Charlotte-Dub)\n[Charlotte | Sub](http://kissanime.ru/Anime/Charlotte)\n**High school DXD soon!**\n[Boku no Hero Academia | Dub](http://kissanime.ru/Anime/Boku-no-Hero-Academia-Dub)\n[Boku no Hero Academia | Sub](http://kissanime.ru/Anime/Boku-no-Hero-Academia-My-Hero-Academia)\n[Boku no Hero Academia 2nd Season | Dub](http://kissanime.ru/Anime/Boku-no-Hero-Academia-2nd-Season-Dub)\n[Boku no Hero Academia 2nd Season | Sub](http://kissanime.ru/Anime/Boku-no-Hero-Academia-2nd-Season)\n[Ousama Game | Dub](http://kissanime.ru/Anime/Ousama-Game-Dub)\n[Ousama Game | Sub](http://kissanime.ru/Anime/Ousama-Game-The-Animation)\n[Sakurasou no Pet na Kanojo](http://kissanime.ru/Anime/Sakurasou-no-Pet-na-Kanojo)\n[Mirai Nikki TV | Dub](http://kissanime.ru/Anime/Mirai-Nikki-TV-Dub)\n[Mirai Nikki TV | Sub](http://kissanime.ru/Anime/Mirai-Nikki-TV)\n[Shiki | Dub](http://kissanime.ru/Anime/Shiki-Dub)\n[Shiki | Sub](http://kissanime.ru/Anime/Shiki)\n[Death Note | Dub](http://kissanime.ru/Anime/Death-Note-Dub)\n[DeathNote | Sub](http://kissanime.ru/Anime/Death-Note)\n[Kiseijuu: Sei no Kakuritsu | Dub](http://kissanime.ru/Anime/Kiseijuu-Sei-no-Kakuritsu-Dub)\n[Kiseijuu: Sei no Kakuritsu | Sub](http://kissanime.ru/Anime/Kiseijuu-Sei-no-Kakuritsu)`)
.setFooter(`Search anime by typing ${prefix}searchanime`)
.setColor(0x721487)
message.channel.sendEmbed(aembed);
break;
case "animesearch":
if (args[1]) {
    message.reply(`www.animepower.net/` + args[1]);
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
		
case "stats":
var statsembed = new Discord.RichEmbed()
.setTitle(`Latenci Status`)
.setDescription(`Status:`, true)
.addField(`Up Time:`, parseTime(bot.uptime), true)
.addField(`Servers: `, `${bot.guilds.array().length}`, true)
.addField(`Members: `, `${bot.users.size}`, true)
.addField(`Channels: `, `${bot.channels.size}`, true)
.addField(`Status: `, `ONLINE`, true)
.setFooter(`Made by Telk#6039 and 123silly#5224`)
.setColor(hexcols[~~(Math.random() * hexcols.length)]);
message.channel.sendEmbed(statsembed);
break;
 
 
 
 
 
}
});
 
 
 
 
 
 
bot.login(process.env.BOT_TOKEN);
