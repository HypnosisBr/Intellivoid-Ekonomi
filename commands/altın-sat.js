module.exports = {
  name: "altın-sat",
  code: `
  $setUserVar[para;$sum[$getUserVar[para];$multi[$message;$getServerVar[altınfiyat]]];$authorID]
  $setUserVar[altın;$sub[$getUserVar[altın];$message];$authorID]
  $description[1;$message adet altın satıldı. Kasana $multi[$message;$getServerVar[altınfiyat]] dolar eklendi.]
  $footer[1;Komutu kullanan: $nickname[$authorID]]
  $addTimestamp[1]
  $onlyIf[$getUserVar[altın]>=$message;Yeterli miktarda altınınız yok! $message adet altına sahip olmalısınız.]
  $argsCheck[1;Lütfen bir sayı giriniz.]
  $color[1;RANDOM]
  `
}