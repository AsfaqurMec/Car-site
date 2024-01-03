const weaper = document.querySelector('.form-control');
const btn = document.querySelector('.but1');
const bd = document.querySelector('.bd');
weaper.addEventListener('click',()=>{
     weaper.classList.remove('active');
});

btn.addEventListener('click',()=>{
    weaper.classList.add('active-popup');
});

bd.addEventListener('click',()=>{
    weaper.classList.remove('active-popup');
});



  
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  