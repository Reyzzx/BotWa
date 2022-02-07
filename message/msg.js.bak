//"use strict";
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys-md')
//Lib
const { color, bgcolor } = require('../lib/color')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, fetchText, getBuffer, format, logic, generateProfilePicture, parseMention, getRandom } = require('../lib/myfunc')
//const { simple, smsg, getBuffer, fetchJson, fetchText, getRandom, getGroupAdmins, runtime, sleep } = require("../lib/myfunc");
const { webp2mp4File } = require("../lib/convert")

//Module
const fs = require ("fs")
const moment = require("moment-timezone");
const util = require("util")
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const xfar = require('xfarr-api');
const axios = require('axios')
const hxz = require("hxz-api")
const yts = require("yt-search")
const speed = require("performance-now")
const googleIt = require('google-it')
const brainly = require('brainly-scraper')
const os = require('os')
const child = require("child_process")
const translate = require('@vitalets/google-translate-api')

//Exif&Stiker
const { exif } = require("./../lib/exif")
const WSF = require("wa-sticker-formatter");

//Scrape
const { tiktok, tiktok2 } = require("../scrape/tiktok.js")
const { igdl } = require('../scrape/igdl.js')
const { twitter } = require('../scrape/twitter.js')
const { alldownload } = require('../scrape/downloader.js')
const { ytmp3, ytmp4 } = require('../scrape/yt.js')
const { y2mateA, y2mateV } = require('../scrape/y2mate.js')
const { Gempa, Cuaca} = require("../scrape/bmkg")
const { lirikLagu } = require('../scrape/lirik.js')
const { chord } = require('../scrape/chord.js')
const { igstory } = require('../scrape/igstory.js')

//Y2mate Eror
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


//Tebal&Renggang
let mono = '*'
let mini = '```'

// Database
let mess = JSON.parse(fs.readFileSync('./message/response.json'));
let set = JSON.parse(fs.readFileSync("./config.json"));


moment.tz.setDefault("Asia/Jakarta").locale("id");
module.exports = async(conn, msg, m, setting) => {
	try {
		let { ownerNumber, botName } = setting
		let thumbnailNya = fs.readFileSync(setting.pathimg)
		let { allmenu } = require('./help')
		const jam = moment.tz('asia/jakarta').format('HH:mm:ss')
		let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
		const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
		const type = Object.keys(msg.message)[0]
		const content = JSON.stringify(msg.message)
		const fromMe = msg.key.fromMe
		const from = msg.key.remoteJid
		//const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : ''
		const chats = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'documentMessage') && msg.message.documentMessage.caption ? msg.message.documentMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : (type == 'buttonsResponseMessage' && msg.message.buttonsResponseMessage.selectedButtonId) ? msg.message.buttonsResponseMessage.selectedButtonId : (type == 'templateButtonReplyMessage') && msg.message.templateButtonReplyMessage.selectedId ? msg.message.templateButtonReplyMessage.selectedId : (type === 'listResponseMessage') && msg.message.listResponseMessage.singleSelectReply.selectedRowId ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : '';
                const toJSON = j => JSON.stringify(j, null,'\t')
		const Json = j => JSON.stringify(j, null,'\t')
		const jsonformat = j => JSON.stringify(j, null,'\t')
		if (conn.multi) {
			var prefix = /^[°•<π÷×¶∆£¢€¥®™✓Z=|~!?#$%^&.\/\\©^]/.test(chats) ? chats.match(/^[°•><π÷×¶∆£¢€¥®™✓Z=|~!?#$%^&.\/\\©^]/gi)[0] : '-'
		} else {
			if (conn.nopref) {
				prefix = ''
			} else {
				prefix = conn.prefa
			}
		}
		const args = chats.split(' ')
		const command = chats.toLowerCase().split(' ')[0] || ''
		const isCmd = command.startsWith(prefix)
		const isGroup = msg.key.remoteJid.endsWith('@g.us')
		const isPrivate = msg.key.remoteJid.endsWith('@s.whatsapp.net')
		const sender = isGroup ? (msg.key.participant ? msg.key.participant : msg.participant) : msg.key.remoteJid
		const isOwner = ownerNumber.includes(sender)
                const zahra = ["6285376700928@s.whatsapp.net"]
                const isZahra = zahra.includes(sender)
		const pushname = msg.pushName || "Kak"
		const q = chats.slice(command.length + 1, chats.length)
		const body = chats.startsWith(prefix) ? chats : ''
		const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net'
		const groupMetadata = isGroup ? await conn.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.id : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		//const isGroupAdmins = groupAdmins.includes(sender) || false
                const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
		
		const metadataGroups = isGroup ? await conn.groupMetadata(from) : '';
		const countAdminsGroups = isGroup ? metadataGroups.participants.map(map => map.admin == null).filter(fill => fill == true).length : '';
		const getParticipants = isGroup ? metadataGroups.participants : '';

                //Only Link
            const Link = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''
            const Wannn = Link.slice(0).trim().split(/ +/).shift().toLowerCase()
		
		//Auto Read/Auto Centang Biru
	    conn.sendReadReceipt(from, sender, [msg.key.id])
		
		
		// Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        
        
		async function downloadAndSaveMediaMessage (type_file, path_file) {
			if (type_file === 'image') {
				var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
			} else if (type_file === 'video') {
				var stream = await downloadContentFromMessage(msg.message.videoMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
			} else if (type_file === 'sticker') {
				var stream = await downloadContentFromMessage(msg.message.stickerMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
			} else if (type_file === 'audio') {
				var stream = await downloadContentFromMessage(msg.message.audioMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.audioMessage, 'audio')
				let buffer = Buffer.from([])
				for await(const chunk of stream) {
					buffer = Buffer.concat([buffer, chunk])
				}
				fs.writeFileSync(path_file, buffer)
			}
		}
		

const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return conn.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return conn.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: mek })
            }
            if(mime.split("/")[0] === "image"){
                return conn.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return conn.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "audio"){
                return conn.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: m })
            }
        } 
		
                async function sendPlay(from, query) {
                  var url = await yts(query)
                  url = url.videos[0].url
                  hxz.youtube(url).then(async(data) => {
                  var button = [{ buttonId: `!ytmp3 ${url}`, buttonText: { displayText: `🎵 Audio (${data.size_mp3})` }, type: 1 }, { buttonId: `!ytmp4 ${url}`, buttonText: { displayText: `🎥 Video (${data.size})` }, type: 1 }]
                  conn.sendMessage(from, { caption: `*Title :* ${data.title}\n*Quality :* ${data.quality}\n*Url :* https://youtu.be/${data.id}`, location: { jpegThumbnail: await getBuffer(data.thumb) }, buttons: button, footer: 'Pilih Salah Satu Button Dibawah⬇️', mentions: [sender] })
                  }).catch((e) => {
                    conn.sendMessage(from, { text: mess.error.api }, { quoted: msg })
                    ownerNumber.map( i => conn.sendMessage(from, { text: `Send Play Error : ${e}` }))
                  })
                }
