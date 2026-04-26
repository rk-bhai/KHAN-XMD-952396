const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' })
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VU2a6jOBD9lZZfE3UgbAHpSg0EEpKQhCUbo35wwBATtmBn4bbyNfM8X9E/NiJ3a41mWnf8ZJdVVafqnKofoCgxQVPUAOUHqGp8gRS1V9pUCChAO8cxqkEXRJBCoADHDDyZE/DMsREZimPm6hWHG3+V3HSBy+EoLULDkLnVYZM8gXsXVOd9hsPfBIyvzaHsnYShvImGorHKkyWUL4Qyu504CMyKLOOkYzWOveWfwL2NCHGNi8SoDihHNcymqFlCXH8Ofq7ZBbrUR9SZbKSTE2nFybyq4/1e4IpmSa4CfRaglT8PM+Zz8I/8shdy2WY1tYf7wHQjsjPEhj3uBbg4zDWI5gw6dSS29qwX+AQnBYqsCBUU0+bTfSfDuRNMBaafjYM1u+OcyAwDOUUu797yVHo+53wlm7OM5QafA54vwqK5GrOeWifEEj20aFyB6VXNxB0KkWkMmnKtct48MI1fgS/rN60c/0/fkc3RBuY83kiVox/jSF+rss9N+S1XywG7nRpRwJSLc9x3PgffJ/G2WWWwr6phrDvX2JVuqCMuTW66seP1KbgcD80w6R2Z3Qd8SM/171AyIj9zQ3PgP5eRbbt5fzaSdcls9rgadIqBMVtdVllE/GfBxO6GLXobHnvmRUjWkjddjoqOU6ioInjUFzLK3LJ9VM7S5OlR0RE1VgQU9t4FNUowoTWkuCxam8x0AYwuHgprRB/dBVQ98lEQ+eNe2bv6lX3bLno3ahAHrbA7Z3xfr05j1nX5gHkCXVDVZYgIQdEYE1rWjY0IgQkiQPnjexcU6EZfeGuzDViuC2JcE7oqzlVWwuiN1fdfGIbluaBeU4R6e0E1UJgPM6IUFwlpG3kuYB0e8AXpB0gJUGKYEfReIqpRBBRan9H72Opl1Hbe9TTVmBge6IL8wQiOgAJkVhb6nCyyLMMq7Dfy9dpGhVX1tUAUdEEB84fzl+kX7fDzz59/gS7IHp4DZiAKosyLfUGSJYX91prv75DbDBGiEGcEKECf7nEqHHVj2VnRwWA0Uo1E1RMVfJT4JpYXNuYpsTi8U42lW1SCS66OIF/TZrKtr/7BsAbDydQfZZFaOA82/hkEKOBcax6bS/O4Zze6v56L2mSRL7JDMCOoiUbyonfj8uHkaCUa6vtjZy7uNF8VsnitmcNlNe5thbQ6hlMaWNMlYyGPM6imPrXZInTBIfo12QWf0s2tNlZVVeRekJYzz5oOd6ueLWFJGnmirVkTT1eFZqWPQz3tHxiWlxLiniR/rXrEH5tiNpG56zGRhbmQit5pk15fZPwYo+x1feGHwlry2meM0WMbvLL0r5S8wW2lxty7v3i+bpX/mEzN30n6nM9VbcgEIlrtbWMRh9YAr8WBwbv6Um28463aOhNmDu73711QZZDGZZ23uzPfQ9AFdXludWsVcfmbTLpqW5qTWG2xGSRU/ZgFH+eIUJhXQGElSWJlVhDELsgbtao8CunbDAG1PbYpgfvfMAw4H18HAAA=",  // Your bot's session ID (keep it secure)
    PREFIX: getConfig("PREFIX") || ".",  /PPREFIX: getConfig(\"PREFIX\") || \".\",  /PREFIX: getConfig(\\\"PREFIX\\\") || \\\".\\\",  // Command prefix (e.g., \\\"., / ! * - +\\\")/ Command prefix (e.g., \"., / ! * - +\")REFIX: getConfig(\"PREFIX\") || \".\",  // Command prefix (e.g., \"., / ! * - +\")/ Command prefix (e.g., "., / ! * - +")
    CHATBOT: getConfig("CHATBOT") || "on", // on/off chat bot 
    BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "KHAN-MD",  // Bot's display name
    MODE: getConfig("MODE") || process.env.MODE || "public",        // Bot mode: public/private/group/inbox
    REPO: process.env.REPO || "https://github.com/JawadTechXD/KHAN-MD",  // Bot's GitHub repo
    BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys",  // Bot's BAILEYS

    // ===== OWNER & DEVELOPER SETTINGS =====
    OWNER_NUMBER: process.env.OWNER_NUMBER || "919523961101",  // Owner's WhatsApp number
    OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Jᴀᴡᴀᴅ TᴇᴄʜX",           // Owner's name
    DEV: process.env.DEV || "919523961101",                     // Developer's contact number
    DEVELOPER_NUMBER: '919523961101@s.whatsapp.net',            // Developer's WhatsApp ID

    // ===== AUTO-RESPONSE SETTINGS =====
    AUTO_REPLY: process.env.AUTO_REPLY || "true",              // Enable/disable auto-reply
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",// Reply to status updates?
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*KHAN MD VIEWED YOUR STATUS 🤖*",  // Status reply message
    READ_MESSAGE: process.env.READ_MESSAGE || "true",          // Mark messages as read automatically?
    REJECT_MSG: process.env.REJECT_MSG || "*📞 ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ 📵*",
    // ===== REACTION & STICKER SETTINGS =====
    AUTO_REACT: process.env.AUTO_REACT || "false",              // Auto-react to messages?
    OWNER_REACT: process.env.OWNER_REACT || "false",              // Auto-react to messages?
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",          // Use custom emoji reactions?
    CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",  // set custom reacts
    STICKER_NAME: process.env.STICKER_NAME || "R K Bhãí",     // Sticker pack name
    AUTO_STICKER: process.env.AUTO_STICKER || "false",          // Auto-send stickers?
    // ===== MEDIA & AUTOMATION =====
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",      // Auto-record voice notes?
    AUTO_TYPING: process.env.AUTO_TYPING || "false",            // Show typing indicator?
    MENTION_REPLY: process.env.MENTION_REPLY || "false",   // reply on mentioned message 
    MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/7zfdcq.jpg",  // Bot's "alive" menu mention image

    // ===== SECURITY & ANTI-FEATURES =====
    ANTI_DELETE: process.env.ANTI_DELETE || "true", // true antidelete to recover deleted messages 
    ANTI_CALL: process.env.ANTI_CALL || "false", // enble to reject calls automatically 
    ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true",    // Block bad words?
    ANTI_LINK: process.env.ANTI_LINK || "true",    // Block links in groups
    ANTI_VV: process.env.ANTI_VV || "true",   // Block view-once messages
    DELETE_LINKS: process.env.DELETE_LINKS || "true",          // Auto-delete links?
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same", // inbox deleted messages (or 'same' to resend)
    ANTI_BOT: process.env.ANTI_BOT || "true",
    PM_BLOCKER: process.env.PM_BLOCKER || "true",

    // ===== BOT BEHAVIOR & APPEARANCE =====
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",  // Bot description
    PUBLIC_MODE: process.env.PUBLIC_MODE || "true",              // Allow public commands?
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",        // Show bot as always online?
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates?
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // VIEW to status updates?
    AUTO_BIO: process.env.AUTO_BIO || "true", // ture to get auto bio 
    WELCOME: process.env.WELCOME || "true", // true to get welcome in groups 
    GOODBYE: process.env.GOODBYE || "true", // true to get goodbye in groups 
    ADMIN_ACTION: process.env.ADMIN_ACTION || "true", // true if want see admin activity 
};
        
