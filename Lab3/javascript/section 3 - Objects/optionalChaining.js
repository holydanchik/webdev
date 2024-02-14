let user = {}; // user has no address
alert( user?.address?.street ); // undefined (no error)


let userAdmin = {
    admin() {
      alert("I am admin");
    }
};
  
let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no such method)



let key = "firstName";
let user1 = {
  firstName: "John"
};

let user2 = null;
alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined
