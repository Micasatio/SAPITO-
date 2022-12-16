// 𝔖𝔦𝔪𝔭𝔩𝔢 𝔖𝔞𝔭𝔦𝔱𝔬 𝔅𝔬𝔱   🇸 🇳 🇹
function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
}
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i
module.exports = handler
