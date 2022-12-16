let handler = async (m, { isOwner, text, isAdmin }) => {
let who
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
if (isOwner) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
who = m.mentionedJid[0] ? m.mentionedJid[0] : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
} else {
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
}
try {
if (who.endsWith('g.us')) global.db.data.chats[who].isBanned = false
else global.db.data.users[who].banned = false
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝑪𝒉𝒂𝒕 𝒃𝒂𝒏𝒆𝒂𝒅𝒐 𝒉𝒂𝒔𝒕𝒂 𝒆𝒍 𝒑𝒓𝒐𝒙𝒊𝒎𝒐 𝒂ñ𝒐*`)
} catch (e) {
throw `*[❗𝐈𝐍𝐅𝐎❗] 𝒆𝒔𝒕𝒆 𝒄𝒉𝒂𝒕 𝒏𝒐 𝒆𝒔𝒕𝒂 𝒆𝒏 𝒎𝒊 𝒃𝒂𝒔𝒆 𝒅𝒆 𝒅𝒂𝒕𝒐𝒔*`
}}
handler.help = ['unban']
handler.tags = ['owner', 'group']
handler.command = /^unban(chat)?$/i
module.exports = handler
