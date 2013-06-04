// http://bigocheatsheet.com/
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

// Mergesort

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
        return res;

    }


}

console.log(mergesort(arr));

// Quicksort

var arr = [2, 4, 6, 1, 3, 5, 8, 7];

Array.prototype.swap=function(a, b)
{
	var tmp=this[a];
	this[a]=this[b];
	this[b]=tmp;
}

function qsort(array, begin, end)
{
	if(end-1>begin) {
		var pivot=begin+Math.floor(Math.random()*(end-begin));
		pivot=partition(array, begin, end, pivot);

		qsort(array, begin, pivot);
		qsort(array, pivot+1, end);
	}
    return  array;
}


function partition(array, begin, end, pivot)
{
	var piv=array[pivot];
	array.swap(pivot, end-1);
	var store=begin;
	var ix;
	for(ix=begin; ix<end-1; ++ix) {
		if(array[ix]<=piv) {
			array.swap(store, ix);
			++store;
		}
	}
	array.swap(end-1, store);

	return store;
}


console.log(qsort(arr, 0, arr.length));
