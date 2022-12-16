let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
try {
let res = await fetch('https://cataas.com/cat')
let img = await res.buffer()
let caption = `
𝑀𝑖𝑐ℎ𝑖𝑖 🐱
*©𝑺𝒂𝒑𝒊𝒕𝒐𝑩𝒐𝒕*
`.trim()
conn.sendFile(m.chat, img, 'cat.jpg', caption, m)
} catch (e) {
console.log(e)
throw '*[❗] 𝙴𝚁𝚁𝙾𝚁*'
}}
handler.help = ['cat']
handler.tags = ['general']
handler.command = /^cat$/i
handler.fail = null
module.exports = handler
