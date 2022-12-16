const { sticker } = require('../lib/sticker.js');
const uploadFile = require('../lib/uploadFile.js');
const uploadImage = require('../lib/uploadImage.js');
const { webp2png } = require('../lib/webp2mp4.js');
let handler = async (m, { conn, args, usedPrefix, command }) => {
let stiker = false
try {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || q.mediaType || ''
if (/webp|image|video/g.test(mime)) {
if (/video/g.test(mime))
if ((q.msg || q).seconds > 11) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝑬𝒍 𝒗𝒊𝒅𝒆𝒐 𝒏𝒐 𝒑𝒖𝒆𝒅𝒆 𝒅𝒖𝒓𝒂𝒓 𝒎𝒂𝒔 𝒅𝒆 10 𝒔𝒆𝒈𝒖𝒏𝒅𝒐𝒔*')
let img = await q.download?.()
if (!img) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝑅𝑒𝒔𝒑𝒐𝒏𝒅𝒆 𝑎 𝒖𝒏 𝑣𝑖𝑑𝒆𝑜, 𝑖𝒎𝒂𝑔𝑒𝒏 𝐨 𝑖𝑛𝑠𝑒𝑟𝑡𝑒 𝒆𝑙 𝑒𝑛𝑙𝑎𝑐𝑒 𝑑𝑒 𝑢𝑛𝑎 𝑖𝑚𝑎𝑔𝑒  𝑻𝑬𝑹𝑴𝑰𝑵𝑨𝑪𝑰𝑶𝑵 .𝚓𝚙𝚐 𝐸𝑙 𝑐𝑢𝑎𝑙 𝑠𝑒𝑟𝑎 𝑐𝑜𝑛𝑣𝑒𝑟𝑡𝑖𝑑𝑜 𝑒𝑛 𝑠𝑡𝑖𝑐𝑘𝑒𝑟, 𝑑𝑒𝑏𝑒 𝑟𝑒𝑠𝑝𝑜𝑛𝑑𝑒𝑟 𝑜 𝑢𝑠𝑎𝑟 𝑒𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 ${usedPrefix + command}*`
let out
try {
if (/webp/g.test(mime)) out = await webp2png(img)
else if (/image/g.test(mime)) out = await uploadImage(img)
else if (/video/g.test(mime)) out = await uploadFile(img)
if (typeof out !== 'string') out = await uploadImage(img)
stiker = await sticker(false, out, global.packname, global.author)
} catch (e) {
console.error(e)
} finally {
if (!stiker) stiker = await sticker(img, false, global.packname, global.author)
}
} else if (args[0]) {
if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
else return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐸𝑙 𝑑𝑛𝑙𝑎𝑐𝑒 / 𝑈𝑅𝐿 / 𝐿𝑖𝑛𝑘 𝑛𝑜 𝑒𝑠 𝑣𝑎𝑙𝑖𝑑𝑎, 𝑙𝑎 𝑡𝕖𝑟𝑚𝑖𝑛𝑎𝑐𝑖𝑜𝑛 𝑑𝑒𝑙 𝑒𝑛𝑙𝑎𝑐𝑒 / 𝑈𝑅𝐿 / 𝐿𝑖𝑛𝑘 𝑑𝑒𝑏𝑒 𝑠𝑒𝑟 .𝚓𝚙𝚐, 𝑬𝑱𝑬𝑴𝑷𝑳𝑶: #s https://telegra.ph/file/0dc687c60765e98de2.jpg*')
}
} catch (e) {
console.error(e)
if (!stiker) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
else throw '*[❗𝐈𝐍𝐅𝐎❗] 𝑺𝒐𝒓𝒓𝒚, 𝑂𝑐𝑢𝑟𝑟𝑖𝑜 𝑢𝑛 𝑒𝑟𝑟𝑜𝑟, 𝑣𝑢𝑒𝑙𝑣𝑎 𝑎 𝑖𝑛𝑡𝑒𝑛𝑡𝑎𝑟. 𝑁𝑂 𝙾𝑙𝑣𝑖𝑑𝑒 𝑟𝑒𝑠𝑝𝑜𝑛𝑑𝑒𝑟 𝑎 𝑢𝑛 𝑣𝑖𝑑𝑒𝑜, 𝑖𝑚𝑎𝑔𝑒𝑛 𝑜 𝑖𝑛𝑠𝑒𝑟𝑡𝑒 𝑒𝑙 𝑒𝑛𝑙𝑎𝑐𝑑 𝑑𝑒 𝑢𝑛𝑎 𝑖𝑚𝑎𝑔𝑒𝑛 𝑻𝑬𝑹𝑴𝑰𝑵𝑨𝑪𝑰𝑶𝑵 .𝚓𝚙𝚐 𝐸𝑙 𝑐𝑢𝑎𝑙 𝑠𝑒𝑅𝑎 𝑐𝑜𝑁𝑉𝑒𝑟𝑇𝑖𝑑𝑜 𝑒𝑛 𝑠𝑟𝑖𝑐𝑘𝑒𝑟*'
}}
handler.help = ['stiker (caption|reply media)', 'stiker <url>', 'stikergif (caption|reply media)', 'stikergif <url>']
handler.tags = ['general']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
module.exports = handler
const isUrl = (text) => {
return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))}
