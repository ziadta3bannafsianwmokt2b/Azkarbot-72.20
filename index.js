const azkar = [
    "سبحان الله",
    "الحمد لله",
    "الله أكبر",
    "لا إله إلا الله",
    "أستغفر الله",
    "لا حول ولا قوة إلا بالله",
    "اللهم صل على محمد",
    "اللهم اغفر لي",
    "اللهم ارزقني",
    "اللهم اني اسألك الجنة",
    "رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـا",
    "قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ، مَلِكِ ٱلنَّاسِ، إِلَٰهِ ٱلنَّاسِ، مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ، ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ، مِنَ ٱلْجِنَّةِ وَٱلنَّاسِ. ",
    "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ ما فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلم مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيم.",
    "اللّهُـمَّ قِنـي عَذابَـكَ يَـوْمَ تَبْـعَثُ عِبـادَك.",
    "اللّهُـمَّ إِنَّـكَ خَلَـقْتَ نَفْسـي وَأَنْـتَ تَوَفّـاهـا لَكَ ممَـاتـها وَمَحْـياها ، إِنْ أَحْيَيْـتَها فاحْفَظْـها ، وَإِنْ أَمَتَّـها فَاغْفِـرْ لَـها . اللّهُـمَّ إِنَّـي أَسْـأَلُـكَ العـافِـيَة.",
    "بِاسْـمِكَ اللّهُـمَّ أَمـوتُ وَأَحْـيا.",
    "اللَّهُ أَكْبَرُ",
    "الْحَمْدُ لِلَّهِ.",
    "سُبْحَانَ اللَّهِ.",
    "اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك.",
    "اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر",
    "اللهم اجعلني من الذين يراقبونك في جميع أمورهم",
    "أستغفر الله العظيم الذي لا إله إلا هو الحي القيوم وأتوب إليه",
    "اللهم اجعلني من الذين يواجهون الحياة بصبر",
    "اللهم اجعلني من الذين يعفون عن الناس",
    "اللهم اجعلني من الذين يتعاملون مع الناس بالحكمة والموعظة الحسنة.",
    "اللهم إني أسالك أن تجعلني من الذين يسيرون في الجنة بسلام.",
    "اللهم اجعلني من الذين يسيرون على خطى نبيك محمد صلى الله عليه وسلم.",
    "اللهم اجعلني من الذين لا يقنطون من رحمتك.", 
];


let targetChannelId = null;


function getRandomZikr() {
    return azkar[Math.floor(Math.random() * azkar.length)];
}

    setInterval(() => {
        sendAzkarToTargetChannel();
    }, 300000); 
});


function sendAzkarToTargetChannel() {
    if (!targetChannelId) {
        console.log("No target channel set. Use !setchannel to set a channel.");
        return;
    }

    const channel = client.channels.cache.get(targetChannelId);
    if (channel) {
        const zikr = getRandomZikr();

        // Create an embed
        const embed = new EmbedBuilder()
            .setTitle("اذكار")
            .setDescription(zikr)
            .setColor("#0099FF") // You can change the color
            .setFooter({ text: "Azkar messages", iconURL: "" }) // Add a footer
            .setTimestamp(); // Add a timestamp

        channel.send({ embeds: [embed] });
    } else {
        console.log("Target channel not found. Make sure the bot has access to the channel.");
    }
}


client.on('messageCreate', (message) => {
    
    if (message.author.bot) return;

    \
    if (message.content.startsWith('~setchannel')) {
        
        if (!message.member.permissions.has('MANAGE_GUILD')) {
            return message.reply("You do not have permission to set the channel.");
        }

        
        const channel = message.mentions.channels.first();
        if (channel) {
            targetChannelId = channel.id;
            message.reply(`Azkar will now be sent in ${channel.name}.`);
        } else {
            message.reply("Please mention a valid channel. Example: `!setchannel #azkar`");
        }
    }


});
