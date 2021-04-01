const button = document.querySelector('.container button');
const jokeText = document.querySelector('#joke');

// button.addEventListener('click', getJoke);
let jokeData

button.addEventListener('click', getJoke)
function getJoke (){
    fetch('https://official-joke-api.appspot.com/random_joke')
.then((response)=>{
    if(response.status !== 200){
        console.log(`Looks like there was aproblem. status code : ${response.status}`)
    }else{
          return response.json()
    }
})
.then (data=>{
    jokeData=data;
    })

    const setUp = jokeData.setup;
    const punchLine = jokeData.punchline;
    jokeText.textContent = setUp + punchLine;

}