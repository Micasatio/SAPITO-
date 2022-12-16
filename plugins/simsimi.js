let fetch = require('node-fetch')
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*𝒀 𝒆𝒍 𝒕𝒆𝒙𝒕𝒐?*\n\n*𝒑𝒐𝒏: ${usedPrefix + command} Hola Sapito*`
let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
let json = await res.json()
if (json.success) m.reply(json.success)
else throw json }
handler.help = ['simsimi']
handler.tags = ['general']
handler.command = ['bot', 'simi', 'sapito'] 
module.exports = handler
