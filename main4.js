/* ৪. [ ফাংশন নেম দিতে হবে oddFriend]: বিস্তারিত ভিডিওতে দেখো।  */

function oddFriend(friendsArray) {
    if (Array.isArray(friendsArray) == false) {
        return "Please enter a valid array";
    }  //Error handling is number / string / object is given as input

    if(friendsArray.length == 0){
        return "Please do not enter an empty array";
    }  //Error handling if an empty array is declared as input


    let oddName = ""; //Declaring an empty string
    for (let i = 0; i < friendsArray.length; i++) {

        if (typeof friendsArray[i] != 'string') {
            continue;
        }  //Error handling if number type data is kept inside the array. 

        if (isNaN((friendsArray[i])) == false){
            continue;   
        } /* Error Handling if  1 digit/ 3 digit / 5 digit etc i.e odd digit numbers datatype are kept inside a string within the array*/

        if (friendsArray[i].length % 2 != 0){
            oddName = friendsArray[i];
            return oddName;
        }
    }
}
let myArray = ["Sadman",  34, 54,  "323", 76, 91, "Rakiba", "123", "224", "Khan", "Samina", "Salman", "Fahima", "Sharif", , "Abdullah", "Sakib"];   


console.log(oddFriend(myArray));
console.log(typeof oddFriend(myArray));


// myArray2 = "45"
// myArray3 = isNaN(myArray2);
// console.log(myArray3);