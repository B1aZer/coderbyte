var btree = ( function () {        

    var Leaf = function (key) {
        this.key = key;

        this.parent = null;
        this.left = null;
        this.right = null;
    };

    var transplant = function (u, v) {
        if (u.parent === null) {
            Btree.root = v;   
        }
        else if (u === u.parent.left) {
            u.parent.left = v;
        }
        else {
            u.parant.right = v;
        }
        if (v !== null) {
            v.parent = u.parent;
        }
    };

    var Btree = function () {
    
        Btree.root = null;
        var leafs = [],
            x,
            y,
            z;

        this.insert = function (key) {
            y = null;
            x = Btree.root;
            z = new Leaf(key);
            while (x !== null) {
                y = x;
                if (key < x.key) {
                    x = x.left;
                }
                else {
                    x = x.right;
                }
            }
            z.parent = y;
            if (y === null) {
                Btree.root = z;
            }
            else if (z.key < y.key) {
                y.left = z;
            }
            else {
                y.right = z;
            }
            return z;
        };

        this.minimum = function (x) {
            x = x || Btree.root;
            while (x.left !== null) {
                x = x.left;
            }
            return x;
            
        };

        this.remove  = function (z) {
            if (z.left === null) {
                transplant(z, z.right);    
            }
            else if (z.right === null) {
                transplant(z, z.left);
            }
            else {
                y = this.minimum(z.right);
                if (y.parent !== z) {
                    transplant(y, y.right);  
                    y.right = z.right;
                    y.right.parent = y;
                }
                transplant(z, y);
                y.left = z.left;
                y.left.parent = y;

            }
        };
    };

    return new Btree;
}());

// sample data
var tops = btree.insert(12);
var left = btree.insert(9);
var right = btree.insert(15);
