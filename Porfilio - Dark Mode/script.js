window.addEventListener('scroll', function (e) {
    var nav = document.getElementById('navbar');
    
     if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        nav.classList.add('navbar-scroll');
        nav.classList.remove('navbar-top');
      } else {
        nav.classList.add('navbar-top');
        nav.classList.remove('navbar-scroll');
     }
});
  
window.addEventListener('scroll', function (e) {
    var nav = document.getElementById('move');
    
     if (document.documentElement.scrollTop || document.body.scrollTop > window.innerHeight) {
        nav.classList.add('move-scrolled');
        nav.classList.remove('move-static');
      } else {
        nav.classList.add('move-static');
        nav.classList.remove('move-scrolled');
     }
  });
