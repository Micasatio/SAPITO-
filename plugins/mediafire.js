let { mediafiredl } = require('@bochilteam/scraper')
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝑰𝒏𝒈𝒓𝒆𝒔𝒆 𝒖𝒏 𝒆𝒏𝒍𝒂𝒄𝒆 𝒗𝒂𝒍𝒊𝒅𝒐 𝒅𝒆 𝑴𝑬𝑫𝑰𝑨𝑭𝑰𝑹𝑬, 𝑬𝑱𝑬𝑴𝑷𝑳𝑶: ${usedPrefix + command} https://www.mediafire.com/file/pbabuzyc7i8ord5/sAPITO-Bot-MD-master_%25285%2529.zip/file*`
try {
let res = await mediafiredl(args[0])
let { url, url2, filename, ext, aploud, filesize, filesizeH } = res
m.reply(global.wait)
conn.sendMessage(m.chat, { document: { url: url }, mimetype: ext, fileName: filename}, {quoted: m})   
} catch (e) {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁*\n\n*- 𝙲𝙾𝚁𝚁𝙾𝙱𝙾𝚁𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝚂𝙴𝙰 𝚂𝙸𝙼𝙸𝙻𝙰𝚁 𝙰:*\n*◉ https://www.mediafire.com/file/pbabuzyc7i8ord5/sapitoc-Bot-MD-master_%25285%2529.zip/file*')
}}
handler.help = ['mediafire'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(mediafire|mediafiredl|dlmediafire)$/i
module.exports = handler
