const { googleIt } = require('@bochilteam/scraper')
let handler = async (m, { conn, command, args }) => {
const fetch = (await import('node-fetch')).default
let full = /f$/i.test(command)
let text = args.join` `
if (!text) return conn.reply(m.chat, '*[𓀡 Info 𓀡] 𝐼𝑛𝑔𝑟𝑒𝑠𝑒 𝑒𝑙 𝑡𝑒𝑥𝑡𝑜 𝑜 𝑡𝑒𝑚𝑎 𝑞𝑢𝑒 𝑞𝑢𝑖𝑟𝑎𝑠 𝑏𝑢𝑠𝑐𝑎𝑟 ☏︎*', m)
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text)
let msg = search.articles.map(({
title,
url,
description
}) => {
return `*${title}*\n_${url}_\n_${description}_`
}).join('\n\n')
try {
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch (e) {
m.reply(msg)
}}
handler.help = ['google', 'googlef'].map(v => v + ' <pencarian>')
handler.tags = ['internet']
handler.command = /^googlef?$/i
module.exports = handler
