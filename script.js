const { animate, scroll } = Motion

var isClickable = true;

var possibleEmojis = [];
var foundEmojis = [];
function addPossibleEmoji(probability, emoji) {
    possibleEmojis.push({ p:probability, e:emoji });
}

window.onload = function() {
    windowLoaded();
};


function windowLoaded() {
    var sequence = [
        [ "#gift_display", { rotate:-5 }, { type: "bounce", duration:0.5 } ],
        [ "#gift_display", { rotate:5  }, { type: "bounce", duration:0.5 } ],
        [ "#gift_display", { rotate:0  }, { type: "bounce", duration:0.1 } ]
    ]

    animate(sequence, { repeat: Infinity });
}

async function giftClicked() {
    if (isClickable) {
        isClickable = false;

        var price = possibleEmojis[Math.floor((Math.random()*possibleEmojis.length))];
        document.querySelector("#result_display").textContent = price.e;

        var message = "";
        if (foundEmojis.includes(price.e))
        {
            message = "A repeat... 😔";
        }
        else
        {
            message = "A new emoji was found!!  🥳";
        }

        const instructions = document.getElementById("instructions")
        instructions.textContent = "";
        setTimeout(() => { instructions.textContent = message; }, 800);

        var sequence = [
            [ "#result_display", { scale:0 }, { duration:0 } ],
            [ "#gift_display", { scale:0.8 }, {  duration:0.5 } ],
            [ "#gift_display", { scale:1.5, opacity:0, display:"none"  }, { type: "easein", duration:0.1 } ],
            [ "#result_display", { display:"inline-block", opacity:1, scale:1 }, { type:"bounce", duration:0.2 } ],
            [ "#result_display", { display:"none", opacity:0, scale:0 }, { type:"bounce", duration:0.2, delay:1 } ],
            [ "#gift_display", { scale:1, opacity:1, display:"inline-block"  }, { type: "bounce", duration:0.05 } ],
        ]

        
        await animate(sequence);

        isClickable = true;

        instructions.textContent = "";
        if (foundEmojis.includes(price.e))
        {
            return;
        }

        foundEmojis.push(price.e);

        document.querySelector("#collection_display").textContent += price.e;
        document.querySelector(".subtitle").textContent = "COLLECTION " + foundEmojis.length + "/" + possibleEmojis.length;
        
        animate(".subtitle", {opacity:1},{duration:0.2});
        animate("#collection_display", {opacity:1},{duration:0.2});
    }
}

addPossibleEmoji(1, "🎀");
addPossibleEmoji(1, "🎗️");
addPossibleEmoji(1, "👓");
addPossibleEmoji(1, "🕶️");
addPossibleEmoji(1, "🥽");
addPossibleEmoji(1, "🥼");
addPossibleEmoji(1, "🦺");
addPossibleEmoji(1, "👔");
addPossibleEmoji(1, "👕");
addPossibleEmoji(1, "👖");
addPossibleEmoji(1, "🧣");
addPossibleEmoji(1, "🧤");
addPossibleEmoji(1, "🧥");
addPossibleEmoji(1, "🧦");
addPossibleEmoji(1, "👗");
addPossibleEmoji(1, "👘");
addPossibleEmoji(1, "🥻");
addPossibleEmoji(1, "🩱");
addPossibleEmoji(1, "🩲");
addPossibleEmoji(1, "🩳");
addPossibleEmoji(1, "👙");
addPossibleEmoji(1, "👚");
addPossibleEmoji(1, "👛");
addPossibleEmoji(1, "👜");
addPossibleEmoji(1, "👝");
addPossibleEmoji(1, "🛍️");
addPossibleEmoji(1, "🎒");
addPossibleEmoji(1, "🩴");
addPossibleEmoji(1, "👞");
addPossibleEmoji(1, "👟");
addPossibleEmoji(1, "🥾");
addPossibleEmoji(1, "🥿");
addPossibleEmoji(1, "👠");
addPossibleEmoji(1, "👡");
addPossibleEmoji(1, "🩰");
addPossibleEmoji(1, "👢");
addPossibleEmoji(1, "👑");
addPossibleEmoji(1, "👒");
addPossibleEmoji(1, "🎩");
addPossibleEmoji(1, "🎓");
addPossibleEmoji(1, "🧢");
addPossibleEmoji(1, "🪖");
addPossibleEmoji(1, "⛑️");
addPossibleEmoji(1, "📿");
addPossibleEmoji(1, "💄");
addPossibleEmoji(1, "💍");
addPossibleEmoji(1, "💎");
addPossibleEmoji(1, "🦯");