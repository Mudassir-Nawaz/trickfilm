import PhotoSwipeLightbox from './photoswipe/photoswipe-lightbox.esm.js'

new PhotoSwipeLightbox({
  gallery: '#gallery--individual--art a',
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
}).init()
