module.exports = {
  name: "altın-sil",
  code: `
  $setUserVar[altın;$sub[$getUserVar[altın;$mentioned[1]];$noMentionMessage];$mentioned[1]]
  $description[1;<@!$mentioned[1]> kullanıcısının kasasından \`$noMentionMessage\` altın silindi.]
  $footer[1;$nickname[$authorID] kullandı.]
  $addTimestamp[1]
  $color[1;RANDOM]
  $onlyIf[$isNumber[$noMentionMessage]!=false;Lütfen silinecek miktarı rakam olarak giriniz.]
  $onlyIf[$isBot[$mentioned[1]]!=true;Bottan altın silemezsiniz.]
  $onlyPerms[admin;Bu komutu kullanmak için \`YÖNETİCİ\` yetkisine sahip olmanız gerekmekte.]
  $argsCheck[2;Komutun kullanım şekli \`?altın-sil <@kullanıcı> <Miktar>\`]
  `
}