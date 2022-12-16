let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://random.dog/woof.json')
let json = await res.json()
if (json.status) throw json
let caption = `
𝑈𝑛 𝑝𝑒𝑟𝑟𝑖𝑡𝑜𝑜 🐶
*©𝑺𝒂𝒑𝒊𝒕𝒐𝑩𝒐𝒕*
`.trim()
conn.sendFile(m.chat, json.url, 'dog.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*[❗] 𝑬𝒓𝒓𝒐𝒓*'
}}
handler.help = ['dog']
handler.tags = ['general']
handler.command = /^dog$/i
handler.fail = null
module.exports = handler
