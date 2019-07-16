const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
  };
//with detructuring, assign properties of objects to variables quickly. You don't have to assign each property to a variable.
function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const { tomorrow : tempOfTomorrow } = avgTemperatures; // change this line
    // change code above this line
    return tempOfTomorrow;
}
  
console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
};
//you can destructure nested objects too, by navigating the hierachy from the outermost scope.
function getMaxOfTmrw(forecast) {
    "use strict";
    // change code below this line
    const { tomorrow : { max : maxOfTomorrow } } = forecast; // change this line
    // change code above this line
    return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

//you can destructure arrays too, using the bracket notation. You can also access value at any index by using commas
let a = 8, b = 6;
(() => {
    "use strict";
    // change code below this line
    [b, a] = [a, b]; // [a, b] is a new array with a and b in it, and []
    // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8