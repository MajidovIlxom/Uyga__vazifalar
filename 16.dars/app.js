const { Bot, Keyboard } = require('grammy');

const bot = new Bot("6400142168:AAHqKxut9rcTxdA8x2TjjcsmCWnA94VrcKY")

bot.command("start", async (ctx) => {
    await ctx.reply("Assalom alayum", {
        parse_mode: "HTML",
        reply_markup: new Keyboard().requestLocation("location").resized()
    });
});

function degToRad(deg) {
    return deg * (Math.PI / 180);
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance;
}

bot.on("message:location", async (ctx) => {
    const myLoc = { latitude: 41.284664, longitude: 69.187804 };
    const userLoc = ctx.message.location;
    const destLat = myLoc.latitude;
    const destLon = myLoc.longitude;
    const sourceLat = userLoc.latitude;
    const sourceLon = userLoc.longitude;
    const distance = calculateDistance(sourceLat, sourceLon, destLat, destLon);
    await ctx.reply(`Masofa: ${distance.toFixed(2)} km`);
});

bot.start();
