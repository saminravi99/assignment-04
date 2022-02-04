/* ৩. [ ফাংশন নেম দিতে হবে picnicBudget]: প্যারামিটার হিসাবে নিবে কয়জন পিকিনিক এ যাবে সেই সংখ্যা। 

যদি ১০০ বা তার কম যায় তাহলে প্রত্যেক এর জন্য খরচ হবে ৫০০০ টাকা করে। 

যদি ১০০ এর বেশি কিন্তু ২০০ এর কম বা সমান যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি (অর্থাৎ ১০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক ওই জন্য ৪০০০ টাকা করে দিতে হবে। 

আর যদি ২০০ এর বেশি যায় তাহলে প্রথম ১০০ জন এর প্রতি জন এর জন্য ৫০০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যতজন আছে তাদের প্রত্যেকের জন্য ৪০০০ টাকা করে দিতে হবে। এর ২০০ এর বেশি (অর্থাৎ ২০১ নম্বর থেকে) যতজন আছে তাদের প্রত্যেক এর জন্য ৩০০০ টাকা করে দিতে হবে।  



এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা পিকনিক এর বাজেট হতে হবে। ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে।  */

// function picnicBudget(people){
//     if(typeof people != 'number'){
//         return 'Please enter a valid number';
//     }  //Error handling

//     if(people <= 0){
//         return "Please Enter a valid number of people";
//     }  //Error handling
 
//     if(people <= 100){
//         costPerPeople = 5000;
//         totalCost = people * costPerPeople;
//         return totalCost;
//     } // If number of people is less or equal to 100
//     if(people > 100 && people <= 200){
//         costFirstHundred = 100 * 5000;
//         restCost = (people - 100) * 4000;
//         totalCost = costFirstHundred + restCost;
//         return totalCost;
//     } // If number of people is more than 100 but less than or equal to 200
//     if(people > 200 ){
//         costFirstHundreds = 100 * 5000;
//         costSecondHundred =  100 * 4000;
//         restCost = (people - 200) * 3000;
//         totalCost = costFirstHundreds + costSecondHundred + restCost;
//         return totalCost;
//     } // If number of people is more than 200
// }

function picnicBudget(people){
    if(typeof people != 'number'){
        return 'Please enter a valid number';
    }  //Error handling if string or array is given as input

    if(people <= 0){
        return "Please Enter a valid number of people";
    }  //Error handling if number of people is 0 or less than 0 i.e. negative value
 
    if(people <= 100){
        let costPerPeople = 5000;
        let totalCost = people * costPerPeople;
        return totalCost;
    } // If number of people is less or equal to 100
    if(people > 100 && people <= 200){
        let costFirstHundreds = 100 * 5000;
        let restCost = (people - 100) * 4000;
        let totalCost = costFirstHundreds + restCost;
        return totalCost;
    } // If number of people is more than 100 but less than or equal to 200
    if(people > 200 ){
        let costFirstHundreds = 100 * 5000;
        let costSecondHundreds =  100 * 4000;
        let restCost = (people - 200) * 3000;
        let totalCost = costFirstHundreds + costSecondHundreds + restCost;
        return totalCost;
    } // If number of people is more than 200
}

let myPeople = 400;
let myCost = picnicBudget(myPeople);
console.log(myCost);
console.log(typeof myCost);