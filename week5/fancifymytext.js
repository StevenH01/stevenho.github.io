// js file
const textarea = document.getElementById("myTextArea");
const fancify = document.getElementById("biggerText");
const boring = document.getElementById("boringText");

fancify.addEventListener("change", () => updateTextStyle("fancy"));
boring.addEventListener("change", () => updateTextStyle("boring"));

function Alert() {
    alert("Hello World!");
}

function bigger() {
    textarea.style.fontSize = "24px";
}

function updateTextStyle(type) {
    if (type === "fancy") {
        textarea.style.color = "blue";
        textarea.style.fontWeight = "bold";
        textarea.style.textDecoration = "underline";
    } else if (type === "boring") {
        textarea.style.color = "black";
        textarea.style.fontWeight = "normal";
        textarea.style.textDecoration = "none";
    }
}

function moo() {
    const text = textarea.value.toUpperCase();
    const sentences = text.split(/([.!?]+)/).filter(Boolean); 

    for (let i = 0; i < sentences.length; i += 2) {
        let sentence = sentences[i].trim();

        if (/\s/.test(sentence)) {
            const words = sentence.split(/\s+/);
            words[words.length - 1] += "-Moo";
            sentences[i] = words.join(" ");
        }
    }

    textarea.value = sentences.join(""); 
}
