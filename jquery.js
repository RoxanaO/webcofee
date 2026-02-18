$('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    items: 4,
    nav: true,
    navText: ["<img src='img/left.jpg'>","<img src='img/right.jpg'>"],
    dots: false,
    loop: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
       
        960:{
            items:3
        },
        1200:{
            items:4
        }
    }
});

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  $(".reveal").on('click',function() {
    var $pwd = $(".pwd");
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
    } else {
        $pwd.attr('type', 'password');
    }
});

const visibilityToggle = document.querySelector('.visibility');
const input = document.querySelector('.input-container input');

var password = true;

visibilityToggle.addEventListener('click', function() {
    if (password) {
        input.setAttribute('type', 'text');
        visibilityToggle.innerHTML = 'visibility';  
    } else {
        input.setAttribute('type', 'password');
        visibilityToggle.innerHTML = 'visibility_off';
    }
    password = !password;
});







