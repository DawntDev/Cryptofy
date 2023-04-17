import encrypt from "./src/encryptor.js";
import decrypt from "./src/decryptor.js";

let messages = JSON.parse(localStorage.getItem("messages") || "[]");
const save_messages = (msg, type, date) => {
    messages = [...messages, { msg, type, date }];
    if (messages.length > 10) messages.shift();
    localStorage.setItem("messages", JSON.stringify(messages));
};
const create_note = (msg, type, date) => {
    let parent = document.getElementById("notes-container");
    let element = document.createElement("div")
    element.className = "note"
    element.innerHTML = `<div class="header">
            <span class="type ${type.toLowerCase()}">${type}</span>
            <span class="date">${date}</span>
        </div>
        ${msg}`;

    element.addEventListener("click", () => navigator.clipboard.writeText(msg));
    parent.insertAdjacentElement("afterbegin", element);
};



// Encrypt Button Event
document.getElementById("encrypt").addEventListener("click", () => {
    let element = document.getElementById("message");
    let value = encrypt(element.value);
    let date = new Date().toLocaleDateString(
        'es-ES',
        { day: '2-digit', month: 'short', year: '2-digit' }
    ).replace(/\./g, '/');
    element.value = "";

    save_messages(value, "Encrypt", date);
    create_note(value, "Encrypt", date);
});

// Decrypt Button Event
document.getElementById("decrypt").addEventListener("click", () => {
    let element = document.getElementById("message");
    let value = decrypt(element.value);
    let date = new Date().toLocaleDateString(
        'es-ES',
        { day: '2-digit', month: 'short', year: '2-digit' }
    ).replace(/\./g, '/');
    element.value = "";

    save_messages(value, "Decrypt", date);
    create_note(value, "Decrypt", date);
});

// Load stored messages
messages.forEach(msg => create_note(msg.msg, msg.type, msg.date));
