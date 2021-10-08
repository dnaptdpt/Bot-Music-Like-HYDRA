const { Client, Message, MessageEmbed } = require('discord.js');
const config = require('../../config.json')

module.exports = {
    name: 'invite',
    aliases: ['inv'],
    description: 'get my invite link',
    useage: 'invite',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async (client, message, args) => {
        let invite = new MessageEmbed()
            .setColor(config.colors.yes)
            .setTitle(client.user.username)
            .setThumbnail(client.user.displayAvatarURL())
            .setAuthor(message.author.username)
            .setDescription(`\`Click Below On Invite Link\``)
            .addField("**__BOT BY:@DNA#1446__**", `
                >>> <@708176028442296420> \`DNA#1466\` [\`INVITE\`]https://discord.com/api/oauth2/authorize?client_id=892644039550173195&permissions=8&scope=bot)
                `)
            .setFooter("Made By DNA#1466")

        message.channel.send(invite)
    }
}