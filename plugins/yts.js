// 𝔖𝔦𝔪𝔭𝔩𝔢 𝔖𝔞𝔭𝔦𝔱𝔬 𝔅𝔬𝔱   🇸 🇳 🇹 
let yts = require('yt-search')
let handler = async (m, { text }) => {
if (!text) return m.reply('Cari apa?')
let results = await yts(text)
let teks = results.all.map(v => {
switch (v.type) {
case 'video': return `
📌 *${v.title}* (${v.url})
⌚ 𝒅𝒖𝒓𝒂𝒄𝒊𝒐𝒏: ${v.timestamp}
⏲️ 𝒑𝒖𝒃𝒍𝒊𝒄𝒂𝒅𝒐 ${v.ago}
`.trim()
case 'channel': return `
📌 *${v.name}* (${v.url})
🧑‍🤝‍🧑 _${v.subCountLabel} 𝚜𝚞𝚜𝚌𝚛𝚒𝚙𝚝𝚘𝚛𝚎𝚜_
🎥 ${v.videoCount} 𝚟𝚒𝚍𝚎𝚘/𝚜
`.trim()
}
}).filter(v => v).join('\n========================\n')
m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['general']
handler.command = /^yts(earch)?$/i
module.exports = handler
