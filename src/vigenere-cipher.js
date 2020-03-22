const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const A_CODE = 'A'.charCodeAt();
const ALPHABET_LENGTH = ALPHABET.length


class VigenereCipheringMachine {

    constructor(typeOfMachine = true) {
        this.currentMachine = typeOfMachine;
        return this;
    }

    vigenereEncryptSymbol(symbol, key) {
        let symbolPos = symbol.charCodeAt() - A_CODE;
        let keyPos = key.charCodeAt() - A_CODE;

        let encryptPos = symbolPos + keyPos;
        if (encryptPos >= ALPHABET_LENGTH) { encryptPos = encryptPos - ALPHABET_LENGTH; }
        return ALPHABET.substr(encryptPos, 1);
    }

    vigenereDecryptSymbol(symbol, key) {
        let symbolPos = symbol.charCodeAt() - A_CODE;
        let keyPos = key.charCodeAt() - A_CODE;

        let decryptPos = symbolPos - keyPos;
        if (decryptPos < 0) { decryptPos = ALPHABET_LENGTH - Math.abs(decryptPos); }
        return ALPHABET.substr(decryptPos, 1);
    }

    encrypt(message, key) {
        if (arguments.length < 2 || arguments[0] === undefined || arguments[1] === undefined) throw new Error();
        let output = [];
        message = message.toUpperCase().split('');
        key = key.toUpperCase().split('');
        let keyLength = key.length - 1;
        let iterator = 0;
        if (!this.currentMachine) message.reverse();
        message.forEach(element => {
            if (/^[A-Z]$/.test(element)) {
                output.push(this.vigenereEncryptSymbol(element, key[iterator]));
                iterator = (iterator < keyLength) ? iterator + 1 : 0;
            } else output.push(element);
        });
        output = output.join('');
        return output;
    }

    decrypt(encryptedMessage, key) {
        if (arguments.length < 2 || arguments[0] === undefined || arguments[1] === undefined) throw new Error();

        let output = [];
        encryptedMessage = encryptedMessage.toUpperCase().split('');
        key = key.toUpperCase().split('');
        let keyLength = key.length - 1;
        let iterator = 0;
        if (!this.currentMachine) encryptedMessage.reverse();
        encryptedMessage.forEach(element => {
            if (/^[A-Z]$/.test(element)) {
                output.push(this.vigenereDecryptSymbol(element, key[iterator]));
                iterator = (iterator < keyLength) ? iterator + 1 : 0;
            } else output.push(element);
        });

        output = output.join('');
        return output;
    }
}

module.exports = VigenereCipheringMachine;