module.exports = {
  name: "dolar-ver",
  aliases: "paraver",
  code: `
  $setUserVar[para;$sub[$getUserVar[para;$authorID];$noMentionMessage[1]];$authorID] 
$setUserVar[para;$sum[$getUserVar[para;$mentioned[1]];$noMentionMessage[1]];$mentioned[1]]
  $description[1;<@!$mentioned[1]> kullanıcısına $noMentionMessage miktarda dolar gönderildi.]
  $footer[1;Komutu Kullanan: $nickname[$authorID]]
  $onlyIf[$getUserVar[para;$authorID]>=$noMentionMessage;Yeterli miktarda dolar yok.]
  $onlyIf[$checkContains[$message;-]!=true; ]
  $argsCheck[2;Komutun kullanım şekli \`?dolar-ver <@kullanıcı> <Miktar>\`]
    $color[1;RANDOM]

  `
}