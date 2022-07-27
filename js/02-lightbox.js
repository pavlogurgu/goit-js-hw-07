import { galleryItems } from './gallery-items.js';
// Change code below this line

const simpleGallery = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsMarkup(galleryItems);

simpleGallery.insertAdjacentHTML('beforeend', galleryItemsMarkup);




function createGalleryItemsMarkup(images) {
    return images.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
        }).join("");
}

function onClickLightBoxGallery(e) {
    e.preventDefault();
    const gallerySimpleLightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
    });
    }

simpleGallery.addEventListener('click', onClickLightBoxGallery);