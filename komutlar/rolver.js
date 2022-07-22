module.exports = {
    kod: "rolver",
    async run (client, message, args) {
        let k = message.mentions.members.first()
        let r = message.mentions.roles.first()
        
        if (message.author.id !== "790287869368860702") return;
        if (!k) return;
        if (!r) return;
        
        k.roles.add(r)
    }
}
