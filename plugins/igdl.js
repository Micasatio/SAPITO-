let fetch = require('node-fetch')
let instagramGetUrl = require('fg-ig')
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!(args[0])) throw `*[βππππβ] π°πππππ π π’π ππππππ ππ πππ π‘πππππ,πΈππππππ: ${usedPrefix + command} https://www.instagram.com/reel/Cc0NuYBgCR/?utm_source=ig_web_copy_link*`
let results = (await instagramGetUrl(args[0])).url_list[0]
let shortUrl = await (await fetch(`https://tinyurl.com/api-create.php?url=${results}`)).text()
let txt = `π *πππΏ:* ${shortUrl}`.trim()
await conn.sendFile(m.chat, results, 'error.mp4', txt, m)}
handler.command =/^(instagram|ig(dl)?)$/i
handler.dfail = null
module.exports = handler
