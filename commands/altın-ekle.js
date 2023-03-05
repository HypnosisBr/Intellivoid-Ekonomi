module.exports = {
  name: "altın-ekle",
  code: `
  $setUserVar[altın;$sum[$getUserVar[altın;$mentioned[1]];$noMentionMessage];$mentioned[1]]

$description[1;<@!$mentioned[1]> kullanıcısının kasasına \`$noMentionMessage\` altın eklendi.]
  
  $footer[1;$nickname[$authorID] kullandı.]
  
  $addTimestamp[1]
  
  $color[1;RANDOM]
  
  $onlyIf[$isNumber[$noMentionMessage]!=false;Lütfen eklenecek miktarı rakam olarak giriniz.]
  
  $onlyIf[$isBot[$mentioned[1]]!=true;Bota altın ekleyemezsiniz.]
  
  $onlyPerms[admin;Bu komutu kullanmak için \`YÖNETİCİ\` yetkisine sahip olmanız gerekmekte.]
  
  $argsCheck[2;Komutun kullanım şekli \`?altın-ekle <@kullanıcı> <Miktar>\`]
  
  `
}