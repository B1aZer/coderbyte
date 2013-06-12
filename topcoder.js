/*
 * SRM 1
 * http://community.topcoder.com/stat?c=problem_statement&pm=52&rd=3000
 */
function timeLeft(initialValue, interest, monthly) {


    var left = 0,
        month_pr;
    while (initialValue > 0 && left < 1200) {
        month_pr = (initialValue * interest / 100);
        initialValue = initialValue - monthly + month_pr;
        left += 1;

    }
    return left-1;
}
//alert(timeLeft(100, 0, 100));
alert(timeLeft(100, 20, 100));
alert(timeLeft(50, 10, 10));

/*
 * SRM 144
 * Div 1 Lv 1
 * http://community.topcoder.com/stat?c=problem_statement&pm=1704&rd=4515
 */ 

function binary_test(str, first) {
    var sum = 0,
        newstr = first || '0';
    for (var i = 0; i < str.length; i++) {
        sum = parseInt(str[i]) - parseInt(newstr[i]) - (parseInt(newstr.charAt(i-1)) || 0);
        if (sum < 0 || sum > 1) {
            newstr = false;
            break;
        }
        newstr += sum;
        
    }
    return (newstr && newstr.substring(0,newstr.length - 1)) || "NONE";
}
function binary(str) {
    if (str == '1') return ["NONE", 1];
    if (str == '2') return ["NONE", "NONE"];
    var final = [binary_test(str, '0'), binary_test(str, '1')];
    return final;
}

//alert(binary('123210122'));
//alert(binary('12221112222221112221111111112221111'));
//alert(binary('123210120'));
alert(binary('1'));

/*
 * SRM 144
 * Div 1 Lv 2
 * http://community.topcoder.com/stat?c=problem_statement&pm=1659&rd=4515
 */   
var fact = function (n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    if (fact[n]) {
        var f = fact[n];
    } else {
        var f = n * fact(n - 1);
        fact[n] = f;
    }
    return f;
}

var sum = function (n) {
    if (n === 0) {
        return 0;
    }
    if (sum[n]) {
        var f = n + sum[n];

    } else {
        var f = n + sum(n - 1);
        sum[n] = f;

    }
    return f;
}

var compute = function (ch, bl, sr, un) {
    console.log(ch, bl, sr, un);
    if (sr === 'F' && un === 'F') {
        return Math.pow(ch, bl);
    } else if (sr === 'T' && un === 'F') {
        return fact(ch + bl - 1) / (fact(ch - 1) * fact(bl));
    } else if (sr === 'F' && un === 'T') {
        return fact(ch) / fact(ch - bl);
    } else {
        return fact(ch) / (fact(ch - bl) * fact(bl));
    }
}

var sorted = function (a, b) {
    var name1 = a.split(':')[0],
        name2 = b.split(':')[0];
    var choice_1 = parseInt(a.split(':')[1].split(' ')[1]),
        choice_2 = parseInt(b.split(':')[1].split(' ')[1]);
    var blanks_1 = parseInt(a.split(':')[1].split(' ')[2]),
        blanks_2 = parseInt(b.split(':')[1].split(' ')[2]);
    var sorted_1 = a.split(':')[1].split(' ')[3],
        sorted_2 = b.split(':')[1].split(' ')[3];
    var unique_1 = a.split(':')[1].split(' ')[4],
        unique_2 = b.split(':')[1].split(' ')[4];
    console.log(a);
    console.log(b);
    //compute(choice_1,blanks_1,sorted_1,unique_1) < compute(choice_2,blanks_2,sorted_2,unique_2)
    a = compute(choice_1, blanks_1, sorted_1, unique_1);
    b = compute(choice_2, blanks_2, sorted_2, unique_2);
    console.log(a);
    console.log(b);
    return (a === b) ? name1.localeCompare(name2) : 1 / a < 1 / b;
}

var sortByOdds = function (data) {
    var newarr = [];
    var arr = data.sort(sorted);
    for (var i = 0; i < arr.length; i++) {
        newarr.push(arr[i].split(':')[0]);
    }
    return newarr;
}


var input = [
    "PICK ANY TWO: 10 2 F F", "PICK TWO IN ORDER: 10 2 T F", "PICK TWO DIFFERENT: 10 2 F T", "PICK TWO LIMITED: 10 2 T T"];
var input2 = ["INDIGO: 93 8 T F", "ORANGE: 29 8 F T", "VIOLET: 76 6 F F", "BLUE: 100 8 T T", "RED: 99 8 T T", "GREEN: 78 6 F T", "YELLOW: 75 6 F F"];
var input3 = [
	"EXTRA WHITESPACE: 10 1 T T", "VERY VERY VERY VERY VERY LONGNAME: 99 8 T F", "VERY VERY VERY VERY VERY LONGNAM: 100 1 F F"];
//alert(sortByOdds(input));
//alert(sortByOdds(input2));
alert(sortByOdds(input3));


/*
 * SRM 203
 * Div 2 Lv 1
 * http://community.topcoder.com/stat?c=problem_statement&pm=2913&rd=5849
 */

var existingNames = ["MasterOfDisaster", "DingBat", "Orpheus", "WolfMan", "MrKnowItAll"];
var existingNames2 = ["MasterOfDisaster", "TygerTyger1", "DingBat", "Orpheus",
    "TygerTyger", "WolfMan", "MrKnowItAll"];
var existingNames3 = ["Bart4", "Bart5", "Bart6", "Bart7", "Bart8", "Bart9", "Bart10",
    "Lisa", "Marge", "Homer", "Bart", "Bart1", "Bart2", "Bart3",
    "Bart11", "Bart12"];
var existingNames4 = ["gvI", "umf48", "umf40", "vPl", "uQF", "umf29", "Ubo", "Leu", "umf46", "zKB", "umf9", "umf19", "XTS", "umf18", "eRC", "tXu", "umf", "NYm", "umf57", "fUz", "fgO", "umf17", "umf62", "umf33", "KTj", "umf63", "kSW", "Jed", "umf59", "umf39", "SvE", "umf54", "umf41", "ysr", "umf6", "umf52", "Wvo", "Xck", "PmI", "umf23", "wtn", "umf24", "UfC", "umf32", "umf21", "umf14", "umf61", "umf38", "etz", "mQL"];

var arraysort = function (a, b) {
    var aNum = a.replace(/\D/g, '') || 0,
        bNum = b.replace(/\D/g, '') || 0;
    if (aNum || bNum) {
        return parseInt(aNum) - parseInt(bNum);
    }
    return a.localeCompare(b);
};

var checkName = function (name, names) {
    names = names.sort(arraysort);
    var i = 0,
        j = 1,
        nameOrg = name;
    while (i < names.length) {
        if (name === names[i]) {
            name = nameOrg + j;
            j += 1;
        }
        i += 1;
    }
    return name;
}

alert(checkName('umf', existingNames4));




