export function sayHi() {
    console.log("hello there utils")
}

export function sayGoodbye() {
    console.log("goodbye")
}

const user = {
    name: 'Ed',
    age: 25
};

const signedIn = false;

export { user, signedIn};

//export default sayGoodbye;