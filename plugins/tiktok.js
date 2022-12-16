let fetch = require('node-fetch')
let handler = async (m, {command, conn, text, args, usedPrefix}) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝑒𝑛𝑙𝑎𝑐𝑒 𝑑𝑒 𝑻𝒊𝒌𝑻𝒐𝒌 𝑓𝑎𝑙𝑡𝑎𝑛𝑡𝑒, 𝑝𝑜𝑟 𝑓𝑎𝑣𝑜𝑟 𝑖𝑛𝑔𝑟𝑒𝑠𝑒 𝑒𝑛 𝑒𝑛𝑙𝑎𝑐𝑒/𝑙𝑖𝑛𝑘 𝑑𝑒 𝑎𝑙𝑔𝑢𝑛 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑻𝒊𝒌𝑻𝒐𝒌*\n\n*—◉ 𝑒𝑗𝑒𝑚𝑝𝑙𝑜:*\n*${usedPrefix + command} https://vm.tiktok.com/ZML42vS/*`
if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝐸𝑛𝑙𝑎𝑐𝑒 𝑑𝑒 𝑻𝒊𝒌𝑻𝒐𝒌 𝑖𝑛𝑐𝑜𝑟𝑟𝑒𝑐𝑡𝑜, 𝑝𝑜𝑟 𝑓𝑎𝑣𝑜𝑟 𝑖𝑛𝑔𝑟𝑒𝑠𝑒 𝑒𝑛 𝑒𝑛𝑙𝑎𝑐𝑒/𝑙𝑖𝑛𝑘 𝑑𝑒 𝑎𝑙𝑔𝑢𝑛 𝑣𝑖𝑑𝑒𝑜 𝑑𝑒 𝑻𝒊𝒌𝑻𝒐𝒌*\n\n*—◉ 𝐸𝑱𝐸𝑴𝑃𝐋𝑶:*\n*${usedPrefix + command} https://vm.tiktok.com/Z42vSnn/*`
let url = (await fetch(text)).url
let res = await (await fetch(`https://api2.musical.ly/aweme/v1/aweme/detail/?aweme_id=${url.split('?')[0].split('/')[5]}`)).json()
let data = res.aweme_detail.video.play_addr.url_list
if (!data.length) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝐸𝑅𝑅𝑂𝑅 𝐴𝐿 𝐷𝐸𝑆𝐶𝐴𝑅𝐺𝐴𝑅 𝑆𝑈 𝑉𝐼𝐷𝐸𝑂 𝐼𝑁𝑇𝐸𝑁𝑇𝐸 𝐸𝐿 𝑃𝑅𝑂𝑋𝐼𝑀𝑂 𝐴𝑁̃𝑂*'
let meta = await getInfo(url).catch(_ => {})
await m.reply(global.wait)
conn.sendFile(m.chat, data[data.length - 1], 'tiktok.mp4', `${await shortUrl(data[data.length - 1])}`, m)}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['general']
handler.command = /^(tiktok)$/i
module.exports = handler
async function getInfo(url) {
let id = url.split('?')[0].split('/')
let res = await (await fetch(`https://www.tiktok.com/node/share/video/${id[3]}/${id[5]}/`)).json()
return res?.seoProps?.metaParams}
async function shortUrl(url) {
return await (await fetch(`https://tinyurl.com/api-create.php?url=${url}`)).text()}
