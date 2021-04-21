function repeater(fn) {
    fn();
    fn();
    fn();
}

function sayHello() {
    console.log("Hello There!");
}

repeater(sayHello);