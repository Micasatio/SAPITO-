const { spawn } = require('child_process')
const util = require('util')
const { MessageType } = require('@adiwajshing/baileys')
let { webp2png } = require('../lib/webp2mp4')
let handler = async(m, { conn, command, usedPrefix }) => {
if (!global.support.convert &&
!global.support.magick &&
!global.support.gm) {
if (!m.quoted) throw `*[âđđđđâ] đđđ đđđđđ đđ đ đĄđđđđđ đđĸđ đđĸđđđđ  đđđđŖđđđĄđđ đđ đđđđđ  đđđ đđ đđđđđđđ ${usedPrefix + command}*`
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw `*[âđđđđâ] đđđ đđđđđ đđ đ đĄđđđđđ đđĸđ đđĸđđđđ  đđđđŖđđđĄđđ đđ đđđđđ  đđđ đđ đđđđđđđ ${usedPrefix + command}*`
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2png(media)}
await conn.sendFile(m.chat, out, 'out.png', '*īŧŦīŧŠīŧŗīŧ´īŧ¯*', m, false, {
thumbnail: Buffer.alloc(0)})
return
}
if (!m.quoted) return conn.reply(m.chat, '*[âđđđđâ] đđđ đđđđđ đđ đ đĄđđđđđ đđĸđ đđĸđđđđ  đđđđŖđđđĄđđ đđ đđđđđ*', m)
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
