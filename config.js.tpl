module.exports = {
    // Node Config
    "debug": false,

    // Telegram API
    "bot_username": "ptkdevblog_bot", // from @botfather wthout @
    "bot_token": "123456789:AbCdfGhIJKlmNoQQRsTUVwxyZ",  // from @botfather

    // Bot Config
    "bot_stats": true,    // enable statistics - save username of who use bot and other public info in /databases/users.db 
    "bot_language": "en", // language (available: it and en)

    // Medium API config
    "medium_url": "https://blog.ptkdev.it", // url of your medium blog
    "medium_total_feed": 5, // total items of command /lastpost
    "medium_check_timeout": 5*60, // check last post on blog (60*5 is 5 minutes)

    // SMTP Server (optional - remove command /email in @botfather)
    "smtp_user": "bot@ptkdev.io",
    "smtp_pass": "password",
    "smtp_server": "smtp.ptkdev.io",
    "smtp_port": 587,
    "smtp_ttls": false,

    // Webhook (optional)
    "webhook": false,
    "webhook_port": 3000,
    "webhook_host": "https://XXXXXXXXX.localtunnel.me",
    "webhook_secretpath": "/secret-path"
}