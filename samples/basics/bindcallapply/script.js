const person = {
    firstName: "Ed",
    lastName: "Developer",
    getName() {
        console.log(this.firstName + this.lastName);
    }
};

function registerUser(country, lang) {
    this.getName();
    console.log(`My country is ${country} and my language is ${lang}`)
}

// const register = registerUser.bind(person);
//
// person.getName();
// register("Hungary", "en");

// registerUser.call(person, "hungary", "en");
registerUser.apply(person, ['hungary', 'en'])