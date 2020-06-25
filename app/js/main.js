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
}