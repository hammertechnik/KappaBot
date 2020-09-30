// @ts-check

const Discord = require('discord.js')
const fs = require('fs')
// @ts-ignore
const dl = require('discord-leveling')
// @ts-ignore
const exectMath = require('exact-math')
const client = new Discord.Client();

// @ts-ignore
const config = require('./storage/config.json');

const talkedRecently = new Set();

 /debug tools/
const beta=true
const logging=false
const console_mode=false

//const prefix = '!';

client.on('ready', async() =>{
  if (!beta){
console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`)
  } else {
console.log(`Bot started in Beta Mode: ${client.guilds.size} Guilds, ${client.channels.size} Channels and with ${client.users.size} Users!`)
  }

  if (!beta) {
    client.user.setActivity('HammerMusic', { url: 'https://www.twitch.tv/hammer1279', type: 'LISTENING' },);
    //client.user.setGame('with depression', 'https://www.twitch.tv/monstercat%27');
    client.user.setStatus('dnd')
  } else {
    client.user.setGame('maintanance mode');
    client.user.setStatus('idle')
  }

});

client.on('message', async message => {
if(!message.guild || message.author.bot) return;

  let prefixes = JSON.parse(fs.readFileSync("./storage/prefixes.json", "utf8"));

  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;

  let channels = JSON.parse(fs.readFileSync("./storage/channels.json", "utf8",));

  let suggestchannel;
  let welcomechannel;
  if(channels[message.guild.id]) {
  suggestchannel = channels[message.guild.id].suggestchannel;
  welcomechannel = channels[message.guild.id].welcomechannel;
  } else {
  let syschannel = message.guild.systemChannel.id
  suggestchannel = syschannel
  welcomechannel = syschannel
  //message.guild.owner.send(`Hello, it seems like you are the owner of ${message.guild.name}?\nYou still need to set up the basic Channels like the Welcomechannel or the Suggestchannel.\nThe problem is that otherwise Kappa will crash becouse we dont have something to work around that.\nThank you for Using KappaBot!\nGreetings, Hammer1279 - Leader of HammerTechnik-Development`)
  
  channels[message.guild.id] = {
    suggestchannel: syschannel,
    welcomechannel: syschannel
};

fs.writeFile("./storage/channels.json", JSON.stringify(channels, null, '\t'), (err) => {
  if(err) console.log(err)
})

}

  let lan = JSON.parse(fs.readFileSync("./storage/languages.json", "utf8"));

  if(!lan[message.guild.id]){
    lan[message.guild.id] = {
      language: "eng"
    };
  }

  let language = lan[message.guild.id].language;

                        /Permlvl System/
    let permlvl

    const devs = ["392502749876584448", "317279640354029569", "282430126237679626", "188762891137056769"]
    //                Lord Bidoof           TheFireDragon         WoofFighter               Hab

    const owner = ["437999876828037158"]

    if(!message.member.hasPermission("MANAGE_MESSAGES") || !message.member.hasPermission("ADMINISTRATOR") || !devs.includes(message.author.id) || !owner.includes(message.author.id)) {
      permlvl = 1
    }

    if(message.member.hasPermission("MANAGE_MESSAGES")) {
      permlvl = 2
    }

    if(message.member.hasPermission("ADMINISTRATOR")) {
      permlvl = 3
    }

    if(devs.includes(message.author.id)) {
      permlvl = 4
    }

    if(owner.includes(message.author.id)) {
      permlvl = 5
    }

    if(!message.guild || message.author.bot) return;

    let msg = message.content.toUpperCase();
       let args;
       let cmd;
       if(!console_mode){
       args = message.content.slice(prefix.length).trim().split(" ");
       cmd = args.shift().toLowerCase();
       } 
       let msgContent = message.content.toLowerCase().trim().split(" ");
       if(console_mode) {
       //cmd = message.content.toLowerCase().replace(args, "").trim().split(" ")
       cmd = msgContent.shift()
       // @ts-ignore
       args = msgContent.slice(cmd)
       }
       if(msgContent.includes('prefix'))message.channel.send(`My prefix on this server is **${prefix}**`)

    let mprefix = msg.slice(0, prefix.length)
    let uprefix = prefix.toUpperCase()

    //if (!msg.startsWith(prefix)) return;
    if(!logging) {
    if (!console_mode){
    if (mprefix !== uprefix) return;
    }}

    if(logging){
      let channels = JSON.parse(fs.readFileSync("./storage/channels.json", "utf8",));
      let welcomechannel = channels[message.guild.id].welcomechannel
    let embed = new Discord.RichEmbed()
    .setColor("#ff0000")
    .addField("Logging Infos:", `
args: "${args}"
cmd: "${cmd}"
msg: "${msg}"
mprefix: "${mprefix}"
prefix: "${uprefix}"
Console Mode: ${console_mode}
Triggered: ${mprefix == uprefix}
Suggestion Channel: <#${suggestchannel}>
Welcome Channel: <#${welcomechannel}>
Permlevel: \`\`${permlvl}\`\`
    `)
    message.channel.send(embed)
    let syschannel = message.guild.systemChannel
    //message.reply(syschannel)
    //syschannel.send("its here!")
    }
    if (message.author.bot) return;  

    try {
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(client, message, args, prefix, language, beta, permlvl, suggestchannel)
    } catch (e) {
    }
});
client.on('error', console.error);

