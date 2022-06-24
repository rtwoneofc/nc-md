const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} 」 ──*
	
  ${ucapanWaktu} kak *${pushname !== undefined ? pushname : 'No Detect Name'}* 👋

Tanggal : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
Waktu : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

❋─────────────────❋
Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
Sisa Limit : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
Balance : $${toCommas(getBalance(sender, balance))}
❋─────────────────❋
  
  _Ada Bug? Ketik ${prefix}report Bug mu_
  ${readmore}
  *❒ Main Menu ❒*
  ✾ ${prefix}menu
  ✾ ${prefix}owner
  ✾ ${prefix}donasi
  ✾ ${prefix}speed
  ✾ ${prefix}runtime
  ✾ ${prefix}cekprem
  ✾ ${prefix}listprem
  ✾ ${prefix}daftarprem
  ✾ ${prefix}listban
  ✾ ${prefix}rules
  ✾ ${prefix}izumi *text*
  ✾ ${prefix}simi *text*
  ✾ ${prefix}delete

  *❒ Converter/Tools*
  ✾ ${prefix}stiker *ReplyGambar/Caption*
  ✾ ${prefix}toimg *ReplyStiker*
  ✾ ${prefix}tovid *ReplyStiker*

  *❒ Sound Menu*
  ✾ ${prefix}sound1
  ✾ ${prefix}sound2
  ✾ ${prefix}sound3
  ✾ ${prefix}sound4
  ✾ ${prefix}sound5

  *❒ Downloader (MediaFire Dalam Perbaikan)*
  ✾ ${prefix}play *Query*
  ✾ ${prefix}youtube *LinkYT*
  ✾ ${prefix}ytmp4 *LinkYT*
  ✾ ${prefix}ytmp3 *LinkYT*
  ✾ ${prefix}ytmp3vn *LinkYT*
  ✾ ${prefix}getvideo
  ✾ ${prefix}getmusic
  ✾ ${prefix}igv *Instagram Video/Reels*
  ✾ ${prefix}igf *Instagram Image*
  ✾ ${prefix}facebook *LinkFb*
  ✾ ${prefix}mediafire *LinkMediaFire*
  
  *❒ Random Menu ❒*
  ✾ ${prefix}quotes
  ✾ ${prefix}gombalan
  ✾ ${prefix}katagalau
  ✾ ${prefix}cecan
  ✾ ${prefix}cogan
  ✾ ${prefix}naruto
  ✾ ${prefix}loli
  ✾ ${prefix}waifu
  ✾ ${prefix}husbu
  ✾ ${prefix}yaoi

  *❒ Store Menu*
  ✾ ${prefix}listff
  ✾ ${prefix}rekber
  ✾ ${prefix}sewabot

  *❒ Primbon Menu*
  ✾ ${prefix}artimimpi *mimpi*
  ✾ ${prefix}artinama *nama*
  
  *❒ Stalker Menu (Ig Stalk Eror)*
  ✾ ${prefix}igstalk *username*
  ✾ ${prefix}ghstalk *username*
  
  *❒ Shorlink Menu*
  ✾ ${prefix}shortlink *link*
  ✾ ${prefix}cuttly *link*
  ✾ ${prefix}bitly *link*
  ✾ ${prefix}tinyurl *link*
  
  *❒ Premium User*
  ✾ ${prefix}asupan
  ✾ ${prefix}xnxx link
  ✾ ${prefix}ahegao
  ✾ ${prefix}bloewjob
  ✾ ${prefix}hentai
  ✾ ${prefix}masturbation
  ✾ ${prefix}pussy
  ✾ ${prefix}tiktok *Link Tiktok*
  ✾ ${prefix}tiktokaudio *Link Tiktok*
  
  *❒ Textpro Menu ❒*
  ✾ ${prefix}thunder *text*
  ✾ ${prefix}jokerlogo *text*
  ✾ ${prefix}ninjalogo *text1* | *text2*
  ✾ ${prefix}lionlogo *text1* | *text2*
  ✾ ${prefix}vintage *text1* | *text2*
  ✾ ${prefix}skytext *text*
  ✾ ${prefix}pornhub *text1* | *text2*
  ✾ ${prefix}avengers *text* | *text2*
  ✾ ${prefix}youtubegold *text*
  ✾ ${prefix}youtubesilver *text*
  ✾ ${prefix}mascotbear *text*
  ✾ ${prefix}goldenroses *text*
  ✾ ${prefix}hallowen *text*
  ✾ ${prefix}grafity *text*
  ✾ ${prefix}holografic *text*
  ✾ ${prefix}christmas *text*
  ✾ ${prefix}luxury *text*
  ✾ ${prefix}harrypotter *text*
  ✾ ${prefix}brokenglass *text*
  ✾ ${prefix}artpapper *text*
  ✾ ${prefix}watercolor *text*
  ✾ ${prefix}glossymaker *text*
  ✾ ${prefix}multicolor *text*
  ✾ ${prefix}deluxesilver *text*
  ✾ ${prefix}gluetext *text*
  ✾ ${prefix}fabric *text*
  ✾ ${prefix}engraved *text*
  ✾ ${prefix}writing *text*
  ✾ ${prefix}wicker *text*
  ✾ ${prefix}larva *text*
  ✾ ${prefix}toxic *text*
  ✾ ${prefix}koipish *text*
  ✾ ${prefix}strobery *text*
  ✾ ${prefix}neonlight *text*
  ✾ ${prefix}neondevil *text*
  ✾ ${prefix}flaming *text*
  ✾ ${prefix}shadow *text*
  ✾ ${prefix}wolftext *text*
  ✾ ${prefix}cup *text*
  ✾ ${prefix}cup2 *text*
  ✾ ${prefix}romantic *text*
  ✾ ${prefix}writetext *text*
  ✾ ${prefix}woodheart *text*
  ✾ ${prefix}tahta *text*
  ✾ ${prefix}waifumaker *text*
  ✾ ${prefix}lolimaker *text*
  ✾ ${prefix}kanekimaker *text*
  ✾ ${prefix}guramaker *text*
  ✾ ${prefix}leaves *text*
  ✾ ${prefix}3d *text*
  ✾ ${prefix}logowolf *text*
  ✾ ${prefix}logowolf2 *text*
  
  *❒ Photo Oxy Menu ❒ (Eror)*
  ✾ ${prefix}coffecup *text*
  ✾ ${prefix}glitch *text1* | *text2*
  ✾ ${prefix}undergrass *text*
  ✾ ${prefix}lovetext *text*
  ✾ ${prefix}lovetext2 *text*
  ✾ ${prefix}army *text*
  ✾ ${prefix}matrix *text*
  ✾ ${prefix}pubg *text*
  ✾ ${prefix}breakwall *text*
  ✾ ${prefix}butterfly *text*
  ✾ ${prefix}narutotext *text*
  ✾ ${prefix}smoke *text*
  ✾ ${prefix}burnpapper *text*
  ✾ ${prefix}doubleheart *text*
  
  *❒ Other Menu ❒*
  ✾ ${prefix}ssweb *Link*
  ✾ ${prefix}ssdesktop *Link*
  ✾ ${prefix}sshpfull *Link*
  ✾ ${prefix}kbbi *Kata*
  ✾ ${prefix}faktaunik
  ✾ ${prefix}ppcp
  ✾ ${prefix}darkjokes
  ✾ ${prefix}meme
  ✾ ${prefix}covid19
  ✾ ${prefix}cerpen
  ✾ ${prefix}cersex
  ✾ ${prefix}wiki *Query*
  ✾ ${prefix}say *text*
  ✾ ${prefix}qr *text*
  ✾ ${prefix}readmore *text|text*
  ✾ ${prefix}hitungmundur 12 10 2022
  ✾ ${prefix}translate *from* *to*
  ✾ ${prefix}lirik *Judul*
  ✾ ${prefix}grupwa *Pencarian*
  ✾ ${prefix}wame *Nomor*
  ✾ ${prefix}linkig
  ✾ ${prefix}github
  ✾ ${prefix}ytsearch *Pencarian*
  ✾ ${prefix}pinterest *Querry*
  ✾ ${prefix}getpp
  ✾ ${prefix}kontak

  *❒ Islamic Menu ❒*
  ✾ ${prefix}quran *nomer*
  ✾ ${prefix}quranaudio *surah* *ayat*
  ✾ ${prefix}listquran *nomer*
  ✾ ${prefix}kisahnabi *Nama Nabi*

  *❒ Nulis Menu ❒*
  ✾ ${prefix}nuliskanan *text*
  ✾ ${prefix}foliokiri *text*
  
  *❒ Vokal Menu ❒*
  ✾ ${prefix}halah
  ✾ ${prefix}hilih
  ✾ ${prefix}heleh
  ✾ ${prefix}huluh
  ✾ ${prefix}holoh
  
  *❒ Game & Fun Menu ❒*
  ✾ ${prefix}tictactoe @tag
  ✾ ${prefix}delttc
  ✾ ${prefix}suit
  ✾ ${prefix}slot
  ✾ ${prefix}tebakgambar
  ✾ ${prefix}kuis
  ✾ ${prefix}tebakkimia
  ✾ ${prefix}tekateki
  ✾ ${prefix}tebakkata
  ✾ ${prefix}susunkata
  ✾ ${prefix}tebakbendera
  ✾ ${prefix}tebaklagu
  ✾ ${prefix}siapakahaku
  ✾ ${prefix}cekbapak
  ✾ ${prefix}apakah *Query*
  ✾ ${prefix}kapankah *Query*
  ✾ ${prefix}rate *Query*
  ✾ ${prefix}gantecek *Nama*
  ✾ ${prefix}cantikcek *Nama*
  ✾ ${prefix}sangecek *Nama*
  ✾ ${prefix}gaycek *Nama*
  ✾ ${prefix}lesbicek *Nama*
  ✾ ${prefix}gimana *Query*
  ✾ ${prefix}bisakah *Query*
  ✾ ${prefix}cekme
  ✾ ${prefix}dadu
  
  *❒ Payment & Bank ❒*
  ✾ ${prefix}buylimit *Jumlah*
  ✾ ${prefix}buyglimit *Jumlah*
  ✾ ${prefix}transfer @tag *jumlah*
  ✾ ${prefix}limit
  ✾ ${prefix}balance
  ✾ ${prefix}topbalance

  *❒ Group Menu ❒*
  ✾ ${prefix}antilink
  ✾ ${prefix}antiwame
  ✾ ${prefix}linkgrup
  ✾ ${prefix}setppgrup
  ✾ ${prefix}setnamegc
  ✾ ${prefix}setdesc
  ✾ ${prefix}group
  ✾ ${prefix}revoke
  ✾ ${prefix}hidetag *text*
  ✾ ${prefix}kick *@tag*
  ✾ ${prefix}add *@tag*
  ✾ ${prefix}promote *@tag*
  ✾ ${prefix}demote *@tag*
  ✾ ${prefix}listadmin
  ✾ ${prefix}infogc
  
  *❒ Owner Menu ❒*
  > evalcode
  x evalcode-2
  $ executor
  ✾ ${prefix}sendvirtex
  ✾ ${prefix}setppbot
  ✾ ${prefix}exif
  ✾ ${prefix}textchat
  ✾ ${prefix}leave
  ✾ ${prefix}masuk
  ✾ ${prefix}addprem
  ✾ ${prefix}delprem
  ✾ ${prefix}broadcast
  ✾ ${prefix}ban
  ✾ ${prefix}unban
  ✾ ${prefix}block
  ✾ ${prefix}unblock
  ✾ ${prefix}setprefix multi/nopref

*${setting.botName} Version 2.0.0*`
}