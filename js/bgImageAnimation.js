var imgArray = ['linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(images/bg1.jpg)', 'linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(images/bg2.jpg)', 'linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(images/bg3.jpg)', 'linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(images/bg4.jpg)', 'linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(images/bg5.jpg)', 'linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(images/bg6.jpg)'],
imgIndex = 0;


function changeImage() {
    //body.setAttribute('src', imgArray[imgIndex]);
    topDiv.style.background = imgArray[imgIndex];
    topDiv.style.backgroundRepeat = 'no-repeat';
    topDiv.style.backgroundSize = 'cover';
    //topDiv.style.transition = 'background-image 1s ease';
    imgIndex++;
    if (imgIndex >= imgArray.length) {
        imgIndex = 0;
    }
}

setInterval(changeImage,5000);