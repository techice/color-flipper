 const colors = ['green', 'red','rgb(133,122,200)','#f15025'];
let btn = document.querySelector('.btn');
let mycolor = document.querySelector('.color');

btn.addEventListener('click', function(){
    let randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    mycolor.innerHTML = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length)
}
