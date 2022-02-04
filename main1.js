// ১. [ ফাংশন নেম দিতে হবে anaToVori ]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে আনা (ana)। তারপর সেটাকে ভরি তে কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে। 

function anaToVori(ana){
    if(typeof ana != 'number'){
        return "Please enter a valid number";
    }  //Error handling
    if(ana == 0){
        return "Please enter a value greater than 0";
    }  //Error handling
    if(ana < 0){
        return "Please enter a positive value";
    }  //Error handling

    let vori = ana / 16;
        return vori;
}

myAna= 32;
console.log(anaToVori(myAna));
console.log(typeof anaToVori(myAna));
