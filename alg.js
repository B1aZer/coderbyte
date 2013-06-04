// Insertion sort

var arr = [5,2,4,6,1,3],
    key,
    i;

for (var j= 1; j < arr.length; j++) {
    key = arr[j];
    i = j - 1;
    while (i >= 0 && arr[i] > key) {
        arr[i + 1] = arr[i];
        i = i - 1;
    }
    arr[i + 1] = key;
}

console.log(arr);

// Divide and Conquer Sort Without Recursion 

var arr = [2, 4, 6, 1, 3, 5, 8, 7];

var mergesort = function (lst) {
    if (lst.length === 1) return lst;

    var L = lst.slice(0, lst.length / 2),
        R = lst.slice(lst.length / 2, lst.length);

    var left = mergesort(L),
        right = mergesort(R);

    return merge(left, right);

    function merge(left, right) {

        var res = [];

        var k = 0,
            i = 0,
            ii = 0,
            ll = left.length,
            lr = right.length;

         console.log('left' + left);
         console.log('right' + right);
        while (ll || lr) {

            if (ll && lr) {

                l = left[i];
                r = right[ii];


                if (l <= r) {
                    res.push(l);
                    i += 1;
                    ll -= 1;


                } else {
                    res.push(r);
                    ii += 1;
                    lr -= 1;
                }

            } else if (ll) {
                res = res.concat(left.slice(i, left.length));
                ll = 0;
            } else if (lr) {
                res = res.concat(right.slice(ii, right.length));
                lr = 0;
            }



        }
         console.log(res);
        return res;

    }


}

console.log(mergesort(arr));

