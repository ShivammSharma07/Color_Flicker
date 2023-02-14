const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// creating event 
 
btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber(){
    // to create random number 
    return Math.floor(Math.random()*colors.length);
}