const returnFirstTwoDrivers = function (obj) { const newObj = [obj[0], obj[1]]; return newObj };
const returnLastTwoDrivers = function (obj) { const lastDrivers = [obj[2], obj[3]]; return lastDrivers };

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function (arg) {
    return int * arg;
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, func) {
  if (func === returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(array);
  } else if (func === returnLastTwoDrivers) {
    return returnLastTwoDrivers(array);
  }
}

