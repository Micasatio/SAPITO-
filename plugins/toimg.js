const { spawn } = require('child_process')
const util = require('util')
const { MessageType } = require('@adiwajshing/baileys')
let { webp2png } = require('../lib/webp2mp4')
let handler = async(m, { conn, command, usedPrefix }) => {
if (!global.support.convert &&
!global.support.magick &&
!global.support.gm) {
if (!m.quoted) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝑅𝑒𝑠𝑝𝑜𝑛𝑑𝑑 𝑎𝑙 𝑠𝑡𝑖𝑐𝑘𝑒𝑟 𝑞𝑢𝑒 𝑞𝑢𝑖𝑟𝑎𝑠 𝑐𝑜𝑛𝑣𝑒𝑟𝑡𝑖𝑟 𝑒𝑛 𝑖𝑚𝑎𝑔𝑒  𝑐𝑜𝑛 𝑒𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 ${usedPrefix + command}*`
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝑅𝑒𝑠𝑝𝑜𝑛𝑑𝑑 𝑎𝑙 𝑠𝑡𝑖𝑐𝑘𝑒𝑟 𝑞𝑢𝑒 𝑞𝑢𝑖𝑟𝑎𝑠 𝑐𝑜𝑛𝑣𝑒𝑟𝑡𝑖𝑟 𝑒𝑛 𝑖𝑚𝑎𝑔𝑒  𝑐𝑜𝑛 𝑒𝑙 𝑐𝑜𝑚𝑎𝑛𝑑𝑜 ${usedPrefix + command}*`
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2png(media)}
await conn.sendFile(m.chat, out, 'out.png', '*ＬＩＳＴＯ*', m, false, {
thumbnail: Buffer.alloc(0)})
return
}
if (!m.quoted) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝑅𝑒𝑠𝑝𝑜𝑛𝑑𝑑 𝑎𝑙 𝑠𝑡𝑖𝑐𝑘𝑒𝑟 𝑞𝑢𝑒 𝑞𝑢𝑖𝑟𝑎𝑠 𝑐𝑜𝑛𝑣𝑒𝑟𝑡𝑖𝑟 𝑒𝑛 𝑖𝑚𝑎𝑔𝑒*', m)
let q = { message: {
[m.quoted.mtype]: m.quoted } }
if (/sticker/.test(m.quoted.mtype)) {
let sticker = await conn.downloadM(q)
if (!sticker) throw sticker
let bufs = []
const [_spawnprocess, ..._spawnargs] = [...(global.support.gm ? ['gm'] : global.support.magick ? ['magick'] : []), 'convert', 'webp:-', 'png:-']
let im = spawn(_spawnprocess, _spawnargs)
im.on('error', e => conn.reply(m.chat, util.format(e), m))
im.stdout.on('data', chunk => bufs.push(chunk))
im.stdin.write(sticker)
im.stdin.end()
im.on('exit', () => {
conn.sendMessage(m.chat, Buffer.concat(bufs), MessageType.image, {
quoted: m
})})}}
handler.help = ['toimg (reply)']
handler.tags = ['general']
handler.command = /^toimg$/i
handler.fail = null
module.exports = handler
