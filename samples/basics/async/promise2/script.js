function loginUser(email, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data");
            resolve({ userEmail: email} )
        }, 3000);
    });

}

function getUserVideos(email){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"])
        }, 3000);
    });
}

function videoDetails(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("title of the video")
        }, 3000);
    });
}

loginUser('ed', 'ypassword')
    .then(user => getUserVideos(user.email))
    .then(videos => videoDetails(videos[0]))
    .then(detail => console.log(detail))

