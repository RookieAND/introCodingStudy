const bg_img = document.getElementsByClassName("main__background");
let imgNumber = 1;

function changeBackgroundImg() {
    imgNumber = imgNumber < 3 ? ++imgNumber : 1;
    bg_img[0].style.backgroundImage = `url(../img/bgimg${imgNumber}.jpg)`;
}

setInterval(changeBackgroundImg, 5000);