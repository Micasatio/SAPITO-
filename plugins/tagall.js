let handler = async(m, { conn, text, participants }) => {
let teks = `*|══✪〘 𝑰𝒏𝒗𝒐𝒄𝒂𝒏𝒅𝒐 𝒈𝒓𝒖𝒑𝒐 〙✪══|*\n\n➲ *𝑴𝒆𝒏𝒔𝒂𝒋𝒆:* ${text ? text : '𝒔𝒊𝒏 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒙𝒅'}\n\n`
for (let mem of participants) {
teks += `࿃➡️ @${mem.id.split('@')[0]}\n` }
teks += `\n⋙ ©𝑆𝑎𝑝𝑖𝑡𝑜𝐵𝑜𝑡 ⋘`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, {quoted: m})
}
handler.command = /^(invocar|tagall)$/i
handler.group = true
handler.admin = true
module.exports = handler
