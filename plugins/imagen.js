let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)
let handler  = async (m, { conn, args, text }) => {
if (!text) return m.reply('*[❗] 𝐼𝑛𝑔𝑟𝑒𝑠𝑒 𝑒𝑙 𝑡𝑒𝑥𝑡𝑜 𝑞𝑢𝑒 𝑞𝑢𝑖𝑟𝑎 𝑏𝑢𝑠𝑐𝑎𝑙*')
let results = await gis(text) || []
let { url, width, height } = pickRandom(results) || {}
if (!url) return m.reply('*[❗] 𝚂𝑒𝑟𝑣𝑖𝑑𝑜𝑟 𝑐𝑎𝑖𝑑𝑜*')
conn.sendFile(m.chat, url, 'gimage', `
🔎 *𝐴𝑞𝑢𝑖 𝑡𝑖𝑒𝑛𝑒𝑠 𝑒𝑙 𝑟𝑒𝑠𝑢𝑙𝑡𝑎𝑑𝑜 𝑑𝑒* ${text}
🌎 *𝐵𝑢𝑠𝑐𝑎𝑑𝑜𝑟:* 𝐺𝑜𝑜𝑔𝑙𝑒
`.trim(), m)}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['general']
handler.command = /^(gimage|image|imagen)$/i
module.exports = handler
function pickRandom(arr) {
return arr[Math.floor(Math.random() * arr.length)]}