const sendHidetag = async function(from, text){
var h = (await conn.groupMetadata(from)).participants.map(a => a.id)
conn.sendMessage(from, { text: text, mentions: h})
}
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
		}
		const reply = (teks) => {
                        conn.sendPresenceUpdate('composing', from)
			conn.sendMessage(from, { text: teks }, { quoted: msg })
		}
		const textImg = (teks) => {
			return conn.sendMessage(from, { text: teks, jpegThumbnail: fs.readFileSync(setting.pathimg) }, { quoted: msg })
		}
		const sendMess = (hehe, teks) => {
			conn.sendMessage(hehe, { text, teks })
		}
		const mentions = (teks, memberr, id) => {
			(id == null || id == undefined || id == false) ? conn.sendMessage(from, teks.trim(), "extendedTextMessage", { contextInfo: { "mentionedJid": memberr } }) : conn.sendMessage(from, teks.trim(), "extendedTextMessage", { quoted: msg, contextInfo: { "mentionedJid": memberr } });
		};
		const buttonWithText = (from, text, footer, buttons) => {
			return conn.sendMessage(from, { text: text, footer: footer, templateButtons: buttons })
		}
		const sendContact = (jid, numbers, name, quoted, mn) => {
			let number = numbers.replace(/[^0-9]/g, '')
			const vcard = 'BEGIN:VCARD\n' 
			+ 'VERSION:3.0\n' 
			+ 'FN:' + name + '\n'
			+ 'ORG:;\n'
			+ 'TEL;type=CELL;type=VOICE;waid=' + number + ':+' + number + '\n'
			+ 'END:VCARD'
			return conn.sendMessage(from, { contacts: { displayName: name, contacts: [{ vcard }] }, mentions : mn ? mn : []},{ quoted: quoted })
		}
		
		const templateButtons = [
			{ callButton: {displayText: `Call Owner!`, phoneNumber: `+6285770137725`} },
			{ urlButton: { displayText: `Website!`, url : `http://api-xcoders.xyz/`} },
			{ quickReplyButton: { displayText: `🧑 Owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `💰Sewa Bot `, id: `${prefix}donate` } },
			{ quickReplyButton: { displayText: `📶 Statistic`, id: `${prefix}stat` } }
		]
        
		const isImage = (type == 'imageMessage')
		const isVideo = (type == 'videoMessage')
		const isSticker = (type == 'stickerMessage')
		const isQuotedMsg = (type == 'extendedTextMessage')
		const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
		const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
		const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
		const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
		const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false
		
		if (chats.startsWith('>') && isOwner) {
		  	try {
						const evaling = await eval(`;(async () => {
							${chats.slice(2)}
							})();`);
						const utilites = await util.format(evaling);
						reply(utilites);
					} catch (e) {
						reply(util.format(e));
					}
				}
		
//Deteksi Hidetag
if (
      isGroup && !m.key.fromMe && m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
        groupMembers.length
    ) {
      console.log(
        color("[ANTI-HIDETAG]", "red"),
        color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
      );
      nkh = sender
     conn.sendMessage(from, { text: `${mono}Terdeteksi @${nkh.split("@s.whatsapp.net")[0]} Melakukan Hidetag!${mono}`, contextInfo: { mentionedJid: [nkh]} }, { quoted: m })
}

		if (chats.startsWith('$') && isOwner) {

exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if (stdout) {
reply(`${stdout}`)
}
})
}

                //CekPing
                if(Wannn.includes('cekping')){
                if (!isOwner) return
                reply(`${moment().millisecond()} ms`)
}
		// Logs;
		if (!isGroup && isCmd) console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
		if (isGroup && isCmd) console.log('->[\x1b[1;32mCMD\x1b[1;37m]', color(moment(msg.messageTimestamp *1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))

                //NoPref
             if (/https:\/\/.+\.tiktok.+/g.test(chats) && !m.isBaileys && !chats.startsWith(prefix)) {
             url = chats.match(/https:\/\/.+\.tiktok.+/g)[0]
             reply(mess.wait)
             res = await tiktok2(url)
conn.sendMessage(from, {
				 video: { url: res.data.video },
				 caption: `✅Sukses Download Video Tiktok\n\nJika ingin mengubah ke audio/music, tekan tombol dibawah, jika tidak terlihat ketik ${prefix}tiktokaudio ${url}`,
				 buttons: [{buttonId: `${prefix}tiktokaudio ${url}`, buttonText: { displayText: "Audio" }, type: 1 }],
				 footer: "Create by Sneazy-Bot"
			      }, { quoted: msg }).catch(() => reply(mess.error.api))
			}

		switch(command) {
case prefix+'tr': case prefix+'translate': 
if (!q) return reply(`Contoh:\n${command} [Kode Bahasa] house\nKode bahasa bisa cek di https://cloud.google.com/translate/docs/languages`)
kode_negara = args[1]
teks = m.message.extendedTextMessage.contextInfo.quotedMessage.conversation || args[0]
translate(`${teks}`,{to:`${kode_negara}`}).then( res => {
ini_txt = `*Translate*
                    
Language detected : ${res.from.language.iso}
Translate : ${res.text}`
reply(ini_txt)
})
break
case prefix+'igs': case prefix+'igstory': case prefix+'instastory':
if (!q) return reply(`Contoh:\n${command} ekooju`)
reply(mess.wait)
igstory(q).then(data => {
if(data.medias.length > 10) return  reply(`Maaf ${pushname} file media terlalu banyak, maksimal 10`)
reply(`✅Instastory Download From IG\n\n${mono}[ Info Account ]${mono}\n≻ Username: ${data.user.username}\n≻Jumlah Media: ${data.medias.length}\n≻ Followers: ${data.user.followers}\n≻ Following: ${data.user.following}\n≻ Bio: ${data.user.biography}`)
for (let i of data.medias) {
				 if (i.fileType === "mp4") {
				   conn.sendMessage(from, { video: { url: i.downloadUrl }, caption: mess.success}, {quoted: msg })
				 } else if (i.fileType === "jpg") {
				   conn.sendMessage(from, { image: { url: i.downloadUrl }, caption: mess.success}, {quoted: msg })
			         }
			       }
}).catch(err => reply(mess.error.api))
break
case prefix+'attp':
if (args.length === 1) return reply(`Contoh:\n${command} ${pushname}`)
conn.sendMessage(from, {sticker: await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)}, {quoted: m}).catch(err => reply(mess.error.api))
break
case prefix+'couple': case prefix+'ppcouple': case prefix+'cople':
cpnya = fs.readFileSync('./scrape/couple.js');
                 jsonData = JSON.parse(cpnya);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
sendFileFromUrl(m.chat, randKey.male, 'Cowo', m)
sendFileFromUrl(m.chat, randKey.female, 'cewe', m)
break
case prefix+'yts': case prefix+'ytsearch':
if (args.length === 1) return reply(`Contoh:\n${command} bukti Virgoun`)
let list_rows = [];
            const data = await yts(q);
for(let a of data.all) {
list_rows.push({
title: a.title, description: `Channel: ${a.author.name} | Durasi: ${a.duration}`, rowId: `${prefix}yt ${a.url}`
})
}
    const button = {
        title: `Hasil Pencarian Dari ${q}`,
        description: "Silahkan Tap Tombol Dibawah!",
        footerText: `Create by Sneazy-Bot`,
        buttonText: 'Tap Disini!',
        listType: 'SINGLE_SELECT',
        sections: [
            {
                title: "Hasil Pencarian", 
                rows: list_rows
            }
        ]
        }
        const templateList = generateWAMessageFromContent(from, proto.Message.fromObject({ "listMessage": button }), {});
        conn.relayMessage(from, templateList.message, { messageId: templateList.key.id });
break
case prefix+'meadmin':
if (!isOwner) return 
if (!m.isGroup) return reply(mess.OnlyGrup)
conn.groupParticipantsUpdate(m.chat, [sender], 'promote')
atmnt = `${mono}Succes, @${sender.split("@s.whatsapp.net")[0]} anda telah menjadi admin di group ${groupName}${mono}`
conn.sendMessage(from, { text: atmnt, contextInfo: { mentionedJid: [sender]} }, { quoted: m })
break
case prefix+'demoteme':
if (!isOwner) return 
if (!m.isGroup) return reply(mess.OnlyGrup)
conn.groupParticipantsUpdate(m.chat, [sender], 'demote')
atmnt = `${mono}Succes, @${sender.split("@s.whatsapp.net")[0]} anda telah di demote di group ${groupName}${mono}`
conn.sendMessage(from, { text: atmnt, contextInfo: { mentionedJid: [sender]} }, { quoted: m })
break
case prefix+'listadmin': case prefix+'adminlist': 
if (!m.isGroup) return reply(mess.OnlyGrup)
          if (!isGroupAdmins) return reply(mess.GrupAdmin)
let numberAdmin = [];
				var teks = `\t\tAdmin Group *${groupName}*\n\n`;
				for (let adm of getParticipants) {
					if (adm.admin !== null) {
						numberAdmin.push(adm.id);
						teks += `[+] @${adm.id.split("@")[0]}\n`;
					}
				}
			conn.sendMessage(from, { text: teks, mentions: numberAdmin }, { quoted: m });
			break
case prefix+'infoall': case prefix+'tagall': case prefix+'mentionall':
                if (!m.isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins) return reply(mess.GrupAdmin)
                 let tekss = `══✪〘 *👥 Mention All, Pesan : ${q ? q : 'Tidak Ada'} * 〙✪══\n\n`
		      	for (let mem of groupMembers) {
		            tekss += `࿃➡️ @${mem.id.split('@')[0]}\n`
				}
                teks += `\n⋙ ${botName} ⋘`
conn.sendMessage(from, { text: tekss, mentions: groupMembers.map(a => a.id) }, { quoted: m })
break
case prefix+'chord':
if (args.length === 1) return reply(`Contoh:\n${command} bukti Virgoun`)
chord(q).then(res => 
reply(`Chord dari lagu ${q}\n${res.chord}`)).catch(err => {
	reply(`Chord Dari Lagu ${q} tidak ditemukan!!!`)
	console.log(err)
})
break
case prefix+'lirik': case prefix+'lyrics':
if (args.length === 1) return reply(`Contoh:\n${command} bukti Virgoun`)
lirikLagu(q).then((res) => {
let lirik = `「  *Lirik Dari Lagu ${q}  」

${res[0].result}
`
reply(lirik)
}).catch(err => {
	reply(`Lirik Dari Lagu ${q} tidak ditemukan!!!`)
	console.log(err)
})
break
case prefix+'infogempa': case prefix+'gempa': 
Gempa().then( v => 
conn.sendMessage(m.chat, { image: { url: v.map }, caption: `${mono}Info Gempa${mono}\n• Waktu: *${v.waktu}*\n• Lintang: *${v.lintang}*\n• Bujur: *${v.bujur}*\n• Magnitudo: *${v.magnitudo}*\n• Kedalaman: *${v.kedalaman}*\n• Wilayah: *${v.wilayah}*\n` }, { quoted: m})
)
break
case prefix+'infocuaca': case prefix+'cuaca': 
if (args.length === 1) return reply(`Contoh:\n${command} surabaya`)
Cuaca(q).then( v => {
reply(`✅Hasil Pencarian Cuaca ${q}\n• Daerah: *${v.Name}*\n• Longlitude: *${v.Longitude}*\n• Latitude: *${v.Latitude}*\n• Suhu: *${v.Suhu}*\n• Angin: *${v.Angin}*\n• Kelembapan: *${v.Kelembaban}*\n• Cuaca: *${v.Cuaca}*\n• Keterangan: *${v.Keterangan}*\n• Udara: *${v.Udara}*`)
})
		break
case prefix+'style': case prefix+'styletext': case prefix+'styleteks':
if (args.length === 1) return reply(`Contoh:\n${command} ${pushname}`)
try {
const cheerio = require('cheerio')
const fetch = require('node-fetch')
let respon = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(args[1]))
 let html = await respon.text()
$ = cheerio.load(html)
reply($('table').text())
} catch (e) {
	reply(mess.error.api)
}
break
			  case prefix+'del': case prefix+'delete': case prefix+'d':
			    if (!isGroup) return reply(mess.OnlyGrup)
			if (!m.quoted) return reply('Reply pesan!')
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return reply(`Reply pesan bot dengan caption ${command}`)
                conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            break
case prefix+'brainly': case prefix+'berainly': case prefix+'branly':
if (args.length === 1) return reply(`Contoh:\n${command} apa yang dimaksud gotong royong`)
brainly(args[1]).then(res => {
var teks = '❉───────────────────────❉\n'
for (let Y of res.data) {
teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉───────────────────────❉\n`
}
reply(teks.trim())
}).catch(e => {
				reply(mess.error.api)
							})
							break
case prefix+'cekfxc7': case prefix+'cekfxc7key':
if (!q) return reply(`Contoh:\n${command} beta`)
let p = await fetchJson(`https://api-xcoders.xyz/api/cekkey?apikey=${q}`)
reply(`Status Fxc7 Api
•Premium: ${p.result.premium ? 'Ya' : 'Tidak'}
•Apikey: ${p.result.apikey}
•Username: ${p.result.username}
•Email: ${p.result.email}
•Limit: ${p.result.limit}
•Expired: ${p.result.expired}
•Since: ${p.result.since}`).catch( err => {
reply(`eror`)
})
break
case prefix+'google':
if (args.length === 1) return reply(`Contoh:\n${command} berita terkini`)
googleIt({ 'query': q }).then(results => {
				let vars = `_*Hasil Pencarian : ${q}*_\n`
				for (let i = 0; i < results.length; i++) {
				vars +=  `\n═════════════════\n\n*Judul* : ${results[i].title}\n\n*Deskripsi* : ${results[i].snippet}\n\n*Link* : ${results[i].link}\n\n`
				}
				reply(vars)
				//limitAdd(sender)
				}).catch(e => {
				console.log(e)
				reply(mess.error.api)
				})
				break
case prefix+'hidetag': case prefix+'ht':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins) return reply(mess.GrupAdmin)
if (args.length === 1) return reply(`Contoh:\n${command} halo semua`)
var h = (await conn.groupMetadata(from)).participants.map(a => a.id)
conn.sendMessage(from, { text: q, mentions: h})
break
case prefix+'ht2':
if (!isGroup) return reply(mess.OnlyGrup)
if (!isZahra) return reply(`${mono}Perintah ini hanya dapat diakses oleh Zahra!${mono}`)
if (args.length === 1) return reply(`Contoh:\n${command} halo semua`)
var h = (await conn.groupMetadata(from)).participants.map(a => a.id)
conn.sendMessage(from, { text: q, mentions: h})
break
case prefix+'cekall':
   if (!isOwner) return 
  let getGroups = await conn.groupFetchAllParticipating();
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1]);
let list_group = `*LIST-GROUP*\n\nTotal: *${groups.length}*\n\n`
for (let x of groups) {
list_group += `GroupID : ${x.id}\nGroupName : ${x.subject}\n\n`
}
reply(list_group.trim())
break
case prefix+'link': case prefix+'linkgc': case prefix+'linkgrup': case prefix+'linkgroup':
                if (!m.isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                let response = await conn.groupInviteCode(from)
reply(`${mono}https://chat.whatsapp.com/${response}\n\nLink Group : ${groupName}${mono}`)
break
case prefix+'group': case prefix+'grup':
                if (!m.isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return reply(mess.BotAdmin)
                if (args.length === 1) return reply(`Contoh:\n${command} buka/tutup`)
                if (args[1].toLowerCase() === 'buka'){
                    await conn.groupSettingUpdate(from, 'not_announcement')
					reply(`*Sukses membuka grup ${groupName}*`)
                } else if (args[1].toLowerCase() === 'tutup'){
                    await conn.groupSettingUpdate(from, 'announcement')
                    reply(`*Sukses menutup grup ${groupName}*`)
                } else {
                    reply(`Contoh:\n${command} buka/tutup`)
                }
            break
            
case prefix+'revoke':
                if (!isGroup) return reply(mess.OnlyGrup)
                if (!isGroupAdmins) return reply(mess.GrupAdmin)
                if (!isBotGroupAdmins) return m.reply(mess.BotAdmin)
                conn.groupRevokeInvite(from)
                reply(`*Sukses reset link grup ${groupName}*`)
            break
case prefix+'join': case prefix+'joingc': {
                if (!isOwner) return 
                if (!q) return reply(`Contoh\n${command} https://chat.whatsapp.com/`)
                if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('https://chat.whatsapp.com')) return reply(mess.error.Iv)
                try {
                let query = q.split('https://chat.whatsapp.com/')[1]
                let data = await conn.groupAcceptInvite(query)
                await reply(toJSON(data))
                } catch (err) {
                	reply("Error: " + err)
               }}
            break
 case prefix+'waifu':
 try {
 var res = await fetchJson(`https://api.waifu.pics/sfw/waifu`)
conn.sendMessage(from, { image: { url: `${res.url}` }, caption: `${res.url}`}, { quoted: msg })
} catch(err) {
	console.log(err)
	reply(mess.error.api)
	}
	break
case prefix+'loli':
try {
conn.sendMessage(from, { image: { url: `https://api-xcoders.xyz/api/anime/loli?apikey=${set.Fxc7}` }, caption: mess.success}, { quoted: msg })
} catch(err) {
	console.log(err)
	reply(mess.error.api)
	}
	break
case prefix+'setexif':
			if (!isOwner) return
			await exif(q.split('|')[0], q.split('|')[1])
			reply(mess.success)
			break
/*case prefix+'menu': case prefix+'help': case prefix+'mnu':
				buttonWithText(from, (allmenu(conn, prefix, pushname, ucapanWaktu)), `${botName} © 2021`, templateButtons)
				break*/

case prefix+'menu': case prefix+'help': case prefix+'mnu':
let anu = allmenu(conn, prefix, pushname, ucapanWaktu)
                let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/foto2.jpg') }, { upload: conn.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: anu,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Website!',
                                    url: 'http://api-xcoders.xyz/'
                                }
                            }, {
                                callButton: {
                                    displayText: 'Call Owner!',
                                    phoneNumber: '+6281528743676'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '🧑 Owner',
                                    id: `${prefix}owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: '💰Sewa Bot',
                                    id: `${prefix}donate`
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: '📶 Runtime',
                                    id: `${prefix}runtime`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                conn.relayMessage(m.chat, template.message, { messageId: template.key.id })
                break
			/*case prefix+'allmenu':
			    textImg(allmenu(conn, prefix, pushname))
			    break*/
			case prefix+'test':
		            reply('Test, sukses respon!')
			    break
			case prefix+'runtime':
			reply(`Bot Aktif Sejak\n${runtime(process.uptime())}`)
			    break
			case prefix+'speed': case prefix+'ping': case prefix+'stat': case prefix+'statistic':
                let timestamp = speed()

                let latensi = speed() - timestamp

                let neww = performance.now()

                let oldd = performance.now()

               let respon = `

Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}



💻 Info Server

RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}



