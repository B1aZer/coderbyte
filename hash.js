var hash = ( function () {

var createHash = function (k) {
    var hash = 0;
    for (var i=0; i < k.length; i++) {
        hash = hash + k.charCodeAt(i); // % n where n - is a number of buckets. Will require colliosion resolution for this.
    }
    return hash;
}

var createOpenHash = function (k, n) {
    var hash = 0;
    for (var i=0; i < k.length; i++) {
        hash = hash + k.charCodeAt(i) + n; 
    }
    return hash;
}       

var Hashtable = function () {
    var set = [],
        m = 100000;

    this.insert = function (key, val) {
        var hsh = createHash(key); 
        set[hsh] = val;
    },
    this.remove = function () {
    },
    this.search = function (key) {
        var hsh = createHash(key); 
        return set[hsh];
    },
    this.oInsert = function (key) {
        var i = 0,
            hsh;
        do {
            hsh = createOpenHash(key,i);
            if (!set[hsh] || set[hsh] === 'DELETED') {
                set[hsh] = key;
                return hsh;
            }
            else {
                i += 1;
            }
        } while (i <= m);
    },
    // probe search
    this.oSearch = function (key) {
        var i = 0,
            hsh;
        do {
            hsh = createOpenHash(key,i);
            if (set[hsh] === key) {
                return hsh;
            }
            else {
                i += 1;
            }
        } while (set[hsh] && i <= m);
    },
    this.oDelete = function (key) {
        var hsh = this.oSearch(key);
        set[hsh] = 'DELETED';
    }
};

Hashtable.prototype = {
   // some public methods 
}

return new Hashtable;

}());


//hash.add(12);
