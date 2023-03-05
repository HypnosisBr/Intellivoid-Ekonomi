module.exports = {
  name: "dolar-ekle",
  code: `
  $setUserVar[para;$sum[$getUserVar[para;$mentioned[1]];$noMentionMessage];$mentioned[1]]
  $description[1;<@!$mentioned[1]> kullanıcısının kasasına \`$noMentionMessage\` dolar eklendi.]
  $footer[1;$nickname[$mentioned[1;yes]] kullandı.]
  $addTimestamp[1]
  $color[1;RANDOM]

  $onlyIf[$isNumber[$noMentionMessage]!=false;Lütfen eklenecek miktarı rakam olarak giriniz.]
  $onlyIf[$isBot[$mentioned[1]]!=true;Bota para ekleyemezsiniz.]
  $onlyPerms[admin;Bu komutu kullanmak için \`YÖNETİCİ\` yetkisine sahip olmanız gerekmekte.]
  $argsCheck[2;Komutun kullanım şekli \`?dolar-ekle <@kullanıcı> <Miktar>\`
  `
}