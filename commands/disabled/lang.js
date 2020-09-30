const Discord = require("discord.js");
const fs = require("fs");

const langfile= require ("../storage/text/language.json")

const devs = ["437999876828037158"];

let lan;

module.exports.run = async (client, message, args, prefix, language) => {

    if(language == "eng") {
        lan=langfile.english.test
    }
    if(language == "ger") {
        lan=langfile.german.test
    }
    if(language == "fr") {
        lan=langfile.french.test
    }


    if (!~devs.indexOf(message.author.id)) {
        message.reply("you are not a Dev!")
        message.delete()
        return;
    }  

    message.reply(lan.text)

}