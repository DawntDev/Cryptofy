const vowels_min = /(ai|enter|imes|ober|ufat)/g;
const vowels_max = /(AI|ENTER|IMES|OBER|UFAT)/g;
const keys = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
};

export default function decrypt(messages) {
    messages = messages
        .replace(vowels_min, (match) => keys[match])
        .replace(vowels_max, (match) => keys[match.toLowerCase()].toUpperCase())

    return messages
};
