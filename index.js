const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});










const keepAlive = require('./server.js');
keepAlive();



client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1204154123025387573')//
    .setType('PLAYING')//
    .setURL('https://replit.com/@waterhere') //
    .setState('NodeJS <3')//
    .setName('•  Tej  ⛧')//
    .setDetails('tejv')//
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/881571946582667339/1221208242881826876/00950f02ee8d931150d2f97b7276e1e8.gif?ex=6611bdce&is=65ff48ce&hm=502328deaeae23fc13ae88c4a8518defd755f4813a55d09aaaa79d39421d790d&') // Large Image 
    .setAssetsLargeText('Cyber Tej ×') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1211678342282092576/1221132702351229068/0f084f95f8c8c385e9e07badaebac3d7.jpg?ex=66117773&is=65ff0273&hm=fbbfcf298ccf2c86aff13ce46f8de51f95b32330832ccaea64f2dfe2dd09e3a0&') // Small image
    .setAssetsSmallText('Real Id - tejv') //Text when you hover the Small image
    .addButton('Tej ‡ Tejv#0000 ','https://cdn.discordapp.com/attachments/1205575691697913926/1205977069792526347/Vmake-1706947003795-ezgif.com-video-to-gif-converter.gif?ex=65da54ab&is=65c7dfab&hm=1da1af9cedd9d3658f7bc89446b610f778d00a9ff363e4e4b23797a7ed448a60&')// button 1
.addButton('Real ID !','https://cdn.discordapp.com/attachments/1205575691697913926/1205977069792526347/Vmake-1706947003795-ezgif.com-video-to-gif-converter.gif?ex=65da54ab&is=65c7dfab&hm=1da1af9cedd9d3658f7bc89446b610f778d00a9ff363e4e4b23797a7ed448a60&');// button 2

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
 // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
