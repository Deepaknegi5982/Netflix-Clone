document.addEventListener("DOMContentLoaded", () => {

    // FAQ accordion
    document.querySelectorAll(".faqbox").forEach(faq => {
        faq.querySelector(".question").addEventListener("click", () => {

            document.querySelectorAll(".faqbox").forEach(item => {
                if (item !== faq) {
                    item.classList.remove("active");
                }
            });

            faq.classList.toggle("active");
        });
    });

    // Language translations
    const translations = {
        en: {
            hero_title: "Enjoy big movies, hit series and more from ₹149.",
            hero_subtitle: "Join today. Cancel anytime.",
            hero_desc: "Ready to watch? Enter your email to create or restart your membership.",
            get_started: "Get Started",

            faq_heading: "Frequently Asked Questions",
            faq_what_is: "What is Netflix?",
            faq_cost: "How much does Netflix cost?",
            faq_where: "Where can I watch?",
            faq_cancel: "How do I cancel?",
            faq_watch: "What can I watch on Netflix?",
            faq_kids: "Is Netflix good for kids?"
        },

        hi: {
            hero_title: "₹149 से शुरू होने वाली फ़िल्में, सीरीज़ और बहुत कुछ देखें।",
            hero_subtitle: "आज ही जुड़ें। कभी भी कैंसिल करें।",
            hero_desc: "देखने के लिए तैयार हैं? अपनी मेंबरशिप शुरू करने के लिए ईमेल डालें।",
            get_started: "शुरू करें",

            faq_heading: "अक्सर पूछे जाने वाले सवाल",
            faq_what_is: "नेटफ्लिक्स क्या है?",
            faq_cost: "नेटफ्लिक्स की कीमत कितनी है?",
            faq_where: "मैं कहाँ देख सकता हूँ?",
            faq_cancel: "मैं कैसे कैंसल करूँ?",
            faq_watch: "मैं नेटफ्लिक्स पर क्या देख सकता हूँ?",
            faq_kids: "क्या नेटफ्लिक्स बच्चों के लिए अच्छा है?"
        }
    };

    const languageSelect = document.getElementById("language");

    function changeLanguage(lang) {
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            if (translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });
    }

    const savedLang = localStorage.getItem("lang") || "en";
    languageSelect.value = savedLang;
    changeLanguage(savedLang);

    languageSelect.addEventListener("change", () => {
        const lang = languageSelect.value;
        localStorage.setItem("lang", lang);
        changeLanguage(lang);
    });

});
