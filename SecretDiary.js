const Entries = require('./Entries');
class SecretDiary {
    
    #lock
    constructor() {
        this.#lock = true;
        
    }

    getLock() {
        return this.#lock;
    }
    

    unlock() {
        this.#lock === false;
    }

    lock() {
        this.#lock === true;
        throw new Error('Locked');
    }
}

module.exports = SecretDiary;