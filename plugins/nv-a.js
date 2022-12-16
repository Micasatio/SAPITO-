// 𝔖𝔦𝔪𝔭𝔩𝔢 𝔖𝔞𝔭𝔦𝔱𝔬 𝔅𝔬𝔱   🇸 🇳 🇹
let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './src/a.mp3'
conn.sendFile(m.chat, vn, 'a.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /ª|a|A/
handler.command = /^(a|ª|A?$)/

module.exports = handler
