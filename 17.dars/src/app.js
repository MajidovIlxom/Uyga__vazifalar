const { Bot, InlineKeyboard } = require('grammy');
const config = require('../config');
const Io = require("./utils/io");
const Users = new Io("./database/users.json");
const User = require("./model/user.model");

const isAuth = require('./middleware/is.auth');
const isJoin = require('./middleware/isJoin');

const bot = new Bot(config.token);

bot.use(isAuth);
bot.use(isJoin);

bot.command("start", async (ctx) => {
    await ctx.reply("Assalom alaykum", {
        parse_mode: "HTML",
    });
});

bot.on("message:file", async (ctx) => {
    const sentMessage = await ctx.api.copyMessage("-1001759215004", ctx.from.id, ctx.message.message_id);
    await ctx.reply(`Your ID: \`${sentMessage.message_id}\``, { parse_mode: "Markdown" });
    await ctx.deleteMessage()
});

bot.on(":text", async (ctx) => {
    const text = ctx.message.text.split(":");
    if (text[0].toLowerCase() === "id") {
        await ctx.api.copyMessage(ctx.from.id, "-1001759215004", text[1]);
    }
});

bot.on("my_chat_member", async (ctx) => {
    const users = await Users.read();

    const telegramId = ctx.from.id;
    const findUser = users.find((user) => user.telegramId === telegramId);
    
    if (findUser) {
        findUser.status = !findUser.status;
        await Users.write(users);
    }
});


bot.catch((e) => {
    console.log('Error:', e);
});

bot.start();
