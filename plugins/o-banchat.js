// 𝔖𝔦𝔪𝔭𝔩𝔢 𝔖𝔞𝔭𝔦𝔱𝔬 𝔅𝔬𝔱   🇸 🇳 🇹
let handler = async (m, { conn, isOwner, text, isAdmin }) => {
let who
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
else who = m.chat
} else {
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
}
try {
if (who.endsWith('g.us')) global.db.data.chats[who].isBanned = true
else global.db.data.users[who].banned = true
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝐶ℎ𝑎𝑡 𝑏𝑎𝑛𝑒𝑎𝑑𝑜 ℎ𝑎𝑠𝑡𝑎 𝑒𝑙 𝑝𝑟𝑜𝑥𝑖𝑚𝑜 𝑎𝑛̃𝑜*\n\n*—◉ 𝐸𝑙 𝑏𝑜𝑡 𝑛𝑜 𝑟𝑒𝑠𝑝𝑜𝑛𝑑𝑒𝑟𝑎 𝑎 𝑖𝑛𝑔𝑢𝑛 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 ℎ𝑎𝑠𝑡𝑎 𝑞𝑢𝑒 𝑒𝑙 𝑐𝑟𝑒𝑎𝑑𝑜𝑟 𝑙𝑜 𝑑𝑒𝑠𝑏𝑎𝑛𝑒𝑒*`)
} catch (e) {
throw `*[❗𝐈𝐍𝐅𝐎❗] 𝑒𝑠𝑡𝑎 𝑐ℎ𝑎𝑡 𝑛𝑜 𝑒𝑠𝑡𝑎 𝑑𝑛 𝑚𝑖 𝑏𝑎𝑠𝑒 𝑑𝑒 𝑑𝑎𝑡𝑜𝑠*`
}}
handler.help = ['ban']
handler.tags = ['owner', 'group']
handler.command = /^ban(chat)?$/i
module.exports = handler