//client.on("guildMemberAdd", member => {
//    client.channels.get('547321666498199552').send(`Bienvenue sur Beurk, <@${message.author.id}> ! Nous sommes Mulch et Baquet, pour vous servir. Avant de faire quoi que ce soit, nous vous conseillons d'aller lire <#547163007789039852>, c'est plein d'informations utiles !`);
//});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
if(!member.guild) return;

  let channels = JSON.parse(fs.readFileSync("./storage/channels.json", "utf8",));
  let welcomechannel = channels[member.guild.id].welcomechannel

  // @ts-ignore
  const langfile= require ("./storage/translation/language.json")
  let lan = JSON.parse(fs.readFileSync("./storage/languages.json", "utf8"));

  if(!lan[member.guild.id]){
    lan[member.guild.id] = {
      language: "eng"
    };
  }

  let language = lan[member.guild.id].language;
  let lang;
    if(language == "eng") {
        lang=langfile.english.welcome
    }
    if(language == "ger") {
        lang=langfile.german.welcome
    }
    if(language == "fr") {
        lang=langfile.french.welcome
    }

  let channel;
  //let langchannel=lang.channel
  // @ts-ignore
  let message=lang.message

  let syschannel = member.guild.systemChannel
    // Send the message to a designated channel on a server:

  //let haschannel = member.guild.channels.find(ch => ch.name === langchannel)
  //let langchannel=member.guild.channels.find(ch => ch.name === lang.channel)
  
if(logging) {
  console.log(welcomechannel)
}

    if(!welcomechannel) {
      channel=syschannel
    } else {
      channel=client.channels.get(welcomechannel)
    }

    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    // @ts-ignore
    channel.send(`${lang.message[0]} <@${member.user.id}> ${lang.message[1]}`);
  });


client.on("guildMemberRemove", async member => {
if(!member.guild) return;

  let channels = JSON.parse(fs.readFileSync("./storage/channels.json", "utf8",));
  let welcomechannel = channels[member.guild.id].welcomechannel

  // @ts-ignore
  const langfile= require ("./storage/translation/language.json")
  let lan = JSON.parse(fs.readFileSync("./storage/languages.json", "utf8"));

  if(!lan[member.guild.id]){
    lan[member.guild.id] = {
      language: "eng"
    };
  }

  let language = lan[member.guild.id].language;
  let lang;
    if(language == "eng") {
        lang=langfile.english.bye
    }
    if(language == "ger") {
        lang=langfile.german.bye
    }
    if(language == "fr") {
        lang=langfile.french.bye
    }

  let channel;
  //let langchannel=lang.channel
  //let message=lang.message

  let syschannel = member.guild.systemChannel
    // Send the message to a designated channel on a server:

  //let haschannel = member.guild.channels.find(ch => ch.name === langchannel)
  //let langchannel=member.guild.channels.find(ch => ch.name === lang.channel)
  
  if(logging) {
    console.log(welcomechannel)
  }

  if(!welcomechannel) {
    channel=syschannel
  } else {
    channel=client.channels.get(welcomechannel)
  }

if (!channel)return;

    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
// @ts-ignore
channel.send(`${lang.message[0]} **${member.user.tag}** ${lang.message[1]}`);

// await dl.Delete(member.author.id+member.guild.id)
});

client.on("guildMemberAdd", member => {
  if(!member.guild || member.user.bot) return;
  // @ts-ignore
  if(member.guild.id == 533060455527350283) {
  } else {return;}
  //member.guild.roles.find(role => role.id === 'id of role')
  const tester = member.guild.roles.find(role => role.id === '533065836102025219')
  const notification = member.guild.roles.find(role => role.id === '538874080254885899')
  const nonsfw = member.guild.roles.find(role => role.id === '533807023574351932')

  member.addRole(tester)
  member.addRole(notification)
  member.addRole(nonsfw)
});

client.on("message", async message => {

  if (talkedRecently.has(message.author.id)) {
    //message.channel.send("Wait 1 minute before getting typing this again. - " + message.author);
    return;
} else {

  if (!message.guild || message.author.bot) return;

  let ranrank = Math.floor(Math.random() * (25 - 15 + 1)) + 15;
  let member = (message.author.id+message.guild.id)
  var user = await dl.Fetch(member)
  dl.AddXp(member, ranrank)
  var xp = (user.xp)
  var lvl = (user.level)
  var nlvl = exectMath.floor(5 * (lvl * lvl) + 50 * lvl + 100)
  if(xp > nlvl) {
    await dl.AddLevel(member, 1)
    await dl.SetXp(member, 0)
  }

//Adds the user to the set so that they can't talk for a minute
  talkedRecently.add(message.author.id);
setTimeout(() => {
  // Removes the user from the set after a minute
  talkedRecently.delete(message.author.id);
}, 120000);
// 2min cooldown
}

});

if(!beta) {
client.login(config.token.main)
} else {
  client.login(config.token.beta)
}