let fetch = require('node-fetch')
let instagramGetUrl = require('fg-ig')
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!(args[0])) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝑰𝒏𝑔𝑟𝑒𝑠𝑒 𝑢𝑛 𝑒𝑛𝑙𝑎𝑐𝑒 𝑑𝑒 𝑖𝑛𝑠𝑡𝑎𝑔𝑟𝑎𝑚,𝐸𝑗𝑒𝑚𝑝𝑙𝑜: ${usedPrefix + command} https://www.instagram.com/reel/Cc0NuYBgCR/?utm_source=ig_web_copy_link*`
let results = (await instagramGetUrl(args[0])).url_list[0]
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${results}`)).text()
let txt = `🔗 *𝑈𝑅𝐿:* ${shortUrl}`.trim()
await conn.sendFile(m.chat, results, 'error.mp4', txt, m)}
handler.command =/^(instagram|ig(dl)?)$/i
handler.dfail = null
module.exports = handler
