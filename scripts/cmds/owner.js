const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "owner",
    version: "2.0",
    author: "Ashik",
    shortDescription: "Display bot and owner information",
    longDescription: "Shows detailed info including bot name, prefix, and owner's personal information.",
    category: "Special",
    guide: {
      en: "{p}{n}",
    },
  },

  onStart: async function ({ api, event, args, message, usersData }) {
    const id = event.senderID;
    const userData = await usersData.get(id);
    const name = userData.name;
    const mention = [{ id, tag: name }];

    // 🛠 Convert Google Drive view link to direct download link
    const fileId = "1QQ4rcb5mnLytHKuavPxOjx0rF-YuOTaS";
    const directURL = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // ⏬ Download the file temporarily
    const filePath = path.join(__dirname, "https://i.postimg.cc/Vv2BNvJX/1756640243664.jpg");
    const response = await axios({
      url: directURL,
      method: "GET",
      responseType: "stream"
    });

    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on("finish", resolve);
      writer.on("error", reject);
    });

    const info = 
`━━━━━━━━━━━━━━━━
👋 𝗛𝗲𝗹𝗹𝗼, ${name}

📌 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
• 𝗡𝗮𝗺𝗲➝ Ꭺɴu࿐
• 𝗣𝗿𝗲𝗳𝗶𝘅 ➝! 

👤 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢
• 𝗡𝗮𝗺𝗲 ➝ ASHIK
• 𝗚𝗲𝗻𝗱𝗲𝗿 ➝ 𝗠𝗮𝗹𝗲
• 𝗔𝗴𝗲 ➝ 18💋
• 𝗦𝘁𝗮𝘁𝘂𝘀 ➝ ᴍᴀʀʀɪᴇᴅ ᴡɪᴛʜ ɴɪꜱʜᴜ✨
• 𝗘𝗱𝘂𝗰𝗮𝘁𝗶𝗼𝗻 ➝ বেকার🥴
• 𝗟𝗼𝗰𝗮𝘁𝗶𝗼𝗻 ➝ ɢᴀᴢɪᴘᴜʀ⚡
━━━━━━━━━━━━━━━━━`;

    message.reply({
      body: info,
      mentions: mention,
      attachment: fs.createReadStream(filePath)
    });
  }
};
