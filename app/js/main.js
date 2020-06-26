let playVideo = document.querySelector('.play-video');
let close = document.querySelector('.close');
let header = document.querySelector('.header');
let popUp = document.querySelector('.pop-up');

playVideo.onclick = function(event){
    event.preventDefault();
    popUp.style.visibility = 'visible';
    header.classList.add('blur');
    document.body.style.overflow = 'hidden';
};

close.onclick = function () {
    popUp.style.visibility = 'hidden';
    header.classList.remove('blur');
    document.body.style.overflow = 'auto';
};

window.onclick = function (e) {
    if (e.target == popUp){
        popUp.style.visibility = 'hidden';
        header.classList.remove('blur');
        document.body.style.overflow = 'auto';
    }
};

// SLIDER
let textSlider = document.querySelectorAll('.slider-item');
let buttonPrew = document.querySelector('.prew');
let buttonNext = document.querySelector('.next');
let imgUser = document.querySelector('.imgUser');
let current = 0;

function slider(){
    for (let i = 0; i<textSlider.length; i++){
        textSlider[i].classList.add('hidden-slider');
    }
    textSlider[current].classList.remove('hidden-slider');
}
slider();

buttonPrew.onclick = function () {
    if (current - 1 == -1){
        current = textSlider.length - 1;
    }else {
        current--;
    }
    slider()
};
buttonNext.onclick = function () {
    if (current + 1 == textSlider.length){
        current = 0;
    }else {
        current++;
    }
    slider()
};


