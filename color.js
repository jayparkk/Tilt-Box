/*
    Created by Jay Park
    Allows the box to switch to random colors when clicked
*/


document.getElementById('root').addEventListener('click', changeColor);

function changeColor() {
    box = document.querySelector('.tilt-root');

    box.style.background = '-webkit-linear-graidient(135deg, ' + '#'+Math.floor(Math.random()*16777215).toString(16) + ' 30%, ' + '#'+Math.floor(Math.random()*16777215).toString(16) + ' 70%)';

    box.style.background = 'linear-gradient(135deg, ' + '#'+Math.floor(Math.random()*16777215).toString(16) + ' 30%, ' + '#'+Math.floor(Math.random()*16777215).toString(16) + ' 70%)'  
}
