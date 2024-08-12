// Exercise 3: Enums and Type Assertions
// Task: Create an enum for different user roles (Admin, User, Guest). Write a function that 
// takes a role and returns a message based on the role. Use type assertions where appropriate.

enum Roles {
    Admin,
    User, 
    Guest
}

function getRoleMessage(role: Roles): string {
    switch (role) {
         case Roles.Admin:
                return "Welcome, You have access as an ADMIN";
         case Roles.User:
                return "Welcome, You have access, as a USER";
         case Roles.Guest:
                return "Welcome, You have access, as a GUEST";
          default:
                return "Unknown Role" 
     }
}

let admin = getRoleMessage(Roles.Admin);
let guest = getRoleMessage(Roles.Guest);
let user = getRoleMessage(Roles.User);


console.log(admin);
console.log(guest);
console.log(user);


