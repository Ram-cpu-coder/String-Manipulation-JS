This is the tutorial of the string manipulation in JS

Here in this tutorial, I have learnt about 
1. str[i]
2. str.charAt(i);
3. str.indexOf("letter");
4. str.lastIndexOf("letter");
5. str.toUpperCase();
6. str.toLoweCase();
7. str.slice(starting i, ending i);
8. str.slice(-1);
9. str.slice(starting i only);
10. str.includes("letter");
11. str.search("letter");
12. str.length;
13. str.replace("letter", "letter");
14. str.replaceAll("letter", "letter");
15. Escape character (\)
16. str.substring(starting i, ending i);


str[i]: 
this is giving us the certain letter in that index i.

str.charAt(i): 
this is also giving us the certain letter in that certain index i.

str.indexOf("letter"): 
this is giving us the index of that certain word letter in str variable.

str.lastIndexOf("letter"): 
this is giving us the last index of the repeated letters in str variable.

str.toUpperCase(): 
this makes us able to change the string variable stored in str to Upper Case.

str.LowerCase(): 
this makes us able to change the string stored in str to Lower Case.

str.slice(starting i, ending i): 
this helps us to slice the string data stored in str from given starting index i up to ending index i.

str.slice(-1): 
this is giving us the last character of that string data stored in str.

str.slice(starting i): 
this is helping us to slice the string data stored in str from given starting index i till the end of the string data.

str.includes("letter"): 
this helps us to find the letter in the given string data. the output is in boolean type : true or false. this is case sensitive.
Note: this is mostly used method as well.

str.search("letter"): 
this helps us to find the index of the given letter in the given string data.

str.length(): 
this helps us to find the length of the given string.

str.replace("a", "b"): 
this helps us to replace the letter a with b in the given string data. if there are multiple a 's then it only changes to the first one.

str.replaceAll("a", "b"): 
this helps us to replace all the a 's in the given string to b 's.

Escape character (\):
this helps us to use both of the quotation marks in the sring if we use it before the starting of the quotation marks and the before the ending of the quotation marks.

str.substring(starting i, ending i): 
this is similar to the slice method and does the same thing. it also has the starting point with the value of certain index and the ending point of the index with in the string.




MORE TO GO:
1. trim()
2. split("")
3. join()
4. concat()

str.trim():
this is used to remove the space used before the string and after the string.
this is used because in many cases we dont have the access to the data first until and unless the user inputs it 
the user might put in the spaces before and after the string
so after while logging they might not put the spaces, which leads to the unmatching of the string given by the user to our database and it will not work
so deal with this problem this is used

str.split(""):
this is used to change the given string to the array 
this is used to split the string 
here we can see there is no space in between the quotation marks, that means it will split the string in every characters separated by commas 

str.split(" "):
this has the space which means it is splitting the string in every words. 

str.split("any character"):
this is splitting the string in every points where it finds that particular character.

splitted.join():
this is joining back the splitted string and changing it back to the string from an aray 

splitted.join("a"):
we can join the splitted string back by the character given as well. 


concat():
similar to the normal concatation 
it is joining the strings 
syntax: str.concat(" another sentence or word or anything");