_NodeJS Memory Usaage_

${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}



${cpus[0] ? `_Total CPU Usage_

${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}

_CPU Core(s) Usage (${cpus.length} Core CPU)_

${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}

                `.trim()

                m.reply(respon)

            break
case prefix+'donate': case prefix +'donasi': case prefix+'hargasewa':
tekssa = `Halo @${sender.split("@s.whatsapp.net")[0]} 👋
Berikut adalah list harga untuk sewa bot ini
*💸Payment💰*
*•Gopay:* 085852353712
*•Dana:* 085852353712
*•Ovo:* 085852353712
*•Pulsa:* 081528743676(Up +5)

*Note:
=>Untuk Sewa/Memasukkan Bot Kedalam Group, cukup membayar Rp20.000
=>Pembayaran menggunakan payment diatas
=>Hitungan sewa bot atau user premium adalah bulanan/1bulan (Tidak Ada Permanent, kecuali jika ada perpanjangan harga sewa)
=>Bot Otomatis keluar jika sudah mencapai masa aktif*`
conn.sendMessage(from, { text: tekssa, contextInfo: { mentionedJid: [sender]} }, { quoted: m })
break
			case prefix+'owner':
			    sendContact(from, '6281528743676', 'Pemilik Bot Ini', m)
			    break
	/*<------- Converter/Tools ------->*/
			/*case prefix+'sticker': case prefix+'stiker': case prefix+'s':
			    if (isImage || isQuotedImage) {
		               var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, 'image')
			       var buffer = Buffer.from([])
			       for await(const chunk of stream) {
			          buffer = Buffer.concat([buffer, chunk])
			       }
			       var rand1 = 'sticker/'+getRandom('.jpg')
			       var rand2 = 'sticker/'+getRandom('.webp')
			       fs.writeFileSync(`./${rand1}`, buffer)
			       ffmpeg(`./${rand1}`)
				.on("error", console.error)
				.on("end", () => {
				  exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				    conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
				    fs.unlinkSync(`./${rand1}`)
			            fs.unlinkSync(`./${rand2}`)
			          })
				 })
				.addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				.toFormat('webp')
				.save(`${rand2}`)
			     } else if (isVideo || isQuotedVideo) {
				 var stream = await downloadContentFromMessage(msg.message.imageMessage || msg.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, 'video')
				 var buffer = Buffer.from([])
				 for await(const chunk of stream) {
				   buffer = Buffer.concat([buffer, chunk])
				 }
			         var rand1 = 'sticker/'+getRandom('.mp4')
				 var rand2 = 'sticker/'+getRandom('.webp')
			         fs.writeFileSync(`./${rand1}`, buffer)
			         ffmpeg(`./${rand1}`)
				  .on("error", console.error)
				  .on("end", () => {
				    exec(`webpmux -set exif ./sticker/data.exif ./${rand2} -o ./${rand2}`, async (error) => {
				      conn.sendMessage(from, { sticker: fs.readFileSync(`./${rand2}`) }, { quoted: msg })
				      fs.unlinkSync(`./${rand1}`)
				      fs.unlinkSync(`./${rand2}`)
				    })
				  })
				 .addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"])
				 .toFormat('webp')
				 .save(`${rand2}`)
                              } else {
			        reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`)
			      }
                              break*/
                           case prefix+'sticker': case prefix+'stiker': case prefix+'s':
   if ((type === "imageMessage") || isQuotedImage) {
						var downloadContentMedia = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.imageMessage, "image");
						 var buffer = Buffer.from([]);
						 for await(const chunk of downloadContentMedia) {
								buffer = Buffer.concat([buffer, chunk]);
						 }
						 var filenameS = "./sticker/"+ getRandom(".jpg");
						 var filenameW = "./sticker/"+ getRandom(".webp");
						 fs.writeFileSync(filenameS, buffer);
						 ffmpeg(filenameS).on("error", console.error).on("end", () => {
							 child.exec(`webpmux -set exif ./sticker/data.exif ${filenameW} -o ${filenameW}`, async (error) => {
								 conn.sendMessage(from, { sticker: fs.readFileSync(filenameW) }, { quoted: m });
								 fs.unlinkSync(filenameS);
								 fs.unlinkSync(filenameW);
							 });
				 }).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"]).toFormat('webp')
				.save(`${filenameW}`);
					 } else if ((type === "videoMessage") || isQuotedVideo) {
				 var downloadContentMedia = await downloadContentFromMessage(m.message.imageMessage || m.message.extendedTextMessage?.contextInfo.quotedMessage.videoMessage, "video");
				 var buffer = Buffer.from([])
				 for await(const chunk of downloadContentMedia) {
					 buffer = Buffer.concat([buffer, chunk]);
				 }
				 var filenameS = "./sticker/"+ getRandom(".mp4")
				 var filenameW = "./sticker/"+ getRandom(".webp")
				 fs.writeFileSync(filenameS, buffer);
				 ffmpeg(filenameS).on("error", console.error).on("end", () => {
					 child.exec(`webpmux -set exif ./sticker/data.exif ${filenameW} -o ${filenameW}`, async (error) => {
							conn.sendMessage(from, { sticker: fs.readFileSync(filenameW) }, { quoted: m });
							fs.unlinkSync(filenameS);
							fs.unlinkSync(filenameW);
					 });
				 }).addOutputOptions(["-vcodec", "libwebp", "-vf", "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse"]).toFormat('webp').save(filenameW);
					 } else {
						 reply(`Kirim gambar/vidio dengan caption ${command} atau balas gambar/vidio yang sudah dikirim\nNote : Maximal vidio 10 detik!`);
					 }
					 break;
			case prefix+'toimg': case prefix+'toimage':
			case prefix+'tovid': case prefix+'tovideo': case prefix+'tomp4':
			    if (!isQuotedSticker) return reply(`Reply stikernya!`)
			    var stream = await downloadContentFromMessage(msg.message.extendedTextMessage?.contextInfo.quotedMessage.stickerMessage, 'sticker')
			    var buffer = Buffer.from([])
			    for await(const chunk of stream) {
			       buffer = Buffer.concat([buffer, chunk])
			    }
			    var rand1 = 'sticker/'+getRandom('.webp')
			    var rand2 = 'sticker/'+getRandom('.png')
			    fs.writeFileSync(`./${rand1}`, buffer)
			    if (isQuotedSticker && msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated !== true) {
			    exec(`ffmpeg -i ./${rand1} ./${rand2}`, (err) => {
			      fs.unlinkSync(`./${rand1}`)
			      if (err) return reply(mess.error.api)
			      conn.sendMessage(from, { image: { url: `./${rand2}` }}, { quoted: msg })
			   //   fs.unlinkSync(`./${rand2}`)
			    })
			    } else {
			    reply(mess.wait)
		            webp2mp4File(`./${rand1}`).then( data => {
			     // fs.unlinkSync(`./${rand1}`)
			      conn.sendMessage(from, { video: { url: data.result }}, { quoted: msg })
			    })
			    }
			    break
	/*<-------- Downloader ------->*/
			case prefix+'tiktok': case prefix+'tik': case prefix+'tiktoknowm': case prefix+'tiktoknowatermark':
			    if (args.length < 2) return reply(`Contoh:\n${command} https://vt.tiktok.com/ZSJhvu1AE/`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    res = await tiktok2(args[1])
conn.sendMessage(from, {
				 video: { url: res.data.video },
				 caption: `✅Sukses Download Video Tiktok\n\nJika ingin mengubah ke audio/music, tekan tombol dibawah, jika tidak terlihat ketik ${prefix}tiktokaudio ${q}`,
				 buttons: [{buttonId: `${prefix}tiktokaudio ${args[1]}`, buttonText: { displayText: "Audio" }, type: 1 }],
				 footer: "Create by Sneazy-Bot"
			      }, { quoted: msg })
			    .catch(() => reply(mess.error.api))
			    break
			case prefix+'twitter': case prefix+'twitterdl':
			    if (args.length < 2) return reply(`Contoh:\n${command} https://twitter.com/gofoodindonesia/status/1229369819511709697`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('twitter')) return reply(mess.error.Iv)
			reply(mess.wait)
			twitter(args[1]).then( data => {
conn.sendMessage(from, {
				 video: { url: data.HD },
				 caption: `✅Sukses Download Video Twitter
•Desk: ${data.desc}\n\n${mono}Jika ingin melihat kembali menu bot, silahkan klik tombol dibawah, jika tidak terlihat ketik ${prefix}menu${mono}`,
				 buttons: [{buttonId: `${prefix}mnu`, buttonText: { displayText: "≻ Back To Menu!" }, type: 1 }],
				 footer: "Create by Sneazy-Bot"
			      }, { quoted: msg })
 }).catch(() => reply(mess.error.api))
 break
 case prefix+'fbdl': case prefix+'fb': case prefix+'facebook':
                if (args.length < 2) return reply(`Contoh:\n ${command} https://id-id.facebook.com/SamsungGulf/videos/video-bokeh/561108457758458/`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('facebook')) return reply(mess.error.Iv)
			    try {
                reply(mess.wait)
			    alldownload(args[1]).then( data => {
conn.sendMessage(from, {
				 video: { url: data.medias[0].url },
				 caption: `✅Sukses Download Video Facebook\n\n${mono}Jika ingin melihat kembali menu bot, silahkan klik tombol dibawah, jika tidak terlihat ketik ${prefix}menu${mono}`,
				 buttons: [{buttonId: `${prefix}mnu`, buttonText: { displayText: "≻ Back To Menu!" }, type: 1 }],
				 footer: "Create by Sneazy-Bot"
			      }, { quoted: msg })
 })
 } catch(err) {
   data = await fetchJson(`https://masgimenz.my.id/facebook/?url=args[1]`)
conn.sendMessage(from, {
				 video: { url: data.videoUrl },
				 caption: `✅Sukses Download Video Facebook
•Title: ${data.title}
•Size: ${data.filesize}\n\n${mono}Jika ingin melihat kembali menu bot, silahkan klik tombol dibawah, jika tidak terlihat ketik ${prefix}menu${mono}`,
				 buttons: [{buttonId: `${prefix}mnu`, buttonText: { displayText: "≻ Back To Menu!" }, type: 1 }],
				 footer: "Create by Sneazy-Bot"
			      }, { quoted: msg })
			}
			break
			case prefix+'tiktokaudio': case 'tiktoksong':
			    if (args.length < 2) return reply(`Kirim perintah ${command} https://vt.tiktok.com/ZSJhvu1AE/`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('tiktok')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    hxz.ttdownloader(args[1]).then( data => {
			      conn.sendMessage(from, { audio: { url: data.nowm }, mimetype: 'audio/mp4' }, { quoted: msg })
			    }).catch(() => reply(mess.error.api))
		            break
                     /*   case prefix+'play':
                            if (args.length < 2) return reply(`Contoh\n${command} monokrom`)
                            reply(mess.wait)
                             var url = await yts(args[1])
url = url.videos[0].url
hxz.youtube(url).then(async(data) => {
var button = [{ buttonId: `!ytmp4 ${url}`, buttonText: { displayText: `🎥 Video (${data.size})` }, type: 1 }]
 conn.sendMessage(from, { caption: `✅Success Download Audio From Yt\n*Title :* ${data.title}\n*Quality :* ${data.quality}\n*Url :* https://youtu.be/${data.id}`, location: { jpegThumbnail: await getBuffer(data.thumb) }, buttons: button, footer: `Jika ingin mengubah ke video klik tombol dibawah⬇️, jika tidak ada, ketik ${prefix}yt https://youtu.be/${data.id}`, mentions: [sender] }).catch(() => reply(mess.error.api))
conn.sendMessage(from, { document: { url: data.link }, fileName: `${data.title}.mp3`, mimetype: 'audio/mp3' }, { quoted: msg }).catch(() => reply(mess.error.api))
})
                            break*/
 case prefix+'play': case prefix+'playmp3':
                            if (args.length < 2) return reply(`Contoh\n${command} monokrom`)
                            reply(mess.wait)
 try {
let res = await yts(q)
let thumbInfo = `✅ Download Audio From Yt
•Judul: ${res.all[0].title}
•ID Video: ${res.all[0].videoId}
•Diupload Pada: ${res.all[0].ago}
•Views: ${res.all[0].views}
•Durasi: ${res.all[0].timestamp}
•Channel: ${res.all[0].author.name}
•Link Channel: ${res.all[0].author.url}

*File Sedang Dikirim.....*`

conn.sendMessage(from, { image: { url: res.all[0].image }, caption: thumbInfo }, { quoted: msg })
let rest = await y2mateA(res.all[0].url)
if (parseInt(rest[0].size.replace(/[a-zA-Z]/gi,'')) > 20) return reply(`Ukuran File Melebihi 20Mb\nDownload Sendiri Melalui Link:\n${rest[0].link}`)
conn.sendMessage(from, { document: { url: rest[0].link }, fileName: `${rest[0].output}.mp3`, mimetype: 'audio/mp3' }, { quoted: msg })
} catch(e) {
console.log(e)
reply(mess.error.api)
}
break
			case prefix+'ytmp4': case prefix+'mp4': case prefix+'yt': case prefix+'ytdl':
			    if (args.length < 2) return reply(`Contoh:\n${command} https://www.youtube.com/watch?v=eZskFo64rs8`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			ytmp4(q).then(data => 
conn.sendMessage(from, { video: { url: data.url }, caption: `✅Download Video From Yt\n•Title: ${data.title}\n•Size: ${data.size}\n•Channel: ${data.channel}\n•Quality: ${data.quality}` }, { quoted: msg })
).catch(err => {
						reply(mess.error.api)
						console.log(err);
					})
			    break
			case prefix+'ytmp3': case prefix+'mp3':
			        if (args.length < 2) return reply(`Contoh:\n${command} https://www.youtube.com/watch?v=eZskFo64rs8`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('youtu.be') && !args[1].includes('youtube.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    ytmp3(args[1]).then(data => {
reply(`✅Download Audio From Yt\n•Title: ${data.title}\n•Size: ${data.size}\n•Channel: ${data.channel}\n•Quality: ${data.quality}\n\n*File sedang dikirim..*`)
 conn.sendMessage(from, { document: { url: data.url }, fileName: `${data.title}.mp3`, mimetype: 'audio/mp3' }, { quoted: msg })
}).catch(e => {
						reply(mess.error.api)
						console.log(e);
					})
			    break
			case prefix+'igdl': case prefix+'instagram': case prefix+'ig':
			    if (args.length < 2) return reply(`Contoh:\n${command} https://www.instagram.com/p/CU0MhPjBZO2/`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('instagram.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Instagram(args[1]).then( data => {
			      var teks = `*Instagram Downloader*\n\n*≻ Title :* ${data.title}\n*≻ Jumlah Media :* ${data.medias.length}\n*≻ Url Source :* ${data.url}\n\n_wait a minute sending media..._`
			      reply(teks)
			       for (let i of data.medias) {
				 if (i.extension === "mp4") {
				   conn.sendMessage(from, { video: { url: i.url }, caption: mess.success}, {quoted: msg })
				 } else if (i.extension === "jpg") {
				   conn.sendMessage(from, { image: { url: i.url }, caption: mess.success}, {quoted: msg })
			         }
			       }
			    }).catch(() => reply(mess.error.api))
			    break
			case prefix+'facebook': case prefix+'fbdl':
			    if (args.length < 2) return reply(`Kirim perintah ${command} link`)
			    if (!isUrl(args[1])) return reply(mess.error.Iv)
			    if (!args[1].includes('facebook.com')) return reply(mess.error.Iv)
			    reply(mess.wait)
			    xfar.Facebook(args[1]).then( data => {
			      conn.sendMessage(from, { video: { url: data.medias[0].url }, caption: data.title }, { quoted: msg })
			    }).catch(() => reply(mess.error.api))
			    break
			default:
/*			if (!isGroup && isCmd) {
				reply(`Command belum tersedia, coba beberapa hari kedepan yaa! _^`)
			}*/
		}
	} catch (e) {
		console.log('Error : %s', color(e, 'red'))
	}
}

