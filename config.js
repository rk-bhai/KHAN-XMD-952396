const fs = require('fs');
const path = require('path');
const { getConfig } = require("./lib/configdb");

if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ===== BOT CORE SETTINGS =====
    SESSION_ID: process.env.SESSION_ID || "IK~H4sIAAAAAAAAA5VU25KiSBD9lYl6bWPlDhrREYsgKoiISnvZmIdqKKCUm1UFNk74Nfu8XzE/toE93T2xsTvRy1ORVZl5Ms/J/AaKElPkoBYMv4GK4AYy1B1ZWyEwBKM6jhEBPRBBBsEQ5PN1Y/KrkC5nykE9RNDFDr44buQKWTsxYXpsksn2tBpMtUdw64Gqfs5w+KuA4zIjvOaGyi5Km1Y6OVYbeCumt34wyq2VzcFcaFfCfuQ+glsXEWKCi2RcpShHBGYOapcQk8/BP7uLsO9jsya7jfdkmYPNSffqC7fYYgy3gnxU1FORTOws5z4Hf2m6Yd5w7VTl1P7pxeZCyE+brb0T1ptmwWFzEp13CyWxC/oKn+KkQNEsQgXDrP10371FMptJOZfLuBrgXabKudgY0UU9KJWTb7ldoGjxpV9b2exzwOP5fLLBzvjZ0txyzteiPjMLMlo+pC1WdIGW433ABXUi5f7PwJfkTSun/9X3sROffHHHhxf3eev3z02zlJ5a6zJ3UCC9FI5JeU2WubFFPwef2xnR4lqjyTHuS6ODB/e+73GBJfUf8OoYLYUNyaMTMq9++QEfspr8CqW0aR0tEdDD8zWbB07eX9uQvizSw4szEC0q6XG4NloiXK1AHyd9C/tPRcCqah8gyVxa+UorG9Ow562G7GjrV0dHss3k8V7RCbWzCAz5Ww8QlGDKCGS4LO42tQdg1KxRSBC7dxdoJ69hB7I2rlLoePUsavn1qFAnnLv0gzSabpx1C5+C/GqdHkEPVKQMEaUommLKStK6iFKYIAqGf3ztgQK9sFfeumwaL/ZAjAllQVFXWQmjN1bfb2EYlnXB1m0RGt0BETDkPsyIMVwktGtkXUASprhBRgoZBcMYZhS9l4gIisCQkRq9j61RRl3nD/uVy9u+CXogvzOCIzAEA34gC+JA4XmOH/LS7/S3SxcWVtVvBWKgBwrYvQarL86XUfr9z+9/gR7I7q4apymyMpAUQVYHaufc2W/voLscEWIQZxQMgeFC+bLYm+MZ0huNTib6ONGNRAcfRb7J5ZWP5IVczE0Zmb5z3h0uXilJHEuUUd8udmbyIKPafQ7YeZBv73z8MwgYgjVqTDjfO4o7mQTnJ+tcFG3AirMlB4sVfmg2SUoWrBw/iV66JYKkB6EoiUbGKWm6Gz8I7lOVMFngy/4UIsFSDm0zMi+PXbYINThEPycbG0gQiWxuyFEW7XqnrqYyNw0YzT18Lc7LyK2ZurjuN+eLNFK38kiKA7tUY1dV91VxKifJ4tgo1/08GOdef6aFUmCb+quQ74OU/Vhg+K6xjr7uN8bovg9+0PTvnLzh7dTG3Xo/uf5YLP8xnKO9CzWdU6Y+Z5wzITTPnreY770kbg/8RVrWO3Kc8HPYHLIK3G5fe6DKIItLkoMhoPkzBD1AyrqT7qyIy19kMnRuNvKTWVdtBinTP8Zhg3NEGcyrbmoVbSDyojh4fbUkZTWFNO32yGG1VNadtlu9qtYMsrfxAnr3uSkFt78B0FaCy3oHAAA=",  // Your bot's session ID (keep it secure)
    PREFIX: getConfig("PREFIX") || ".",  // Command prefix (e.g., "., / ! * - +")
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
        
