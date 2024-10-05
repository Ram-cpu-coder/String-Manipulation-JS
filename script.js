//Escape Character(\)

const str = "Hi, I'm \"Ram\"";
console.log(str);

//another case scenario
const str1 = 'Hi, I\'m "Ram" and I\\live in Sydney';

//length of the string
const str2 = "my name is Ram Kumar Dhimal";

console.log(str2.length);   //output: 27

//upper_Case and lower_Case
const name ="ram";
const val = name.toUpperCase();
const val1 = name.toLowerCase();

console.log(val);
console.log(val1);


//index, indexOf(), lastIndexOf()
const sen = "My name is Ram Kumar Dhimal";
console.log(sen);

const char = sen.charAt(4);

const val2 = sen[5];

console.log(char);
console.log(val2);

//indexOf()
const val3 = sen.indexOf("m"); //it is showing the first index of letter m in sen
console.log(val3);

//lastIndeOf()
const val4 = sen.lastIndexOf("m"); //it is showing the last index of letter m in sen
console.log(val4);

//replace

const replace = "My name is Ram Kumar Dhimal";

const replaced = replace.replace("My","His");
const replaced1 = replace.replaceAll("a", "u");

console.log(replaced);
console.log(replaced1);