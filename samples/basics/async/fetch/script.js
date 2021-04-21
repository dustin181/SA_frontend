fetch('https://api.adviceslip.com/advice')
.then(result => result.json())
.then(data => console.log(data.slip.advice))

