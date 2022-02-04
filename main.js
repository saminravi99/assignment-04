// Problem 1:

function anaToVori(ana){
    if(typeof ana != 'number'){
        return "Please enter a valid number";
    }  //Error handling if string / array is given input
    if(ana == 0){
        return "Please enter a value greater than 0";
    }  //Error handling if 0 is given as input
    if(ana < 0){
        return "Please enter a positive value";
    }  //Error handling if negative value is given as input

    let vori = ana / 16; // 16 Ana = 1 Vori
        return vori; 
}


// Problem 2:

function pandaCost(singaraQuantity, somuchaQuantity, jilapiQuantity) {

    if(typeof singaraQuantity != "number" || typeof somuchaQuantity != "number" || typeof jilapiQuantity != "number"){
        return "Please enter a valid quantity of Singara, Somucha and Jilapi";
    } //Error handling if string / array is given as input

    if(singaraQuantity < 0 || somuchaQuantity < 0 || jilapiQuantity < 0){
        return "Please enter a valid quantity";
    }  //Error handling if negarive value of quantity is given as input

    if (singaraQuantity == 0 && somuchaQuantity == 0 && jilapiQuantity == 0) {
        return "You have to select atleast one item";
    }  // Error handling if no item is selected as input
 

    let costPerSingara = 7;
    let costPerSomucha = 10;
    let costPerJilapi = 15;

    let totalSingaraCost = singaraQuantity * costPerSingara;
    let totalSomuchaCost = somuchaQuantity * costPerSomucha;
    let totalJilapiCost = jilapiQuantity * costPerJilapi;

    let totalCost = totalSingaraCost + totalSomuchaCost + totalJilapiCost;

    return totalCost;
}


// Problem 3:

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




// Problem 4:

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
