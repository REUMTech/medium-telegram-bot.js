/**
 * Command: /lastpost
 * =====================
 * Request feed rss of blog 
 *
 */
module.exports = function(bot, config, request, translations) {
    /**
     * Command: /lastpost
     * =====================
     * Command request last post, read /feed/ path from medium
     *
     */
    function lastpost(ctx) {
        let xml2js = require('xml2js').parseString;

        request(config.medium_url +'/feed/', function(error, response, xml) {
            if (error)
                return error;

            xml2js(xml, function(err, json) {
                for (let i = 0; i < config.medium_total_feed && i < json.rss.channel[0].item.length; i++) {
                    let url = json.rss.channel[0].item[i].link[0].replace("'", "");
                    ctx.reply(url);
                }
            });
        });
    }
    bot.command(translations.command_lastpost, lastpost);

};