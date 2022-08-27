const imageSources = [
    "./imgs/cat2.jpg", 
    "./imgs/frog.png", 
    "./imgs/snail.png",
    "./imgs/cat.jpg",
    "./imgs/crow.png",
    "./imgs/mushroom.jpg"
];

function getRan(arr) {
    const len = arr.length;
    const ran = Math.floor(Math.random() * len);
    return arr[ran];
}

const messages = [
    "💖 I love you endlessly, unconditionally. 🌻",
    "😁 Your punny humor and tastful jokes about death are both concerning and deeply satisfying. " +
    "I am filled with with joy to have time together. 🎶",
    "🕸 Spidy senses and stressful days are never a burden; I am grateful for the oppertunity to be a part of your life ✨",
    "🌞 I intend to keep you in my life as long as you'll allow ✨",
    "You improve my quality of life with supportive company, genuine encouragement, and careless adventures",
];

window.addEventListener("load", async () => {
    const $ = (str, dom=document) => [...dom.querySelectorAll(str)];
    const wait = ms => new Promise(r => setTimeout(r, ms));
    const iconContainer = $(".icon-container")[0];
    const card = $(".card")[0];
    (async function insertImage() {
        while (true) {
            const src = getRan(imageSources);
            const img = document.createElement("img");
            img.src = src;
            iconContainer.appendChild(img);
            await wait(10e3);
            img.remove();
        }
    })();  
    let current = 0;
    iconContainer.addEventListener("click", () => {
        iconContainer.classList.toggle("spin");
        current = (current + 1) % messages.length;
        const msg = messages[current];
        card.innerText = msg;
    });
});