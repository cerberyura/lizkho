

document.addEventListener('DOMContentLoaded', function () {

   MicroModal.init({
      openTrigger: 'data-custom-open',
      closeTrigger:'data-custom-close',
      disableScroll: true,
      disableFocus: true,
      awaitopenAnimation: true,
      awaitCloseAnimation: true
   })
   $('[data-custom-open]').click(function () {
      $('.modal [name=form]').val($(this).data('form'))
   })
   $('[data-custom-close]').click(function () {
      $('.modal [name=form]').val('')
   })

   $('.home-slider__heading').each(function () {
      let text = $(this).text().split(' '),
         first = text.shift()
      $(this).html(`${first} <br><span>${text.join(' ')}</span>`)
   })

   //MENU//
   function toggleMenu() {
      $('.menu-togle').toggleClass('menu-toggle_active')
      $('.top-menu').toggleClass('top-menu_active')
   }

   $('.menu-togle').click(function () { toggleMenu() })
   
   function closeMenu() {
      $('.menu-togle').removeClass('menu-toggle_active')
      $('.top-menu').removeClass('top-menu_active')
   }

   $(document).click(function(e) {
      if ($(e.target).closest('.menu-container').length) return
      closeMenu()
   })



//SLIDER SWIPER///
const homeSlider = new Swiper('.home-slider', {
   speed: 800,
   effect: 'fade',
   centeredSlides: true,
   pagination: {
      el: '.home-slider__pagination',
      type: 'custom',
      renderCustom: function (swiper, current, total) {
         let indT = total >= 10 ? total : `0${total}`
         let indC = total >= 10 ? current : `0${current}`
         return `<b>${indC}</b><span></span> ${indT}`
         }
   },
   scrollbar: {
      el: '.home-slider__scrollbar',
      draggable: true
   },
   navigation: {
      prevEl: '.home-slider__prev',
      nextEl: '.home-slider__next',
      
   },
   keyboard: {
      enabled: true,
      onlyInViewport: false
   },
   runCallbacksOnInit: true
})
   
   //HOME-CALLBACK-LIST-NUMBER
   $('.home-callback__list li').each(function() {
      $(this).html($(this).text().replace(/([0-9.]+)/g, '<span>$1</span>'))
   })

})