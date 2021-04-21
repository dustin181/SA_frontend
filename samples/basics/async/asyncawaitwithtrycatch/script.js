function loginUser(email, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Now we have the data");
            resolve({ userEmail: email} )
        }, 1000);
    });

}

function getUserVideos(email){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["video1", "video2", "video3"])
        }, 1000);
    });
}

function videoDetails(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("title of the video")
        }, 1000);
    });
}

async function displayUser(){
    try{
        console.log("starting...")
        const loggedUser = await loginUser('ed', 'passwordblah');
        const videos = await getUserVideos(loggedUser.userEmail);
        const detail = await videoDetails(videos[0]);
        console.log(detail)
    }
    catch(err){
        console.log('We could not get the videos')
    }

}

displayUser();

