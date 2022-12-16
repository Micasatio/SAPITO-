// 𝔖𝔦𝔪𝔭𝔩𝔢 𝔖𝔞𝔭𝔦𝔱𝔬 𝔅𝔬𝔱   🇸 🇳 🇹
let fetch = require('node-fetch')
const { servers, ytv } = require('../lib/y2mate')
let handler = async(m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝑖𝑛𝑠𝑒𝑟𝑡𝑒 𝑒𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 𝑚𝑎𝑠 𝑒𝑙 𝑒𝑛𝑙𝑎𝑐𝑒 / 𝑙𝑖𝑛𝑘 𝑑𝑒 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑦𝑜𝑢𝑡𝑢𝑏𝑒*')
let chat = global.db.data.chats[m.chat]
let server = (args[1] || servers[0]).toLowerCase()
let { dl_link, thumb, title, filesize, filesizeF } = await ytv(args[0], servers.includes(server) ? server : servers[0])
let _thumb = {}
try { _thumb = { thumbnail: await (await fetch(thumb)).buffer() } } catch (e) {}
conn.sendFile(m.chat, dl_link, title + '.mp4', `
*📌 𝑇𝑖𝑡𝑢𝑙𝑜:* ${title}
*📁 𝑃𝑒𝑠𝑜:* ${filesizeF}
`.trim(), m, false, {
..._thumb,
asDocument: chat.useDocument
})}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['general']
handler.command = /^yt(v|mp4)?$/i
module.exports = handler
