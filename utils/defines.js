const { Collection, MessageEmbed } = require("discord.js")

module.exports = async (client) => {
    client.color = require('../config/colors.json').main;
    client.commands = new Collection();
    client.aliases = new Collection();
    client.cooldown = new Set();
    client.snipes = new Map();
    client.prefix;
    client.success = require('../config/emojis.json').success
    client.fail = require('../config/emojis.json').fail
    try {
        await client.on('message', async (message) => {
            if (message.channel.type === 'dm') return
            if (require('../database/prefixes.json')[message.guild.id]) {
                client.prefix = await require('../database/prefixes.json')[message.guild.id].prefix;
            } else {
                client.prefix = await require('../config/bot.json').prefix;
            }
        })
    } catch {

    };

    client.groups = ['moderation', 'info', 'misc', 'fun', 'config', 'management', 'owners']

    client.config = require('../config/bot.json');
}