// const user = {
//     name: "my name",
//     sayHi(){
//         console.log(user.name)
//     }
// };

const user = {
    name: "my name"
};

const admin = {
    name: " my admin"
};

function sayHi() {
    console.log(this.name);
}

user.hi = sayHi;
admin.hi = sayHi;

user.hi();
admin.hi();
