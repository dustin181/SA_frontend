const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("getting user");
        //resolve({ user: "ed"} );
        reject(new Error('Could not find user'))
    },2000);
});

promise.then(user => {
    console.log(user);
}).catch(err => console.log(err.message));