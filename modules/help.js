/**
 * Commands
 * =====================
 * Write slash / and see commands of bot
 *
 */
module.exports = function(bot, config, request, translations) {
    /**
     * Command: /help
     * =====================
     * Command request last post, read /feed/ path from medium
     *
     */
    function help(ctx) {
        ctx.reply(translations.command_help_text);
    }
    bot.command(translations.command_help, help);

};