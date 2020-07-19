// feet into mile conversion
function feetToMile(feet){

    // There are 5280 feet in a mile.

    var mile =feet/5280;
    return mile;
}
var mile1 = feetToMile(10);
console.log("converted result1 : ", mile1);
var mile2 = feetToMile(30);
console.log("converted result2 : ",mile2);
var mile3 = feetToMile(50);
console.log("converted result3 : ",mile3);

// wood calculator

function woodCalculator(chair,table,bed){
// wood needed for 1 chair = 1 cb feet
// wood needed for 1 table = 3 cb feet
// wood needed for 1 bed = 5 cb feet;

     var woodCountForMoreChair = chair*1;
     var woodCountForMoreTable = table*3;
     var woodCountForMoreBed = bed*5;
     var total_wood =woodCountForMoreChair+woodCountForMoreTable+woodCountForMoreBed;
     return total_wood;
}
var wood_result = woodCalculator(5,10,15);
console.log("total amount of wood : ", wood_result);

// brick calculator
function brickCalculator(totalFloor){
    var totalBrick = 0;
    if(totalFloor < 0){
        return "not accepted"

    }
    if(totalFloor > 0){
        if(totalFloor >= 1 && totalFloor <= 10){
            totalBrick = (totalFloor*15)*1000;
        }
        else if (totalFloor >= 11 && totalFloor <= 20){
            totalBrick = (10*15)*1000;
            totalBrick += ((totalFloor - 10)*12)*1000;
        }
        else {
            totalBrick = (10*15)*1000;
            totalBrick += (10*12)*1000;
            totalBrick += ((totalFloor - 20)*10)*1000;
        }
    }
    return totalBrick;
}
var totalBrick = brickCalculator(30);
console.log("Total Brick Needed", totalBrick);

// Tiny Friend
function tinyFriend(names){
    var tinyName = names[0];
    for(var i = 0;i<names.length;i++){
        var currentName = names[i];
        if(currentName.length <tinyName.length){
            tinyName = currentName;
        }
    }
    return tinyName;
}
var result = tinyFriend(["Jonny","Jerin","Sabrina","Tomy","Samiha"]);
console.log("Tiny Friend's Name is : ",result);