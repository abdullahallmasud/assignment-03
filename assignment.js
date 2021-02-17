
//problem: 01
function kiloToMeter(kiloDistance){
    if(kiloDistance < 0){
        return "distance cannot be negative"; //extra code
    }
    else{
        var meterDistance = kiloDistance * 1000;
        return meterDistance;
    } 
}
var result = kiloToMeter(-5); //calling function with the user input(-5) value as an example of execution of the code
console.log(result);

//problem: 02
function budgetCalculator(watch, mobile, laptop){
    var totalCost = watch * 50 + mobile * 100 + laptop * 500;
    if(watch + mobile + laptop > 10){
        return totalCost - 100; // bonus features(discount price) 
    }
    else{
        return totalCost;
    }
}
var finalBudget = budgetCalculator(4, 8, 3); //calling function with the user input(4, 8, 2) value as an example of execution of the code
console.log(finalBudget);

//problem: 03
function hotelcost(dayCount){
    if(dayCount == 0){
        hotelFare = "No Vacancy"; //Extra bonus case 
    }
    if(dayCount <= 10){
        var hotelFare = dayCount * 100;
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
var finalCharge = hotelcost(43); //calling function with the user input(43) value as an example of execution of the code
console.log(finalCharge);

//problem: 04
function megaFriend(friends){
    var longestWord = "";
    friends.forEach(function(maxFriendFinder) {
        if(maxFriendFinder.length > longestWord.length) {
          longestWord = maxFriendFinder;
        }
      });
    return longestWord; 
}

var maxFriendFinder = megaFriend(["Rokibul", "Dipto", "Sohan", "Ibrahim", "Tomal", "Raihan", "Sakib", "Enamul"]);
console.log(maxFriendFinder);
