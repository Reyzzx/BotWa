"use strict";
const {
	default: makeWASocket,
	BufferJSON,
	initInMemoryKeyStore, 
   MessageType,
   MessageOptions,
   Mimetype,
   generateWAMessageFromContent,
   downloadContentFromMessage,
	DisconnectReason,
	AnyMessageContent,
	useSingleFileAuthState,
	delay,
   proto
} = require("@adiwajshing/baileys-md");
const axios = require("axios");
const fs = require("fs");
const fetch = require('node-fetch')
const { sizeFormatter } = require('human-readable')


const downloadMediaMessage = async (message) => {
        let mime = (message.msg || message).mimetype || ''
        let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
        let extension = mime.split('/')[1]
        const stream = await downloadContentFromMessage(message, messageType)
        let buffer = Buffer.from([])
        for await(const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
	}
        
	return buffer
}


const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)

exports.unixTimestampSeconds = unixTimestampSeconds

exports.generateMessageTag = (epoch) => {
    let tag = (0, exports.unixTimestampSeconds)().toString();
    if (epoch)
        tag += '.--' + epoch; // attach epoch if provided
    return tag;
}

exports.processTime = (timestamp, now) => {
	return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}


exports.getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}


exports.getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (e) {
		console.log(`Error : ${e}`)
	}
}

exports.fetchJson = (url, options) => new Promise(async(resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})


exports.fetchText = (url, options) => new Promise(async(resolve, reject) => {
    fetch(url, options)
        .then(response => response.text())
        .then(text => {
            resolve(text)
        })
        .catch((err) => {
            reject(err)
        })
})

exports.getGroupAdmins = function(participants){
    let admins = []
	for (let i of participants) {
		i.admin !== null ? admins.push(i.id) : ''
	}
	return admins
}

exports.runtime = function(seconds) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

exports.removeEmojis = (string) => {
	var regex = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|\ud83c[\ude32-\ude3a]|\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])/g;
	return string.replace(regex, '');
}

exports.calculate_age = (dob) => { // new Date("month/date/year")
    var diff_ms = Date.now() - dob.getTime();
	var age_dt = new Date(diff_ms);
	return Math.abs(age_dt.getUTCFullYear() - 1970);
}

exports.sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

exports.url = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}


exports.getTime = (format, date) => {
	if (date) {
		return moment(date).locale('id').format(format)
	} else {
		return moment.tz('Asia/Jakarta').locale('id').format(format)
	}
}

exports.formatDate = (n, locale = 'id') => {
	let d = new Date(n)
	return d.toLocaleDateString(locale, {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	})
}

exports.tanggal = (numer) => {
	myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
				myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu']; 
				var tgl = new Date(numer);
				var day = tgl.getDate()
				bulan = tgl.getMonth()
				var thisDay = tgl.getDay(),
				thisDay = myDays[thisDay];
				var yy = tgl.getYear()
				var year = (yy < 1000) ? yy + 1900 : yy; 
				const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
				let d = new Date
				let locale = 'id'
				let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
				let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
				
				return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

exports.formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

/*exports.jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}

function delay(ms) {
	return new Promise((resolve, reject) => setTimeout(resolve, ms))
}*/

function format(...args) {
	return util.format(...args)
}

exports.logic = (check, inp, out) => {
	if (inp.length !== out.length) throw new Error('Input and Output must have same length')
	for (let i in inp)
		if (util.isDeepStrictEqual(check, inp[i])) return out[i]
	return null
}

exports.generateProfilePicture = async (buffer) => {
	const jimp = await jimp_1.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG)
	}
}

exports.parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

exports.getGroupAdmins = (participantes) => {
    var admins = []
    for (let i of participantes) {
        i.admin === "admin" ? admins.push(i.id) : ''
    }
    return admins
}

/**
 * Serialize Message
 * @param {WAConnection} conn 
 * @param {Object} m 
 * @param {Boolean} hasParent 
 */
exports.smsg = (conn, m, hasParent) => {
    if (!m) return m
    let M = proto.WebMessageInfo
    if (m.key) {
        m.id = m.key.id
        m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
        m.chat = m.key.remoteJid
        m.fromMe = m.key.fromMe
        m.isGroup = m.chat.endsWith('@g.us')
        m.sender = m.fromMe ? (conn.user.id.split(":")[0]+'@s.whatsapp.net' || conn.user.id) : (m.key.participant || m.key.remoteJid)
    }
    if (m.message) {
        m.mtype = Object.keys(m.message)[0]
        m.body = m.message.conversation || m.message[m.mtype].caption || m.message[m.mtype].text || (m.mtype == 'listResponseMessage') && m.message[m.mtype].singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.message[m.mtype].selectedButtonId || m.mtype
        m.msg = m.message[m.mtype]
        if (m.mtype === 'ephemeralMessage') {
            exports.smsg(conn, m.msg)
            m.mtype = m.msg.mtype
            m.msg = m.msg.msg
        }
        let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
        m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
        if (m.quoted) {
            let type = Object.keys(m.quoted)[0]
			m.quoted = m.quoted[type]
            if (['productMessage'].includes(type)) {
				type = Object.keys(m.quoted)[0]
				m.quoted = m.quoted[type]
			}
            if (typeof m.quoted === 'string') m.quoted = {
				text: m.quoted
			}
            m.quoted.id = m.msg.contextInfo.stanzaId
			m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
            m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
			m.quoted.sender = m.msg.contextInfo.participant.split(":")[0] || m.msg.contextInfo.participant
			m.quoted.fromMe = m.quoted.sender === (conn.user && conn.user.id)
            m.quoted.text = m.quoted.text || m.quoted.caption || ''
			m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
            let vM = m.quoted.fakeObj = M.fromObject({
                key: {
                    remoteJid: m.quoted.chat,
                    fromMe: m.quoted.fromMe,
                    id: m.quoted.id
                },
                message: quoted,
                ...(m.isGroup ? { participant: m.quoted.sender } : {})
            })

            /**
             * 
             * @returns 
             */
            m.quoted.delete = () => conn.sendMessage(m.quoted.chat, { delete: vM.key })

	   /**
		* 
		* @param {*} jid 
		* @param {*} forceForward 
		* @param {*} options 
		* @returns 
	   */
            m.quoted.copyNForward = (jid, forceForward = false, options = {}) => conn.copyNForward(jid, vM, forceForward, options)

            /**
              *
              * @returns
            */
            m.quoted.download = () => downloadMediaMessage(m.quoted)
        }
    }
    if (m.msg.url) m.download = () => downloadMediaMessage(m.msg)
    m.text = (m.mtype == 'listResponseMessage' ? m.msg.singleSelectReply.selectedRowId : '') || m.msg.text || m.msg.caption || m.msg || ''
    /**
	* Reply to this message
	* @param {String|Object} text 
	* @param {String|false} chatId 
	* @param {Object} options 
	*/
    m.reply = (text, chatId, options) => conn.sendMessage(chatId ? chatId : m.chat, { text: text }, { quoted: m, detectLinks: false, thumbnail: global.thumb, ...options })
    /**
	* Copy this message
	*/
	m.copy = () => exports.smsg(conn, M.fromObject(M.toObject(m)))

	/**
	 * 
	 * @param {*} jid 
	 * @param {*} forceForward 
	 * @param {*} options 
	 * @returns 
	 */
	m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => conn.copyNForward(jid, m, forceForward, options)

    return m
}



	
		