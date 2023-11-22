const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const navContent = document.querySelector('.mobile-nav-links');

menuBtn.addEventListener('click', () => {
    // navContent.classList.add('active');
    console.log('nav-bar added')
    navContent.style.display = "block";
     navContent.style.paddingRight = "1em";
     navContent.style.paddingTop = "1em";
     navContent.style.position = "fixed";
     navContent.style.top = "0";
     navContent.style.right = "0";
     navContent.style.bottom = "0";
     navContent.style.width = "40%";
});

closeBtn.addEventListener('click', () => {
    navContent.classList.remove('active');
    console.log('nav-bar removed')
    navContent.style.display = "none";
});