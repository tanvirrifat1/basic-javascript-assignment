// problem1...........................//...................

function radianToDegree(radian){
    const degree = radian * 57.2958;
    return degree;
}


// problem2........................//.......................

function isJavaScriptFile (file){
   
   if( file.endsWith(".js") === true){
    return true;
   }
   else {
    return false;
   }
}


// problem3.........................//.....................

function oilPrice (dieselNeed, petrolNeed, octaneNeed){

    const dieselPrice = 114;
    const petrolPrice = 130;
    const octanePrice = 135;

    const perLitterDiesel = dieselNeed * dieselPrice;
    const perLitterPetrol = petrolNeed * petrolPrice;
    const perLitterOctane = octaneNeed * octanePrice;

    const totalLitter = perLitterDiesel + perLitterPetrol+ perLitterOctane;

    return totalLitter;
}

// problem4.....................//........................

function  publicBusFare (person){
    const busCapacity = 50;
    const mincroCapacity = 11;
    const rateOfPublicBus = 250;
    let  remainingPerson = 0;

    if(typeof person !== 'number'){
        return 'please provide a valid number';
    }
    
    if(person < busCapacity){
        remainingPerson = person % mincroCapacity;
    }

    if( person >= busCapacity){

        if( person == busCapacity){
            remainingPerson = 0;
        }
        if(person > busCapacity){
            remainingPerson = person % busCapacity;
            if( remainingPerson >= mincroCapacity){
                if(remainingPerson == mincroCapacity){
                    remainingPerson = 0;
                }
            }
        }
    }
    return rateOfPublicBus * remainingPerson;
}


// problem5..........................//...................

function isBestFriend (object1, object2){
 
    const object1 = { names : 'rock', friend : 'alex'};
    const object2 = { names : 'alex', friend : 'rock'};

    if( object1.names === object2.friend && object1.friend === object2.names){
        return true;
    }

   else{
    
    return false;
    
   }
}

