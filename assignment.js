
//problem: 01
function kilometerToMeter(kiloDistance){
    if(kiloDistance < 0){
        return "distance cannot be negative"; //bonus case (for negetive input)
    }
    else{
        var meterDistance = kiloDistance * 1000;
        return meterDistance;
    } 
}
var result = kilometerToMeter(); 
console.log(result);

//problem: 02
function budgetCalculator(watch, mobile, laptop){
    var totalCost = watch * 50 + mobile * 100 + laptop * 500;
    if(watch + mobile + laptop > 10){
        return totalCost - 100; // bonus case (discount price (100 taka) for 10+ products order) 
    }
    else{
        return totalCost;
    }
}
var finalBudget = budgetCalculator(); 
console.log(finalBudget);

//problem: 03
function hotelCost(dayCount){
    if(dayCount == 0){
        var hotelFare = "No Vacancy"; //Extra bonus case 
    }
    else if(dayCount <= 10){
        hotelFare = dayCount * 100;
    }
    else if(dayCount <= 20){
        var firstTenDays = 10 * 100;
        var secondDaycount = dayCount - 10;
        var secondHotelFare = secondDaycount * 80;
        hotelFare = firstTenDays + secondHotelFare;
    }
    else if(dayCount > 20){
        var secondtenDays = 10 * 80;
        var firstTenDays = 10 * 100;
        var finalDaycount = dayCount - 20;
        var finalDaysHotelFare = finalDaycount * 50;
        hotelFare = firstTenDays + secondtenDays + finalDaysHotelFare;
    }
    return hotelFare;
}
var finalCharge = hotelCost(); 
console.log(finalCharge);

//problem: 04
function megaFriend(friends){
    var longestWord = "";
    if(friends == ""){
        return "NO array is called by function"; //bonus case if blankArray is called then it will return a string
    }
    else{
        for (let i = 0; i < friends.length; i++) {
            const element = friends[i];
           
            if(element.length > longestWord.length){
                longestWord = element;
            } 
        }
    }
    
    return longestWord; 
}
var frindslist = ["Dipto", "Sohan", "Ibrahim", "Tomal", "Raihan","Rokibul",  "Sakib", "Enamul"];
var blankArray = []; //bonus case blank array
var longestFriendsName = megaFriend(blankArray);
console.log(longestFriendsName);
