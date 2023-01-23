//create an empty object user
let user = {
  city: "bengalurur",
  age: 23,
};
// Add the property name with the value John
user.name = "john";
// . Add the property surname with the value Smith.
user.surname = "smith";
// Change the value of the name to Pete

user.name = "pete";
// Remove the property name from the object.
delete user.name;
console.log(user);

console.log(Object.keys(user));
// Object.keys(object) will return the array of keys....[key1 , key2, key3, key4, key5]
