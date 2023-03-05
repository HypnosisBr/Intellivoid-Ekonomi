module.exports = {
  name: "altın-ver",
  code: `
  $setUserVar[altın;$sub[$getUserVar[altın;$authorID];$noMentionMessage[1]];$authorID] 
$setUserVar[altın;$sum[$getUserVar[altın;$mentioned[1]];$noMentionMessage[1]];$mentioned[1]]
  $description[1;<@!$mentioned[1]> kullanıcısına $noMentionMessage miktarda altın gönderildi.]
  $footer[1;Komutu Kullanan: $nickname[$authorID]]
  $onlyIf[$getUserVar[altın;$authorID]>=$noMentionMessage;Yeterli miktarda altın yok.]
  $argsCheck[2;Komutun kullanım şekli \`?altın-ver <@kullanıcı> <Miktar>\`]
    $color[1;RANDOM]

  `
}