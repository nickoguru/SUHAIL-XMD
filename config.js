const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="nicktech297@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254768539487";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_32_10_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMwLFxuICAgICAgICA2LFxuICAgICAgICA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDk0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA3OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4LFxuICAgICAgICA5OSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxLFxuICAgICAgICAzNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA3NixcbiAgICAgICAgMzUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NixcbiAgICAgICAgNjcsXG4gICAgICAgIDI1LFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDU3LFxuICAgICAgICA4NyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU5LFxuICAgICAgICA0NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAyLFxuICAgICAgICA3NixcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjcsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0NixcbiAgICAgICAgMjUxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTA4LFxuICAgICAgICA1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgNTEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNixcbiAgICAgICAgMTY1LFxuICAgICAgICA4NSxcbiAgICAgICAgMyxcbiAgICAgICAgODIsXG4gICAgICAgIDQ4LFxuICAgICAgICA1LFxuICAgICAgICA5MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDc0LFxuICAgICAgICAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzMsXG4gICAgICAgIDU2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MixcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjE0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImRuOG9uS0d6WVFiN1ZXd3VvYnJLRjVsZk9ac2IrYlVLTmpiTmlrbnpjeXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImduNkd2OUVOUjctQjN6ajdjT0J5YkFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzQxOWY5MTQtNGEwYS00YzljLTk0OTItMTJmODIzMDlmZGZlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzNyxcbiAgICAgIDY5LFxuICAgICAgMjQxLFxuICAgICAgMTMsXG4gICAgICA3LFxuICAgICAgMTU0LFxuICAgICAgMTgyLFxuICAgICAgMjAyLFxuICAgICAgMTAxLFxuICAgICAgMTEwLFxuICAgICAgMTUwLFxuICAgICAgNjQsXG4gICAgICAyOSxcbiAgICAgIDE0NyxcbiAgICAgIDc0LFxuICAgICAgMjQ5LFxuICAgICAgMTMzLFxuICAgICAgMTMyLFxuICAgICAgMzUsXG4gICAgICA2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOCxcbiAgICAgIDIyNyxcbiAgICAgIDk3LFxuICAgICAgMjM3LFxuICAgICAgNTMsXG4gICAgICAxNjcsXG4gICAgICAyMzYsXG4gICAgICAxMzQsXG4gICAgICAxNDUsXG4gICAgICA3LFxuICAgICAgMjM5LFxuICAgICAgMTA1LFxuICAgICAgMTksXG4gICAgICAxMjIsXG4gICAgICAxNDcsXG4gICAgICAyMDQsXG4gICAgICAxMzIsXG4gICAgICA3NCxcbiAgICAgIDEzOCxcbiAgICAgIDI0MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYQTJCWDVFU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzY4NTM5NDg3OjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi5bC85Y+k5ouJ5pavXCIsXG4gICAgXCJsaWRcIjogXCI4MTkzOTc1NTIwODgzODozN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLejM4TTRCRUxpdCtMZ0dHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFvK1dyVmtuOXp3RmlCMU1pcG85ZlNxT0dMLzRCT0NQb01wOElVbDkva3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSlYyUSszOGtjUm5saHhtSHREeWE4RlBtQ1dQalZsS3M4bktkWk5ncTdOcWpkZGcyOGRrekM3NUlkczQ4dG5FTGJ0K1dHWWd2eGxBOWdJSEkwWHJqQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR2lJTFJ1amNaYUdqV3VKeFhnd1RWQlhSaE02Zm9UMXErdSsxcC84dHFISmZHRFRHenFXTk5lS2xFdi8rdG5Tcld2eTkwby9HZ3JTMyt4NkFERmZzQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzY4NTM5NDg3OjM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzAwMjUxNTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPVEVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9URS5qc29uIjogIntcImtleURhdGFcIjpcImE3OU1lRi9kWUYzNVJyQXZSWUQwRm83eXljcDhsNjZPbzhRQ2VPeEtsV3c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDMzODYzNTk2LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjkzMjI1MjE1MjlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "nicktech",
  ownername:process.env.OWNER_NAME|| "nicktech",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
