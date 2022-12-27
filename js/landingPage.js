var imgArray = ['linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(images/bg1.jpg)', 'linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(images/bg2.jpg)', 'linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(images/bg3.jpg)', 'linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(images/bg4.jpg)', 'linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(images/bg5.jpg)', 'linear-gradient(90deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.5)), url(images/bg6.jpg)'],
imgIndex = 0,
topDiv = document.querySelector('.top-div'),
toolTip = document.querySelector('.tooltip');


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

var hiddenNav = document.querySelector('.hidden-nav'),
    closeBtn = document.querySelector('.close-btn');
    
function openBtn(ind) {
    hiddenNav.classList.toggle('show');
    toolTip.style.transform = 'scale(0)';
}

window.onclick = (e) => {
    if (!event.target.matches('.logo')) {
    var dropdowns = document.getElementsByClassName("hidden-nav");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const currentDate = new Date(), currentHour = currentDate.getHours();

window.onload = () => {
    if(currentHour < 7) {
        let ans = confirm("Good Morning dear❤️. Since it is still very early in the morning and it's still quite dark, do you wish to switch to the Dark theme?");
        if (ans) {
        themeToggle.click();
        } else {
        return;
        }
    }
    
    if(currentHour > 17) {
        let ans = confirm('Good Evening dear❤️. Since it is getting dark, do you wish to switch to the Dark theme?');
        if (ans) {
        themeToggle.click();
        } else {
        return;
        }
    }
}

toolTip.style.transform = 'scale(0)';

function closeTooltip() {
    toolTip.style.transform = 'scale(0)';
}

function showTooltip() {
    toolTip.style.transformOrigin = 'top left';
    toolTip.style.transition = 'transform .5s ease';
    toolTip.style.transform = 'scale(1)';
    setTimeout(closeTooltip, 5000);
}

setTimeout(showTooltip, 5000);

const themeToggle = document.querySelector('#toggle');
themeToggle.addEventListener('click', () => {
    themeToggle.classList.toggle('dark');
    if (themeToggle.classList.contains('dark')) {
        document.documentElement.style.setProperty('--bg1', '#1e1c29');
        document.documentElement.style.setProperty('--bg2', '#252836');
        document.documentElement.style.setProperty('--bg3', '#e9eaeb');
        document.documentElement.style.setProperty('--bg4', '#fff');
        document.documentElement.style.setProperty('--header', '#9a9ba1');
        document.documentElement.style.setProperty('--txt', '#575a64');
        document.documentElement.style.setProperty('--black', '#e9eaeb');
        document.documentElement.style.setProperty('--opaq', 'rgba(0, 0, 0, .7)');
        document.documentElement.style.setProperty('--err-txt', '#a42834');
        document.documentElement.style.setProperty('--err-bg', '#f8d7da');
    }
    else {
        document.documentElement.style.setProperty('--bg1', '#e9eaeb');
        document.documentElement.style.setProperty('--bg2', '#fff');
        document.documentElement.style.setProperty('--bg3', '#1e1c29');
        document.documentElement.style.setProperty('--bg4', '#252836');
        document.documentElement.style.setProperty('--header', '#777');
        document.documentElement.style.setProperty('--txt', '#999');
        document.documentElement.style.setProperty('--black', '#000');
        document.documentElement.style.setProperty('--opaq', 'rgba(243, 246, 251, .5)');
        document.documentElement.style.setProperty('--err-txt', '#f8d7da');
        document.documentElement.style.setProperty('--err-bg', '#a42834');
    }
});

