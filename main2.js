/* 
 ২. [ ফাংশন নেম দিতে হবে pandaCost]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 

১ টি সিঙ্গারা এর দাম – ৭ টাকা

১ টি সমুচা এর দাম – ১০ টাকা 

১ টি জিলাপি এর দাম – ১৫ টাকা 

এখন সে যদি বিভিন্ন সংখ্যার সিঙ্গারা, সমুচা, আর জিলাপি এর অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে।  */

function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {

       if(typeof singaraQuantity != "number" || typeof somuchaQuantity != "number" || typeof jilapiQuantity != "number"){
        return "Please enter a valid quantity of Singara, Somucha and Jilapi";
    } //Error handling

    if(singaraQuantity < 0 || somuchaQuantity < 0 || jilapiQuantity < 0){
        return "Please enter a positive value";
    }  //Error handling

    if (singaraQuantity == 0 && somuchaQuantity == 0 && jilapiQuantity == 0) {
        return "You have to select atleast one item";
    }
 

    let costPerSingara = 7;
    let costPerSomucha = 10;
    let costPerJilapi = 15;

    let totalSingaraCost = singaraQuantity * costPerSingara;
    let totalSomuchaCost = somuchaQuantity * costPerSomucha;
    let totalJilapiCost = jilapiQuantity * costPerJilapi;

    let totalCost = totalSingaraCost + totalSomuchaCost + totalJilapiCost;

    return totalCost;
}

let mySingaraQuanity = 0;
let mySomuchaQuantity = 0;
let myJilapiQuantity = 0;

console.log(pandaCost(mySingaraQuanity, mySomuchaQuantity, myJilapiQuantity));


