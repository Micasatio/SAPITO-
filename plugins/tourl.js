const uploadFile = require('../lib/uploadFile.js')
const uploadImage = require('../lib/uploadImage.js')
let handler = async (m) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw '*[βππππβ] πΉππ πππππ π π’π πππππ π π£ππππ πππ ππ’ππ π πππ ππππ£πππ‘πππ π ππππππ *'
let media = await q.download()
let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
let link = await (isTele ? uploadImage : uploadFile)(media)
m.reply(`*π΄π½π»π°π²π΄ π° ππ π°ππ²π·πΈππΎ:* ${link}`)
}
handler.help = ['tourl <reply image>']
handler.tags = ['sticker']
handler.command = /^(upload|tourl)$/i
module.exports = handler
