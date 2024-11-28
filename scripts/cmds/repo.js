module.exports = {
  'config': {
    'name': "repo",
    'author': "popkid",
    'description': "Display bot repo",
    'category': "system",
    'usage': ".feature",
    'usePrefix': true
  },
  'onStart': async function ({
    bot: _0x3ab608,
    chatId: _0x36d3b4
  }) {
    try {
      _0x3ab608.sendMessage(_0x36d3b4, "\nPopkid-𝗠𝗱 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 𝗕𝗼𝘁:\n \n𝗥𝗲𝗽𝗼 𝗟𝗶𝗻𝗸: https://github.com/Popkiddevs/T-BOT\nKindly fork and Star Repo for Courage...\n Happy Deployment!!!\n \n𝗠𝗮𝗱𝗲 𝗜𝗻 𝗞𝗲𝗻𝘆𝗮 🇰🇪𝗕𝘆 *POPKID*\n ");
    } catch (_0x2d2b86) {
      console.error("[ERROR]", _0x2d2b86);
      _0x3ab608.sendMessage(_0x36d3b4, "An error occurred while fetching the features.");
    }
  }
};
