import PhotoSwipeLightbox from './photoswipe/photoswipe-lightbox.esm.js'

new PhotoSwipeLightbox({
<<<<<<< HEAD
  gallery: '#gallery--individual--art a',
=======
  gallery: '#gallery--individual--train--list',
  children: '.train--item',
>>>>>>> 679dba06d5d5fcbd5072c8e10f88f1dc30985bd2
  pswpModule: () => import('./photoswipe/photoswipe.esm.js'),
}).init()

new PhotoSwipeLightbox({
  gallery: '#gallery--individual--trains',
  children: '.train--single',
  pswpModule: () => import('./photoswipe/photoswipe.esm.js'),
}).init()

new PhotoSwipeLightbox({
  gallery: '#gallery--individual--art--list',
  children: '.gallery--item',
  pswpModule: () => import('./photoswipe/photoswipe.esm.js'),
<<<<<<< HEAD
}).init()
=======
}).init()
>>>>>>> 679dba06d5d5fcbd5072c8e10f88f1dc30985bd2
