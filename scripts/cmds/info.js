module.exports = {
  config: {
    name: "info",
    version: "1.5",
    author: "✨ Ashik ✨",
    shortDescription: "Display bot and owner info",
    longDescription: "Shows owner's and bot's details with videos.",
    category: "INFO",
    guide: { en: "[user]" },
  },

  onStart: async function ({ api, event }) {
    const videoUrls = [
      // ✅ Fixed: Converted to direct-download format
      "https://drive.google.com/uc?export=download&id=1-3mVa76yN8gVAT_xGoYckZYyfmr3egpf"
    ];

    const msgBody = `
┌────────────────┐
           𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢
└────────────────┘

  ☁️ 𝗡𝗮𝗺𝗲 ➝ ASHIK
  🎂 𝗔𝗴𝗲 ➝ 18+💋🥵
  🧠 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 ➝ বেকার                  
  ❄️ 𝘀𝗲𝘀𝘀𝗶𝗼𝗻 ➝ 2025-26
  🏠 𝗙𝗿𝗼𝗺 ➝ Dhaka 😎⚡
  ❤️ 𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻 ➝ 🎀SINGLE🎀
  ♂️ 𝗚𝗲𝗻𝗱𝗲𝗿 ➝ 𝐌𝐚𝐥𝐞

━━━━━━━━━━━━━━━━━━

 ✦ 𝗛𝗼𝗯𝗯𝗶𝗲𝘀 ➝ ɢᴀᴍɪɴɢ • ᴍᴜaᴄ

━━━━━━━━━━━━━━━━━━

✨ 𝗕𝗼𝘁 𝗧𝘆𝗽𝗲 ➝ AshikBot 𝗩𝟮

💫 𝗧𝗵𝗮𝗻𝗸𝘀 𝗳𝗼𝗿 𝘂𝘀𝗶𝗻𝗴 𝗺𝗲 💫
    `;

    const randomVideo = videoUrls[Math.floor(Math.random() * videoUrls.length)];

    api.sendMessage({
      body: msgBody,
      attachment: await global.utils.getStreamFromURL(randomVideo),
    }, event.threadID, event.messageID);
  },
};
