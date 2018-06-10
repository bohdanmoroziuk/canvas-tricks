
class Snowflakes {
    constructor() {
        this._storage = [];
    };

    get length() {
        return this._storage.length;
    };

    empty() {
        return this.length == 0;
    };

    reset() {
        this._storage = [];
    };

    add(snowflake) {
        if (snowflake instanceof Snowflake) {
            this._storage.push(snowflake);
            return true;
        }
        return false;
    };

    draw() {
        if ( ! this.empty()) {
            this._storage.forEach(snowflake => snowflake.draw());
        } else {
            throw new Error('the storage is empty');
        }
    };
};