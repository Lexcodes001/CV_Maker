  var topDiv = document.querySelector('.top-div'), theme, currentTheme;

var hiddenNav = document.querySelector('.hidden-nav'),
    toolTip = document.querySelector('.tooltip'),
    closeBtn = document.querySelector('.close-btn');
    
const currentDate = new Date(), currentHour = currentDate.getHours();

const themeToggle = document.querySelector('#toggle');

currentTheme = localStorage.getItem("theme");
  
window.addEventListener('DOMContentLoaded', function(){
    //alert(currentTheme);
    if (currentTheme === "dark") {
      themeToggle.click();
    } else {
      themeToggle.checked = false;
    }
});
    
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

themeToggle.addEventListener('click', () => {
  
    if (themeToggle.checked) {
        localStorage.setItem("theme", "dark");
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
        localStorage.setItem("theme", "light");
        document.documentElement.style.setProperty('--bg1', '#e9eaeb');
        document.documentElement.style.setProperty('--bg2', '#fff');
        document.documentElement.style.setProperty('--bg3', '#1e1c29');
        document.documentElement.style.setProperty('--bg4', '#252836');
        document.documentElement.style.setProperty('--header', '#666');
        document.documentElement.style.setProperty('--txt', '#999');
        document.documentElement.style.setProperty('--black', '#000');
        document.documentElement.style.setProperty('--opaq', 'rgba(255, 255, 255, .5)');
        document.documentElement.style.setProperty('--err-txt', '#f8d7da');
        document.documentElement.style.setProperty('--err-bg', '#a42834');
    }
});

if (currentHour < 7 || currentHour > 17) {
    themeToggle.click();
  }