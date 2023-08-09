const {InlineKeyboard} = require("grammy")

const isJoin = async(ctx, next) =>{
    const telegramId = ctx.from.id

    const {status} = await ctx.api.getChatMember("-1001759215004" ,telegramId)
    
    if (status !== "left"){
        return next()
    }

    const keybort = new InlineKeyboard().url("A'zo bo'lish", "http://t.me/testuchunN1")

    await ctx.reply("Iltimos avval kanalga a'zo bo'ling...", {reply_markup: { ...keybort,}})
}

module.exports = isJoin