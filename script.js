// Multilingual Content
const translations = {
    en: {
        title: "🆘 ICE - Malaysia Emergency",
        subtitle: "One-tap emergency contacts:",
        police: "Police (999)",
        hospital: "Ambulance (999/112)",
        fire: "Firefighters (994)",
        voiceBtn: "🎤 Voice Command",
        note: "⚠️ Emergency numbers: Police (999) | Ambulance (999/112) | Fire (994)"
    },
    ms: {
        title: "🆘 ICE - Kecemasan Malaysia",
        subtitle: "Hubungan kecemasan satu tekan:",
        police: "Polis (999)",
        hospital: "Ambulans (999/112)",
        fire: "Bomba (994)",
        voiceBtn: "🎤 Arahan Suara",
        note: "⚠️ Nombor kecemasan: Polis (999) | Ambulans (999/112) | Bomba (994)"
    },
    zh: {
        title: "🆘 ICE - 马来西亚紧急救援",
        subtitle: "一键紧急联系:",
        police: "警察 (999)",
        hospital: "救护车 (999/112)",
        fire: "消防队 (994)",
        voiceBtn: "🎤 语音指令",
        note: "⚠️ 紧急号码: 警察 (999) | 救护车 (999/112) | 消防 (994)"
    }
};

// Set default language to Malay
function setLanguage(lang) {
    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("subtitle").textContent = translations[lang].subtitle;
    document.getElementById("police-text").textContent = translations[lang].police;
    document.getElementById("hospital-text").textContent = translations[lang].hospital;
    document.getElementById("fire-text").textContent = translations[lang].fire;
    document.getElementById("voice-btn").textContent = translations[lang].voiceBtn;
    document.getElementById("note").textContent = translations[lang].note;
}

setLanguage('ms'); // Default to Malay

// Voice Recognition
document.getElementById("voice-btn").addEventListener("click", () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    const lang = document.getElementById("language-selector").value;
    recognition.lang = lang === "zh" ? "cmn-Hans-CN" : lang;

    recognition.onresult = (event) => {
        const command = event.results[0][0].transcript.toLowerCase();
        if (command.includes("police") || command.includes("polis") || command.includes("警察")) {
            window.location.href = "tel:999";
        } else if (command.includes("hospital") || command.includes("ambulans") || command.includes("救护车")) {
            window.location.href = "tel:999";
        } else if (command.includes("fire") || command.includes("bomba") || command.includes("消防")) {
            window.location.href = "tel:994";
        }
    };
    
    recognition.start();
    alert("Speak now: 'Police', 'Ambulance', or 'Fire' in your selected language");
});

// Language selector
document.getElementById("language-selector").addEventListener("change", (e) => {
    setLanguage(e.target.value);
});