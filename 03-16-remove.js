// 1
// this challenge involves implementing another lodash function 
// create this function with vanilla javascript

// _.remove(Array, Function)
    
// This function removes all elements from array that callback function returns truthy for.
// Returns an array of the removed elements (mutates the original array).
// The callback function is invoked with two arguments: (value, index)

const remove = (arr, cb) => {

}

// example code
let people = ["james", "hamish", "john", "garret"];
remove(people, function(value) {
    return value[0] === "j";
});

console.log(people);
// => ["hamish", "garret"]