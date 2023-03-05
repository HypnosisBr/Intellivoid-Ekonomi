module.exports = {
  name: "altın-al",
  code: `
  $setUserVar[para;$sub[$getUserVar[para];$multi[$message;$getServerVar[altınfiyat]]];$authorID]

$setUserVar[altın;$sum[$getUserVar[altın];$message];$authorID]

$description[1;$message adet altın satın alındı. Altının maliyeti $multi[$message;$getServerVar[altınfiyat]] dolar.]

$footer[1;Komutu kullanan: $nickname[$authorID]]

$addTimestamp[1] 
  $onlyIf[$getUserVar[para]>=$multi[$message;$getServerVar[altınfiyat]];Yeterli miktarda dolarınız yok!]

$argsCheck[1;Lütfen bir sayı giriniz.]

$color[1;RANDOM]
  `
}