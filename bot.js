const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');


const rando_images = [
    "https://i.imgur.com/NHn4UK6.jpg",
    "https://i.imgur.com/j5nGWHn.png",
    "https://i.imgur.com/CT8lPw4.png",
    "https://i.imgur.com/uY2ZUyw.png",
    "https://i.imgur.com/VZWP4yn.png",
    "https://i.imgur.com/KWSfHkk.png",
    "https://i.imgur.com/tleW7bp.png",
    "https://i.imgur.com/1CT9Mth.png",
    "https://i.imgur.com/KeUQHnM.png",
    "https://i.imgur.com/3Qc84Yf.png",
    "https://i.imgur.com/qwtTHx6.png",
    "https://i.imgur.com/C7Vs1Dm.png",
    "https://i.imgur.com/VaDZ4qL.png",
    "https://i.imgur.com/5UV6DbO.png",
    "https://i.imgur.com/Uc116zc.png",
    "https://i.imgur.com/zbny40t.png",
    "https://i.imgur.com/UmEtRtI.png",
    "https://i.imgur.com/TF17OWS.png",
    "https://i.imgur.com/1xcsAHf.png",
    "https://i.imgur.com/BTo1xwi.png",
    "https://i.imgur.com/kJpu1Na.jpg",
    "https://i.imgur.com/Ab4Rr2o.jpg",
    "https://i.imgur.com/qPWKLGP.jpg"

]

const rando_sayings = [
    "FANTASY",
    "YEAUHHHHH CUNNUHHH",
    "WOUUOUOUOUOUOUUUUAAAAHHHHHHH",
    "hehe its zwicky here xD uWu",
    "Beauty of the house",
    "JP Hold my balls",
    "How bout grow a pair of nuts and shut your fucking mouth eh??!?!!! >:(",
    "Man of the house",
    "Man of the beauties",
    "WOAHHHH PUT THE HORNS AWAY WILDA",
    "Fuck you man",
    "Shut the fuck up",
    "Who let this guy out of the pasture???",
    "Yeah I scammed like 3 dragon lores and sold them for $15k buddy what you know abt dat xD"
]

const zwicky_comebacks = [
    "Fuck off",
    "Fuck you",
    "Faggot",
    "Suck my dick faggot",
    "Suck me off",
    "YOU FRIGGIN WANT ONE BUDDY????",
    "Shut the fuck up",
    "yeah you're a friggin beauty",
    "you're actually such a faggot",
    "yeah put the friggin horns away buddy",
    "mmmm baby",
    "Thats embarrassing...",
    "Honestly I feel bad for you dude",
    "Oh are you upset?",
    "Guess you could say im hanging out at the towers",
    "FUCK",
    "How bout grow a pair of nuts and shut your fucking mouth eh??!?!!! >:("
]
const zwicky_boobs = [
    "https://i.imgur.com/EvA3DWT.jpg",
    "https://i.imgur.com/HOcK7aw.gif",
    "https://i.imgur.com/rQAvP03.jpg",
    "https://i.imgur.com/uYieuio.jpg",
    "https://i.imgur.com/5BjTJs4.jpg",
    "https://i.imgur.com/FT0vEts.jpg",
    "https://i.imgur.com/9J6zfEE.jpg",
    "https://i.imgur.com/XL5On5o.jpg",
    "https://i.imgur.com/Op2btSL.jpg",
    "https://i.imgur.com/Q6EQHwn.jpg",
    "https://i.imgur.com/qRoI53J.jpg",
    "https://i.imgur.com/h9QuG6K.jpg",
    "https://i.imgur.com/cQNMS1y.jpg",
    "https://i.imgur.com/WMN8tf0.jpg",
    "https://i.imgur.com/pFRqjbh.jpg",
    "https://i.imgur.com/FzXj5DE.jpg",
    "https://i.imgur.com/uWtcs0U.jpg",
    "https://i.imgur.com/tzOBCGt.jpg",
    "https://i.imgur.com/pDzxqwc.jpg",
    "https://i.imgur.com/SjPoLNY.jpg",
    "https://i.imgur.com/VIvZYgl.jpg",
    "https://i.imgur.com/zZYELmu.jpg",
    "https://i.imgur.com/DOtGna2.jpg",
    "https://i.imgur.com/DUDYlwV.jpg",
    "https://i.imgur.com/irrLAt7.jpg",
    "https://i.imgur.com/wBFlKXi.jpg",
    "https://i.imgur.com/5Wp10hg.jpg",
    "https://i.imgur.com/kvKLzOM.jpg",
    "https://i.imgur.com/JnjafQe.jpg",
    "https://i.imgur.com/64vix8w.jpg",
    "https://i.imgur.com/JhqMNnC.jpg",
    "https://i.imgur.com/xUvbVEY.jpg",
    "https://i.imgur.com/4FFdtra.jpg",
    "https://i.imgur.com/xJ88CVk.jpg",
    "https://i.imgur.com/LRS8X6r.jpg",
    "https://i.imgur.com/9PhPAnk.gif",
    "https://i.imgur.com/z70Vauz.jpg",
    "https://i.imgur.com/rWI3c1L.jpg",
    "https://i.imgur.com/oZvslMl.jpg",
    "https://i.imgur.com/0P1Ueo6.jpg",
    "https://i.imgur.com/JVsprE5.jpg",
]

