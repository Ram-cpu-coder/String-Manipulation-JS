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

const replace = "    My name is Ram Kumar Dhimal     ";

const replaced = replace.replace("My","His");
const replaced1 = replace.replaceAll("a", "u");

console.log(replaced);
console.log(replaced1);


// ----------------------------------String slice, includes and search-------------
// ----------------------------------String slice, includes and search-------------

//whenever we need the substring then we use slice 
const para = "My name is Ram.";
const sliced = para.slice(3,6);  ///here we are giving two values as it needs one starting and another ending point of slicing

console.log(sliced);

//also we can give only one value as well that means the starting point only but it will return us all the remaining string from that certain starting point 
const slicedOne = para.slice(5);
console.log(slicedOne);

// Also we can findout the last charactar like this way
const lastchar = para.slice(-1);
console.log(lastchar);


// ------------------------------includes-------------------------------

//includes finds out the given char in the paragraph
// and returns the value in true and false form
const include = para.includes("Ram");
console.log(include);


// -------------------------------search--------------------------------------
// acts like the indexOf() and lastIndexOf() 

const search = para.search("Ram");
console.log(search); //output of index of given charactar

// --------------------------substring-----------------
const substring = para.substring(2,5);
console.log(substring); // similar to the slice()

// ---------------------------trim--------------

// its usecase is whenever the user inputs email and password with space before and after the string then this works to remove it

const trim = para.trim();
console.log(para);
console.log(trim); ///removes the space in front of the string and after the string

// ---------------------------split-----------------------------------

//split works to make the string, an array to pass it to the data base
// it is splitting the string 
const split = para.split(""); //without the space, it splits the string in every characters
const split1 = para.split(" "); // with space, it splits the string by every words.
const split2 = para.split("a"); // with certain character, it is splitting in every points where it finds that character

console.log(split);
console.log(split1);
console.log(split2);

// -------------------------join-----------------------------------------

// to change that array back to string
//if i want to join that splitted string, then join is used

const join = split2.join(); //it is joining the splitted string  
// but it stills separate the words by commas.

console.log(join);

//to change that array back to string then use join with the value of the same separated character 
//it can be joined by any character as well like:
const join1 = split2.join("a"); // it is removing all the commas and putting that character back

console.log(join1);

// -------------------------------concat--------------------------------
// it is the normal concatting process but using the method concat()
const concat= para.concat(" I live in Sydney.");

console.log(concat);