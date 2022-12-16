// 𝕾𝖎𝖒𝖕𝖑𝖊 𝕾𝖆𝖕𝖎𝖙𝖔 𝕭𝖔𝖙   🇸 🇳 🇹 
let axios = require("axios")
let fetch = require("node-fetch")
let cheerio = require("cheerio")
async function wikipedia(querry) {
try {
const link = await axios.get(`https://es.wikipedia.org/wiki/${querry}`)
const $ = cheerio.load(link.data)
let judul = $('#firstHeading').text().trim()
let thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`
let isi = []
$('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
let penjelasan = $(Ra).find('p').text().trim() 
isi.push(penjelasan)})
for (let i of isi) {
const data = {
status: link.status,
result: {
judul: judul,
thumb: 'https:' + thumb,
isi: i}}
return data}
} catch (err) {
var notFond = {
status: link.status,
Pesan: eror}
return notFond}}
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*[❗️𝐈𝐍𝐅𝐎❗️] 𝑖𝑚𝑏𝑒𝑐𝑖𝑙 𝑒𝑠𝑡𝑎𝑠 𝑢𝑠𝑎𝑛𝑑𝑜 𝑚𝑎𝑙 𝑒𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜!!*\n*𝒖𝒔𝒐 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒐:*\n*${usedPrefix + command} 𝙿𝚊𝚕𝚊𝚋𝚛𝚊 𝚌𝚕𝚊𝚟𝚎 𝚊 𝚋𝚞𝚜𝚌𝚊𝚛*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\n*${usedPrefix + command} Estrellas*`
wikipedia(`${text}`).then(res => {
m.reply(`*𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙻𝙰 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝙳𝙰 𝙳𝙴 ${text}*\n\n` + res.result.isi)
}).catch(() => { m.reply('*[❗️𝐈𝐍𝐅𝐎❗️] 𝑵𝒐 𝒆𝒏𝒄𝒐𝒏𝒕𝒓𝒆 𝒊𝒏𝒇𝒐𝒓𝒎𝒂𝒄𝒊𝒐𝒏*') })}
handler.command = /^(wiki|wikipedia|internet?)$/i
module.exports = handler