const zwickydime = [
    "https://i.imgur.com/T17fIrK.jpg",
    "https://i.imgur.com/d2BWxU3.jpg",
    "https://i.imgur.com/8T5T96B.jpg",
    "https://i.imgur.com/cWKn2IA.jpg",
    "https://i.imgur.com/swKm2NO.jpg",
    "https://i.imgur.com/BFNaTfp.jpg",
    "https://i.imgur.com/w8tcEXz.jpg",
    "https://i.imgur.com/vVtrmWP.jpg",
    "https://i.imgur.com/otBewIg.jpg",
    "https://i.imgur.com/6GSPhJ6.jpg",
    "https://i.imgur.com/MluaNAZ.jpg",
    "https://i.imgur.com/nRE0NKj.jpg",
    "https://i.imgur.com/5bNUJxy.jpg",
    "https://i.imgur.com/an8Lnim.jpg",
    "https://i.imgur.com/eWnelXr.jpg",
    "https://i.imgur.com/PaM3ecY.jpg",
    "https://i.imgur.com/03aBmVu.jpg",
    "https://i.imgur.com/Dvmxpy3.jpg",
    "https://i.imgur.com/DK9ttOM.jpg",
    "https://i.imgur.com/fC3kVcl.jpg",
    "https://i.imgur.com/av6BexZ.jpg",
    "https://i.imgur.com/yxOdDZl.jpg",
    "https://i.imgur.com/HsBYk1x.jpg",
    "https://i.imgur.com/dAGNziz.jpg",
    "https://i.imgur.com/nNt6oF6.jpg",
    "https://i.imgur.com/6aAsSjx.jpg",
    "https://i.imgur.com/XtaEnOY.jpg",
    "https://i.imgur.com/uXBaRt6.jpg",
    "https://i.imgur.com/SdrL4PS.jpg",
    "https://i.imgur.com/vryFcsb.jpg",
    "https://i.imgur.com/iZnZNih.jpg",
    "https://i.imgur.com/Lpy1PVn.jpg",
    "https://i.imgur.com/xcXPLK5.jpg",
    "https://i.imgur.com/ZHR8N9f.jpg",
    "https://i.imgur.com/bGqUq47.jpg",
    "https://i.imgur.com/cf6sn59.jpg",
    "https://i.imgur.com/UBXpBmk.jpg",
    "https://i.imgur.com/i3ahhwY.jpg",
    "https://i.imgur.com/btsENLT.jpg",
    "https://i.imgur.com/NNCcYQp.jpg",
    "https://i.imgur.com/3lIaQ4M.jpg",
    "https://i.imgur.com/mzE5oQp.jpg",
    "https://i.imgur.com/9mddJ5M.jpg",
]

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {
  if (msg.content === '!zwicky') {
    msg.reply(zwicky_comebacks[Math.floor(Math.random() * zwicky_comebacks.length)]);
  }
});

client.on('message', msg => {
 if (msg.content === '!commands') {
  msg.reply('Current list of commands: !commands, !zwicka, !zwicky, !zwickyboobs');
 }
});

client.on('message', msg => {
    if (msg.content === '!zwicka') {
        msg.channel.send(rando_sayings[Math.floor(Math.random() * rando_sayings.length)], {
            file: rando_images[Math.floor(Math.random() * rando_images.length)]
        });
    }
});

client.on('message', msg => {
    if (msg.content === '!zwickyboobs') {
        msg.channel.send(":O", {
            file: zwicky_boobs[Math.floor(Math.random() * zwicky_boobs.length)]
        });
    }
});

//client.on('message', msg => {
 //   if (msg.content === '!zwickyclear') {
//        msg.channel.send("Clearing... (4.17%)")
//        msg.channel.send("Clearing... (8.33%")
//        msg.channel.send("Clearing... (12.5%)")
//        msg.channel.send("Clearing... (16.67%)")
//        msg.channel.send("Clearing... (20.83%)")
//        msg.channel.send("Clearing... (25%)")
//        msg.channel.send("Clearing... (29.17%)")
//        msg.channel.send("Clearing... (33.33%)")
//        msg.channel.send("Clearing... (37.5%)")
//        msg.channel.send("Clearing... (41.67%)")
//        msg.channel.send("Clearing... (45.83%)")
//        msg.channel.send("Clearing... (50%)")
//        msg.channel.send("Clearing... (54.17%)")
//        msg.channel.send("Clearing... (58.33%)")
//        msg.channel.send("Clearing... (62.5%)")
//        msg.channel.send("Clearing... (66.67%)")
//        msg.channel.send("Clearing... (70.83%)")
 //       msg.channel.send("Clearing... (75%)")
//        msg.channel.send("Clearing... (79.17%)")
//        msg.channel.send("Clearing... (83.33%)")
//        msg.channel.send("Clearing... (87.5%)")
//        msg.channel.send("Clearing... (91.67%)")
//        msg.channel.send("Clearing... (95.83%)")
//        msg.channel.send("Clearing... (99.99%)")
//        msg.channel.send("Cleared!")
//    }
//});

client.on('message', msg => {
    if (msg.content === '!zwicktactoe') {
        msg.channel.send("Welcome to Zwick Tac Toe")
    }
});

client.on('message', msg => {
    if (msg.content === '!zwickydime') {
        msg.channel.send("Damn she's so sexy", {
            file: zwickydime[Math.floor(Math.random() * zwickydime.length)]
        });
    }
});

client.on('message', msg => {
    if (msg.content === "!zc") {
        msg.channel.send("", {
            file: "https://i.imgur.com/IyUt80R.png"
        })
        msg.channel.send("", {
            file: "https://i.imgur.com/IyUt80R.png"
        })
        msg.channel.send("", {
            file: "https://i.imgur.com/IyUt80R.png"
        })
   }
});

client.on('message', msg => {
    if (msg.content === '!zwickdel') {
        msg.channel.bulkDelete(10);
    }
});




client.login(auth.token);