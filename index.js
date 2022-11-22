function returnFirstTwoDrivers(drivers){
   const names = drivers.slice(0,2)
   return names;
    
}

function returnLastTwoDrivers(drivers){
   const names = drivers.slice(drivers.length - 2, (drivers.length ))
    return names;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
function createFareMultiplier(number){
   
    return function(multiplier){
        multiplier * number;
    }
}