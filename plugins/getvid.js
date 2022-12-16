process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
let fetch = require('node-fetch')
let { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
let handler = async (m, { conn, command, text, args }) => {
if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝐼𝑛𝑠𝑒𝑟𝑡𝑒 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 𝑚𝑎𝑠 𝑒𝑙 𝑒𝑛𝑙𝑎𝑐𝑒/ 𝐿𝑖𝑛𝑘 𝑑𝑒 𝑢𝑛 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑦𝑢𝑡𝑢*`)
try {
let qu = args[1] || '360'
let q = qu + 'p'
let v = args[0]
await m.reply(global.wait)  
const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)).catch(async () => await youtubedlv3(v))
const dl_url = await yt.video[q].download()
const ttl = await yt.title
await conn.sendMessage(m.chat, { video: { url: dl_url }, mimetype: 'video/mp4', fileName: `${ttl}.mp4`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })   
} catch {
try {    
let ytm3 = encodeURIComponent(text)
await m.reply(global.wait)  
let res = await fetch(`https://latam-api.vercel.app/api/ytmp4_2?apikey=nekosmic&q=${ytm3}`)
let json = await res.json()
await conn.sendMessage(m.chat, { video: { url: json.descarga }, mimetype: 'video/mp4', fileName: `${json.titulo}.mp4`, thumbnail: await fetch(json.logo)  }, { quoted: m })
} catch {
m.reply(`*[❗] 𝑁𝑜 𝑝𝑢𝑑𝑒 𝑑𝑒𝑠𝑐𝑎𝑟𝑔𝑎𝑟 𝑒𝑙 𝑣𝑖𝑑𝑒𝑜 :(*`)
}}}
handler.command = /^(getvid|ytmp4.2|ytv.2)$/i
module.exports = handler
