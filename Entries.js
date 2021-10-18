const SecretDiary = require('./SecretDiary');

class Entries  {

    constructor() {
        this.secretDiary = new SecretDiary();
        this.#diary = [];
    }

    getEntries() {
        if (!this.secretDiary.getLock()) {
            return this.secretDiary.diary;
        } else {
            throw new Error('Diary is locked')
        }
    }

    addEntries(str) {
        if (!this.secretDiary.getLock()) {
            this.secretDiary.diary.push(str);
        } else {
            throw new Error('Diary is locked')
        }
    }
}

module.exports = Entries;