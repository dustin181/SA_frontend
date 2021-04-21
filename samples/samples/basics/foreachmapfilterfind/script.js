const videos = [
    "Training Day",
    "Matrix",
    "Fight Club",
    "Air Bud"
]

videos.forEach(function(video){
    console.log("run");
    console.log(video);
});

// const newVideos = videos.map(function(video){
//     return video.toUpperCase();
// });

const newVideos = videos.map((video) => {
    return video.toUpperCase();
});

console.log(newVideos);

const searchMovie = videos.find(function(video){
    return video.includes("rain")
});

console.log(searchMovie);

const filterMovie = videos.filter(function(video){
    return video.length < 8;
});

console.log(filterMovie);