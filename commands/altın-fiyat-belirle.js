module.exports = {
  name: "altın-fiyat-belirle",
  code: `
    $setServerVar[altınfiyat;$random[$sub[$getServerVar[altınfiyat];20];$sum[$getServerVar[altınfiyat];20]]]
    $description[1;Altının fiyatı başarı ile belirlendi.
    Yeni fiyat \`$random[$sub[$getServerVar[altınfiyat];20];$sum[$getServerVar[altınfiyat];20]]\`]
    $color[1;RANDOM]

  `
}