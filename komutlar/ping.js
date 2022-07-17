module.exports = {
    kod: "ping",
    async run (client, message, args) {
        message.reply(`Ping: **${client.ws.ping}**`)
    }
}