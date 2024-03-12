var myName = "Johnson";
document.getElementById("heading").innerHTML = myName;
const shoppingList = ["bread", "sugar", "honey"];

const user = {
  fname: "johnson",
  lname: "OIC",
  fullName: () => {},
  email: "123435@gamil.com",
  phone: 90756365265,
  userName: "oluwaBiggy",
  language: ["html", "css", "javascript"],
  isVerified: true,
};

document.getElementById("heading").innerHTML = user.userName;
document.getElementById("heading").innerHTML = user["name"];
document.getElementById("heading").innerHTML = shoppingList[1];

// window.alert("Hello World");
// alert("second alart");

const deleteApp = window.confirm("are you sure you want to delete you account");

console.log(deleteApp);
console.log(myName);
console.log(shoppingList);

console.log(user);
