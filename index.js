//Какое устройство

const isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  IOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return(
      isMobile.Android()||
      isMobile.IOS()||
      isMobile.Opera()||
      isMobile.Windows()

    );
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');
} else {
  document.body.classList.add('_mouse');
}

//Меню бургер 
const burgerButton = document.querySelector('.header__menu-button');
if(burgerButton) {
  const burgerLinks = document.querySelector('.header__menu-nav');
  burgerButton.addEventListener('click', function(e) {
    document.body.classList.toggle('_lock');
    burgerButton.classList.toggle('_active');
    burgerLinks.classList.toggle('_active');
  });
}

//Scroll
const menuLinks = document.querySelectorAll('.header__nav-link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const goToBlock = document.querySelector(menuLink.dataset.goto);
      const goToBlockValue = goToBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

      window.scrollTo({
        top: goToBlockValue,
        behavior: 'smooth'
      });
      e.preventDefault();
      
    }
  }
}
