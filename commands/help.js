const Discord = require("discord.js");

var enable_pages=true
var locked=false
var debug=false

const devs = ["437999876828037158"];
//                  Hammer1279

const langfile= require ("../storage/translation/language.json")

let lan;

module.exports.run = async (client, message, args, prefix, language, beta, permlvl) => {

    if(language == "eng") {
        lan=langfile.english.help
    }
    if(language == "ger") {
        lan=langfile.german.help
    }
    if(language == "fr") {
        lan=langfile.french.help
    }

if (locked) {
    if (!~devs.indexOf(message.author.id)) {
        message.reply("this command isn't aviable for you yet!")
        message.delete()
        return;
    }    
}

    const pic=client.user.displayAvatarURL;
    const hpic="https://cdn.discordapp.com/attachments/546008503299604508/564516393475899402/hammernew.png"
    const name=client.user.username

    let embed = new Discord.RichEmbed()
    .setTitle("🛂Kappa Help:")
    .setURL("https://www.hammertechnik.ga/")
    .setThumbnail(pic)
    .setDescription(`${lan.main.rb} ${message.author.tag}`)
    .setColor('#00eedd')
    .addField(`${lan.main.page}`, `
Utility
Moderation
Fun
Info
    `)
    .addField(`🤔${lan.main.howpage}`, `
${lan.main.howtopage} \`\`${prefix}help [catergory]\`\`
    `)
    .setFooter(`${name} ${lan.main.creator}`, pic)
    .setTimestamp()


    let devembed = new Discord.RichEmbed()
    .setTitle("🛂Kappa Help:")
    .setURL("https://www.hammertechnik.ga/")
    .setThumbnail(pic)
    .setDescription(`${lan.main.rb} ${message.author.tag}\nDone: ✅\nCanceled: ❌`)
    //.setDescription(`Debug: ${debug}`)
    .setColor('#00eedd')
    .addField("🐛Debug", debug)
    .addField("📄{pages}", `
Utility✅
Moderation✅
Fun✅
Misc✅
TTT (for kappa...)❌
Info✅
HT❌
Perms
    `)
    .addField("🤔{howto-page}", `
    {how to open pages} - \`\`${prefix}help [page]\`\`
    `)
    .addField("💻Commands:", `
ban (mod)          [Moderation]✅
botinfo (public)   [Info]✅
bug (public)       [Utility]✅
credits (public)   [Info]✅
dm (M.Messages)    [Misc.]✅
eval (Hammer)
game (public)      [TTT]❌
github (ht only)   [HT]❌
gleave (Hammer)
hammertechnik      [HT]❌
help (public)      [Info]✅
invite (public)    [Misc.]✅
join (Hammer)
kick (mod)         [Moderation]✅
kill (Hammer)
lang (admin[args]) [Utility]✅
leave (Hammer)
meme (public)      [Fun]✅
mute (mod)         [Moderation]✅
muterole (admin)   [Utility]✅
news (bidoof only)
note (dev's only)
ping (public)      [Info]✅
pong (public)      [Info]✅
purge (mod)        [Moderation]✅
rank (public)      [Info]
rankcolor (public)
rl (Hammer)
say (M.Messages)   [Misc.]✅
serverinfo (public)[Info]✅
setsuggest (admin[args]) [Utility]✅
setwelcome (admin[args]) [Utility]✅
shutdown (Hammer)
spacer (admin)     [Utility]✅
stats (public)     [Info]✅
suggest (public)   [Utility]✅
swat (Hammer)
tempmute (mod)     [Moderation]✅
unmute (mod) {bugged!}[Moderation]✅
webhook (Hammer)
  `, true)
    .setFooter(`${name} ${lan.main.creator}`, pic)
    //.setTimestamp("4.10.2019 0:47")
    .setTimestamp()

if(args==0) {
    if(!debug){
    message.channel.send(embed)
    } else {
    message.channel.send(devembed)
    }
    message.delete()
    return;
    }
    let moderator = new Discord.RichEmbed()
    .setTitle("🔨Help - Moderator:")
    .setThumbnail(pic)
    .setDescription(`${lan.main.rb} ${message.author.tag}`)
    //.setDescription(`Debug: ${debug}`)
    .setColor('#00eedd')
    .addField("Commands:", `
${prefix}purge [2-100] - ${lan.moderator.purge}\n
${prefix}tempmute [member] [time] - ${lan.moderator.tempmute}\n
${prefix}mute [member] - ${lan.moderator.mute}\n
${prefix}unmute [member] - ${lan.moderator.unmute}\n
${prefix}kick [member] {reason} - ${lan.moderator.kick}\n
${prefix}ban [member] {reason} - ${lan.moderator.ban}\n
    `, true)
    .setFooter(`${name} ${lan.main.creator}`, pic)
    .setTimestamp()

    let test = new Discord.RichEmbed()
    .setTitle("Help - [TOPIC]:")
    .setThumbnail(pic)
    .setDescription(`${lan.main.rb} ${message.author.tag}`)
    .setColor('#00eedd')
    .addField(lan.main.command, `
${prefix}command 1
${prefix}command 2
${prefix}command 3
    `)
    .setFooter(`${name} ${lan.main.creator}`, hpic)
    .setTimestamp()

    let infos = new Discord.RichEmbed()
    .setTitle("ℹHelp - Info:")
    .setThumbnail(pic)
    .setDescription(`${lan.main.rb} ${message.author.tag}`)
    //.setDescription(`Debug: ${debug}`)
    .setColor('#00eedd')
    .addField(lan.main.command, `
${prefix}help - ${lan.info.help}\n
${prefix}credits - ${lan.info.credits}\n
${prefix}version - ${lan.info.version}\n
${prefix}rank - ${lan.info.rank}\n
${prefix}stats - ${lan.info.stats}\n
${prefix}ping - ${lan.info.ping}\n
${prefix}pong - ${lan.info.pong}\n
${prefix}invite - ${lan.misc.invite}\n
${prefix}botinfo - ${lan.info.botinfo}\n
${prefix}serverinfo - ${lan.info.serverinfo}\n
    `)
    .setFooter(`${name} ${lan.main.creator}`, hpic)
    .setTimestamp()

    let utility = new Discord.RichEmbed()
    .setTitle("🛠Help - Utility:")
    .setThumbnail(pic)
    .setDescription(`${lan.main.rb} ${message.author.tag}`)
    //.setDescription(`Debug: ${debug}`)
    .setColor('#00eedd')
    .addField(lan.main.command, `
${prefix}rankcolor - ${lan.utility.rankcolor}\n
${prefix}say - ${lan.misc.say}\n
${prefix}dm - ${lan.misc.dm}\n
${prefix}bug - ${lan.utility.bug}\n
${prefix}lang - ${lan.utility.lang}\n
${prefix}muterole <create> - ${lan.utility.muterole}\n
${prefix}setsuggest - ${lan.utility.setsuggest}\n
${prefix}setwelcome - ${lan.utility.setwelcome}\n
${prefix}spacer - ${lan.utility.spacer}\n
${prefix}suggest - ${lan.utility.suggest}\n
    `)
    .setFooter(`${name} ${lan.main.creator}`, hpic)
    .setTimestamp()

    let misc = new Discord.RichEmbed()
    .setTitle("💻Help - Misc.:")
    .setThumbnail(pic)
    .setDescription(`${lan.main.rb} ${message.author.tag}`)
    //.setDescription(`Debug: ${debug}`)
    .setColor('#00eedd')
    .addField(lan.main.command, `
${prefix}
    `)
    .setFooter(`${name} ${lan.main.creator}`, hpic)
    .setTimestamp()

    let fun = new Discord.RichEmbed()
    .setTitle("😂Help - Fun:")
    .setThumbnail(pic)
    .setDescription(`${lan.main.rb} ${message.author.tag}`)
    //.setDescription(`Debug: ${debug}`)
    .setColor('#00eedd')
    .addField(lan.main.command, `
${prefix}meme - ${lan.fun.meme}\n
    `)
    .setFooter(`${name} ${lan.main.creator}`, hpic)
    .setTimestamp()

    let secret = new Discord.RichEmbed()
    .setTitle("<:dev:573289459953696779>Help - DEVTEAM ONLY:")
    .setThumbnail(pic)
    .setDescription(`${lan.main.rb} ${message.author.tag}`)
    //.setDescription(`Debug: ${debug}`)
    .setColor('#00eedd')
    .addField(lan.main.command, `
${prefix}note <delete [note]; all; show [note] > - Note System\n
    `)
    .setFooter(`${name} ${lan.main.creator}`, hpic)
    .setTimestamp()

if (enable_pages) {
switch (args[0].toLowerCase()) {

    case "command":
    if (debug) {
    try {
        let cmd = args[1].toLowerCase()
        let commandFile = require(`./${cmd}.js`);
        var file;
        if (commandFile.help) {
            file=commandFile.help
        } else {
            file={
                name: cmd,
                usage: "undefined"
            }
        }

        const embed = new Discord.RichEmbed()
        .addField(`${cmd} Help:`, `Name: ${file.name}\nUsage: ${file.usage}`)

        message.channel.send({embed})
        message.delete()
    } catch (e) {
        console.log(e)
    }
    break;
    } else {
        message.delete()
        break;
    }


    case "moderation":
    message.channel.send(moderator)
    message.delete()
    break;

    case "info":
    message.channel.send(infos)
    message.delete()
    break;

    //case "test":
    message.channel.send(test);
    message.delete();
    break;

    case "utility":
    message.channel.send(utility);
    message.delete();
    break;

    //case "misc":
    message.channel.send(misc);
    message.delete();
    break;

    case "fun":
    message.channel.send(fun);
    message.delete();
    break;

    //case "perms":
    message.channel.send(perms);
    message.delete();
    break;

    case "date":
    message.reply("Current time and date:")
    setTimeout(function(){ message.channel.send(`\`\`${Date().slice(0,24)}\`\``);; }, 1000);
    message.delete();
    break;

    case "dev":
        if (permlvl < 4) {
            message.reply("doesn't look like you are from the Dev Team!")
            message.delete()
            break;
        } 
        message.channel.send(secret);
        message.delete();
        break;

    case "all":
    if (permlvl < 5) {
        message.reply("doesn't look like you are a Kappa Dev!")
        message.delete()
        break;
    } 
    message.channel.send(devembed);
    message.delete();
    break;

    default:
    message.reply(`*${args}* is not in the Help!`)
    message.delete()
}
} else {
if (debug){
message.channel.send(devembed)
}
message.delete()
}
}