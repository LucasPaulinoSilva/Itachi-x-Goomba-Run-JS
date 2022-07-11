const itachi = document.querySelector('.itachi');
const goomba = document.querySelector('.goomba');
const gameover = document.querySelector('.gameover');
const score = document.querySelector('.score');

/*Realiza movimento de pulo*/
const jump = () => {
    itachi.classList.add('jump');

    setTimeout(() => {
        itachi.classList.remove('jump');
    }, 500);
}    

let count = 0;

/*Realiza o loop para verificar o momento do game over satisfazendo as condições*/
const loop = setInterval(() => {
    
    const goombaPosition = goomba.offsetLeft;
    const itachiPosition = +window.getComputedStyle(itachi).top.replace('px', '');
     
    if (goombaPosition <= 90 && goombaPosition > 0 && itachiPosition > 290) {

        goomba.style.animation = 'none';
        goomba.style.left = `${goombaPosition}px`;

        itachi.style.animation = 'none';
        itachi.style.top = `${itachiPosition}px`;

        itachi.src = './images/madeira.png'
        itachi.style.width = '150px'
        itachi.style.marginLeft = '0px'

        gameover.src = 'images/gameover.png'
        gameover.style.top = '70px'
        gameover.style.width = '500px'
        gameover.style.marginLeft = '250px'

        clearInterval(loop);
    }

    count++;
    score.innerHTML = `SCORE: ${count}`;

}, 10);  

document.addEventListener('keydown', jump); 
