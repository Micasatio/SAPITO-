// 𝔖𝔦𝔪𝔭𝔩𝔢 𝔖𝔞𝔭𝔦𝔱𝔬 𝔅𝔬𝔱   🇸 🇳 🇹 
const { servers, yta } = require('../lib/y2mate')
let handler = async(m, { conn, args, isPrems, isOwner }) => {
if (!args || !args[0]) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝘪𝘯𝘴𝘦𝘳𝘵𝘦 𝘦𝘭 𝘤𝘰𝘮𝘢𝘯𝘥𝘰 𝘮𝘢𝘴 𝘦𝘭 𝘦𝘯𝘭𝘢𝘤𝘦 / 𝘭𝘪𝘯𝘬 𝘥𝘦 𝘧𝘪𝘥𝘦𝘰 𝘥𝘦 𝘺𝘰𝘶𝘵𝘶𝘣𝘦*')
let chat = global.db.data.chats[m.chat]
let server = (args[1] || servers[0]).toLowerCase()
let { dl_link, thumb, title, filesize, filesizeF } = await yta(args[0], servers.includes(server) ? server : servers[0])
conn.sendFile(m.chat, dl_link, title + '.mp3', null, m, false, { mimetype: 'audio/mp4' })}              
handler.help = ['mp3', 'a'].map(v => 'yt' + v + ` <url> [server: ${servers.join(', ')}]`)
handler.tags = ['general']
handler.command = /^yt(a|mp3)$/i
module.exports = handler
