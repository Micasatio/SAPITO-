const uploadFile = require('../lib/uploadFile.js')
const uploadImage = require('../lib/uploadImage.js')
let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐹𝑒𝑠𝑝𝑜𝑛𝒅𝒆 𝑎 𝑢𝑛 𝑖𝑚𝑎𝑔𝑒 𝑜 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒𝑙 𝑐𝑢𝑎𝑙 𝑠𝑒𝑟𝑎 𝑐𝑜𝑛𝑣𝑒𝑟𝑡𝑖𝑑𝑜 𝑎 𝒆𝒏𝒍𝒂𝒄𝒆 *'
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
m.reply(`*𝙴𝙽𝙻𝙰𝙲𝙴 𝙰 𝚂𝚄 𝙰𝚁𝙲𝙷𝙸𝚅𝙾:* ${link}`)
}
handler.help = ['tourl <reply image>']
handler.tags = ['sticker']
handler.command = /^(upload|tourl)$/i
module.exports = handler
