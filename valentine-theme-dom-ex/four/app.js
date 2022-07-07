document.getElementById("btn").addEventListener("click", filterDuplicates)

const emojis = [
    "💘","💘","🌞","🧡","🍇",
    "🧁","⚡️","💝","🐱","💘",
    "🧡","💫","🍓","💜","⚡️",
    "⚡️","🐶","💘","🍇","🐱",
    "💘","💫","🍓","💜","💕",
    "⚡️","💘","🌞","🐱","💘",
    "💫","🍓","💜","⚡️","🧡",
    "💕","🍇","💘"
    ]
    
const allEmojisP = document.getElementById("all-emojis-p")
const uniqueEmojisP = document.getElementById("unique-emojis-p")

// for (let emoji of emojis) {
//     allEmojisP.textContent += emoji
// }

emojis.forEach(emoji => {
    allEmojisP.textContent += emoji
});



function filterDuplicates() {

let unique =[... new Set(emojis)]
unique.forEach(emoji => {
    uniqueEmojisP.textContent += emoji
});
btn.disabled = true
    
}
