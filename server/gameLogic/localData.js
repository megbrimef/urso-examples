class LocalData {   
    constructor(){
        this._data = {};
    }

    get (name) {
        return this.recursiveGet(name, this._data);
    };

    set (key, value) {
        this.recursiveSet(key, value, this._data);
        return true;
    };

    recursiveGet(key, object, defaultResult) {
        if (object === undefined)
            return defaultResult;

        key = (typeof key === 'string') ? key.split(".") : key;

        for (let k of key) {
            if (typeof object[k] === 'undefined')
                return defaultResult;

            object = object[k];
        }

        return object;
    };


    recursiveSet(key, value, object) {
        key = (typeof key === 'string') ? key.split(".") : key;

        let firstKey = key.shift();

        if (key.length > 0) {
            if (!object[firstKey])
                object[firstKey] = {};

            this.recursiveSet(key, value, object[firstKey]);
        } else
            object[firstKey] = value;

        return true;
    };
}

const instance = new LocalData();
Object.freeze(instance);

module.exports = instance;