var swiper = new Swiper(".slider", {
    direction: "vertical",
    autoplay:true,
    loop:true,
    speed:2500,
    parallax:true,
    mousewheel:true,

    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },

    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    }
  });

  let bars = document.querySelector('.bars');
  let close = document.querySelector('.close');
  let menu = document.querySelector('.full_menu');

  bars.addEventListener('click' , () =>{
    menu.classList.toggle('show_menu');
  });
  close.addEventListener('click' , () =>{
    menu.classList.toggle('show_menu');
  });