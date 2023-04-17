const vowels_min = /[aeiou]/g;
const vowels_max = /[AEIOU]/g;
const keys = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat"
};

export default function encrypt(messages) {
    messages = messages
        .replace(vowels_min, (match) => keys[match])
        .replace(vowels_max, (match) => keys[match.toLowerCase()].toUpperCase())

    return messages
};
