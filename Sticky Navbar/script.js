const navs = document.querySelector('.nav');

window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scrollY > navs.offsetHeight + 150) {
        navs.classList.add('active');
    } else {
        navs.classList.remove('active');
    }
}