module.exports = {
  name: "bakiye",
  aliases: "b",
  code: `
  $thumbnail[1;$userAvatar[$mentioned[1;yes]]]
  $title[1;Dolar Kasası]
  $description[1;<@!$mentioned[1;yes]>
  Dolar: \`$getUserVar[para;$mentioned[1;yes]]\`
  Altın: \`$getUserVar[altın;$mentioned[1;yes]]\`
  $footer[1;$nickname[$authorID] kullandı.]
  $color[1;RANDOM]
  $addTimestamp[1]
  `
}