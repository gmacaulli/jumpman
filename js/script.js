const man = document.querySelector('.man');
const post = document.querySelector('.post');

const jump = () =>{
    man.classList.add('jump');

    setTimeout(() => {
        man.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    console.log('loop')

    const postPosition = post.offsetLeft;
    const manPosition = +window.getComputedStyle(man).bottom.replace('px', '');

    if (postPosition <= 120 && postPosition > 0 && manPosition < 80 ) {

        post.style.animation = 'none';
        post.style.left = `${postPosition}px`;

        man.style.animation = 'none';
        man.style.bottom = `${manPosition}px`;

        man.src="image/gameover.png";
        man.style.width = '270px'
        man.style.marginLeft = '0px'

        clearInterval(loop);

    }

}, 10);


document.addEventListener('keydown', jump);