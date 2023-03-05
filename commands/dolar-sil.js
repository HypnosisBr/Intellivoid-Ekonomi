module.exports = {
  name: "dolar-sil",
  code: `
  $setUserVar[para;$sub[$getUserVar[para;$mentioned[1]];$noMentionMessage];$mentioned[1]]
  $description[1;<@!$mentioned[1]> kullanıcısının kasasından \`$noMentionMessage\` dolar silindi.]
  $footer[1;$nickname[$mentioned[1;yes]] kullandı.]
  $addTimestamp[1]
  $color[1;RANDOM]
  $onlyIf[$isNumber[$noMentionMessage]!=false;Lütfen silinecek miktarı rakam olarak giriniz.]
  $onlyIf[$isBot[$mentioned[1]]!=true;Bota para ekleyemezsiniz.]
  $onlyIf[$getUserVar[para;$mentioned[1]]>=$noMentionMessage;Üzgünüm. Etiketlenen kişinin kasasında bu kadar para bulunmamakta.]
  $onlyPerms[admin;Bu komutu kullanmak için \`YÖNETİCİ\` yetkisine sahip olmanız gerekmekte.]
  $argsCheck[2;Komutun kullanım şekli \`?dolar-sil <@kullanıcı> <Miktar>\`]
  `
}