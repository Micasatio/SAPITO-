let fs = require('fs')
let fetch = require('node-fetch')
let { youtubeSearch } = require('@bochilteam/scraper')
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝑁𝑜𝑚𝑏𝑟𝑒 𝑑𝑒 𝑙𝑎 𝑐𝑎𝑛𝑐𝑖𝑜𝑛 𝑓𝑎𝑙𝑡𝑎𝑛𝑡𝑒, 𝑃𝑜𝑟 𝑓𝑎𝑣𝑜𝑟 𝑖𝑛𝑔𝑟𝑒𝑠𝑒 𝑒𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 𝑚𝑎𝑠 𝑒𝑙 𝑛𝑜𝑚𝑏𝑟𝑒/𝑇𝑖𝑡𝑢𝑙𝑜 𝑑𝑒 𝑢𝑛𝑎 𝑐𝑎𝑛𝑐𝑖𝑜𝑛*\n\n*—◉ 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Los Meketrefes *`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const url = 'https://www.youtube.com/watch?v=' + videoId
let caption = `📌 *𝑇𝑖𝑡𝑢𝑙𝑜:* ${title}
📇 *𝐷𝑒𝑠𝑐𝑟𝑖𝑝𝑐𝑖𝑜𝑛:* ${description}
📆 *𝑃𝑢𝑏𝑙𝑖𝑐𝑎𝑑𝑜:* ${publishedTime}
⌚ *𝐷𝑢𝑟𝑎𝑐𝑖𝑜𝑛:* ${durationH}
👀 *𝑉𝑖𝑠𝑡𝑎𝑠:* ${viewH}
🔗 *𝑈𝑅𝐿:* ${url}`.trim()
let buttons = [
{ buttonId: `${usedPrefix}getaud ${url}`, buttonText: { displayText: '𝐀𝐔𝐃𝐈𝐎' }, type: 1 },
{ buttonId: `${usedPrefix}getvid ${url}`, buttonText: { displayText: '𝐕𝐈𝐃𝐄𝐎' }, type: 1 }]
let buttonMessage = {
image: await fetch(thumbnail),
caption: caption,
mentions: [m.sender],
footer: `*${wm}*`,
buttons: buttons,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑 𝑺𝒊𝒎𝒑𝒍𝒆 𝑺𝒂𝒑𝒊𝒕𝒐 𝑩𝒐𝒕 👑',
body: null,
thumbnail: fs.readFileSync('./src/logo.png'),
sourceUrl: `https://github.com/Micasatio/SAPITO-`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m }) 
} catch {
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝐸𝑟𝑟𝑜𝑟, 𝑉𝑢𝑒𝑙𝑣𝑎 𝑎 𝑖𝑛𝑡𝑒𝑛𝑡𝑎𝑟𝑙𝑜 𝑚𝑎𝑠 𝑡𝑎𝑟𝑑𝑒 :)*')
}}
handler.command = /^(play3)$/i
module.exports = handler
