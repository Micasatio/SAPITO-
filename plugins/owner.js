// ππ¦πͺπ­π©π’ πππ­π¦π±π¬ ππ¬π±   πΈβπ³βπΉ
function handler(m) {
this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
}
handler.command = /^(contacto|owner|creator|creador|propietario|dueΓ±o)$/i
module.exports = handler
