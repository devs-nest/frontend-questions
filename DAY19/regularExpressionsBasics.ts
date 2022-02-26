let regexp = /^(\w+\s?)*$/;

alert(regexp.test("A good string")); // true
alert(regexp.test("Bad characters: $@#")); // false

let newregexp = /^(\w+\s?)*$/;
let str = "An input string that takes a long time or even makes this regexp hang!";

// will take a very long time
alert(newregexp.test(str));


let reg = /^(\d+)*$/;

let newstr = "012345678901234567890123456789z";

// will take a very long time (careful!)
alert(reg.test(newstr));

alert("JavaScript".match(/\w+Script/)); // JavaScript
alert("JavaScript".match(/(?=(\w+))\1Script/)); // null