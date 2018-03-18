/**
 * Command: /credits
 * =====================
 *
 */
module.exports = function(bot, config, request, translations) {
    /**
     * Command: /credits
     * =====================
     * Copyright and license
     *
     */
    function credits(ctx) {
         ctx.reply(translations.command_credits_url);
         ctx.reply(translations.command_credits_text);
    }
    bot.command(translations.command_credits, credits);

};