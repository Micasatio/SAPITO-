let handler = async (m, { conn }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
m.reply(`
*𝑆𝑎𝑝𝑖𝑡𝑜 𝐵𝑜𝑡 𝑒𝑠𝑡𝑢𝑣𝑜 𝑎𝑐𝑡𝑖𝑣𝑜* ${uptime}
*𝑝𝑜𝑛 #menu 𝒑𝒂𝒓𝒂 𝒗𝒆𝒓 𝒍𝒂 𝒍𝒊𝒔𝒕𝒂 𝒅𝒆 𝒄𝒐𝒎𝒂𝒏𝒅𝒐𝒔*

`.trim())}
handler.help = ['runtime']
handler.tags = ['info']
handler.command = /^(uptime|runtime)$/i
module.exports = handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
