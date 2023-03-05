const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env.token, //Discord Bot Token
prefix: "?", //Discord Bot Prefix
intents: ["GUILDS", "GUILD_MESSAGES"] //Discord Intents
})



bot.onMessage()


//Variableler
bot.variables({
  para: "0",
  altın: "0",
  altınfiyat: "300"
})


//Ping Komutu
bot.command({
name: "ping",
code: `Pong! \`$ping\`ms`
})


//Log Kısmı
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

//Komutlar Klasörü
const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 


//Oynuyor Kısmı
bot.status({
  text: `The Dark Side Ekonomi`,
  type: "PLAYING",
  time: 12
})

