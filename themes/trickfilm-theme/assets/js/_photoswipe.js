import PhotoSwipeLightbox from './photoswipe/photoswipe-lightbox.esm.js'

const gallery = new PhotoSwipeLightbox({
  gallery: '#gallery--individual--train--list',
  children: '.train--item',
  pswpModule: () => import('./photoswipe/photoswipe.esm.js'),
});
gallery.on('uiRegister', function() {
  gallery.pswp.ui.registerElement({
    name: 'custom-caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: 'Caption text',
    onInit: (el, pswp) => {
      gallery.pswp.on('change', () => {
        const currSlideElement = gallery.pswp.currSlide.data.element;
        let captionHTML = '';
        if (currSlideElement) {
            // get caption from alt attribute
            captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
        }
        el.innerHTML = captionHTML || '';
      });
    }
  });
});
gallery.init();

const gallery2 = new PhotoSwipeLightbox({
  gallery: '#gallery--individual--trains',
  children: '.train--single',
  pswpModule: () => import('./photoswipe/photoswipe.esm.js'),
});
gallery2.on('uiRegister', function() {
  gallery2.pswp.ui.registerElement({
    name: 'custom-caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: 'Caption text',
    onInit: (el, pswp) => {
      gallery2.pswp.on('change', () => {
        const currSlideElement = gallery2.pswp.currSlide.data.element;
        let captionHTML = '';
        if (currSlideElement) {
            // get caption from alt attribute
            captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
        }
        el.innerHTML = captionHTML || '';
      });
    }
  });
});
gallery2.init();

const gallery3 = new PhotoSwipeLightbox({
  gallery: '#gallery--individual--art--list',
  children: '.gallery--item',
  pswpModule: () => import('./photoswipe/photoswipe.esm.js'),
});
gallery3.on('uiRegister', function() {
  gallery3.pswp.ui.registerElement({
    name: 'custom-caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: 'Caption text',
    onInit: (el, pswp) => {
      gallery3.pswp.on('change', () => {
        const currSlideElement = gallery3.pswp.currSlide.data.element;
        let captionHTML = '';
        if (currSlideElement) {
            // get caption from alt attribute
            captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
        }
        el.innerHTML = captionHTML || '';
      });
    }
  });
});
gallery3.init();

const gallery4 = new PhotoSwipeLightbox({
  gallery: '#gallery--individual--art',
  children: '.individual--art',
  pswpModule: () => import('./photoswipe/photoswipe.esm.js'),
});
gallery4.on('uiRegister', function() {
  gallery4.pswp.ui.registerElement({
    name: 'custom-caption',
    order: 9,
    isButton: false,
    appendTo: 'root',
    html: 'Caption text',
    onInit: (el, pswp) => {
      gallery4.pswp.on('change', () => {
        const currSlideElement = gallery4.pswp.currSlide.data.element;
        let captionHTML = '';
        if (currSlideElement) {
            // get caption from alt attribute
            captionHTML = currSlideElement.querySelector('img').getAttribute('alt');
        }
        el.innerHTML = captionHTML || '';
      });
    }
  });
});
gallery4.init();