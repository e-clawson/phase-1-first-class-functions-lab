
const returnFirstTwoDrivers = function(){
  const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
  const firstdrivers = drivers.slice(0,2);
  return firstdrivers;
  };
  returnFirstTwoDrivers();

const returnLastTwoDrivers = function(){
  const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];
  const lastdrivers = drivers.slice(-2);
  return lastdrivers;
 };
returnLastTwoDrivers();
  
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
selectingDrivers[0];

function createFareMultiplier(){
  const multiply = (number) => (number * number);
  return multiply;
}
createFareMultiplier(4);

function fareDoubler (fare) {
  return fare * 2; 
}
fareDoubler(10);

function fareTripler (fare) {
  return fare * 3; 
}
fareTripler(12);

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
  return returnFirstTwoDrivers(drivers); 
}