process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
let { MessageType } = require('@adiwajshing/baileys')
let yts = require('yt-search')
let fs = require('fs')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async(m, { conn, command, text, isPrems, isOwner, DevMode, args, usedPrexi }) => {
conn.play = conn.play ? conn.play : {}
if (!text) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝑵𝒐𝒎𝒃𝒓𝒆 𝒅𝒆 𝒍𝒂 𝒄𝒂𝒏𝒄𝒊𝒐𝒏 𝒇𝒂𝒍𝒕𝒂𝒏𝒕𝒆, 𝑷𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒊𝒏𝒈𝒓𝒆𝒔𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒎𝒂𝒔 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆/𝑻𝒊𝒕𝒖𝒍𝒐 𝒅𝒆 𝒖𝒏𝒂 𝒄𝒂𝒏𝒄𝒊𝒐𝒏*\n\n*—◉ 𝒆𝒋𝒆𝒎𝒑𝒍𝒐:*\n*#play Los meketrefes hoy te vi*'
try {
let results = await yts(text)
let vid = results.all.find(video => video.seconds < 3600)
let { dl_link, thumb, title, filesize, filesizeF } = await (/2$/.test(command) ? ytv : yta)(vid.url, 'id4')
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${dl_link}`)).text()
conn.sendFile(m.chat, thumb, 'error.jpg', `
📌 *𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
*📁 𝙿𝙴𝚂𝙾:* ${filesizeF}
*🔗 𝚄𝚁𝙻:* ${vid.url}
*📥 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁:* ${shortUrl}
`.trim(), m, false, { 
contextInfo: { externalAdReply: {
title: 'ʀᴇᴘʀᴏᴅᴜᴄᴛᴏʀ ᴅᴇ ʏᴏᴜᴛᴜʙᴇ',
body: '©𝑆𝑖𝑚𝑝𝑙𝑒𝐵𝑜𝑡', 
sourceUrl: `https://github.com/BrunoSobrino/SimpleBot`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})
conn.sendFile(m.chat, dl_link, title + '.mp' + (3 + /2$/.test(command)), `
*📌 𝚃𝙸𝚃𝚄𝙻𝙾:* ${title}
*📁 𝙿𝙴𝚂𝙾:* ${filesizeF}
*🔗 𝚄𝚁𝙻:* ${vid.url}
`.trim(), m)
} catch {
try {

m.reply(`*[❗] 𝙻𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰 𝙳𝙴𝙻 𝙰𝚄𝙳𝙸𝙾 / 𝚅𝙸𝙳𝙴𝙾 𝙵𝙰𝙻𝙻𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝙽𝙳𝙾 𝙲𝙾𝙽 𝙾𝚃𝚁𝙾 𝚂𝙴𝚁𝚅𝙸𝙳𝙾𝚁 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾...*\n\n*—◉ 𝚁𝙴𝙲𝚄𝙴𝚁𝙳𝙰 𝚀𝚄𝙴 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙻𝙰 𝙾𝙿𝙲𝙸𝙾𝙽 𝟹 𝙳𝙴 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰 𝚄𝚂𝙰𝙽𝙳𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾*\n◉ _#play3 *[texto]*_`)  
let res = await (await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`))    
let json = await res.json()
conn.sendMessage(m.chat, { audio: { url: json.result.audio }, mimetype: 'audio/mp4', fileName: json.result.title + `.mp3`}, {quoted: m})

} catch  {
m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁*')
}}}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['general']
handler.command = /^play2?$/i
module.exports = handler
