import { galleryItems } from './gallery-items.js';
// Change code below this line

function createGalleryItemsMarkup(images) {
    return images.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    }).join("");
}

// function onModalClose(){
//     instance.close()
// }

// function pressOnEsc(event){
//     const ESC_KEY_CODE = 'Escape'
//     if(event.code === ESC_KEY_CODE){
//     onModalClose();
//     }
// }


const onGalleryImageClick = (event) => {
    event.preventDefault();

    const instance = basicLightbox.create(

    `<img src = "${event.target.dataset.source}"/>`)
    // ,{
    // onShow: (instance) => {
    //     winsow.addEventListener("keydown", pressOnEsc);
    // },
    // onClose: (instance) => {
    //     winsow.removeEventListener("keydown", pressOnEsc);
    // }}
// );
    instance.show();
}




console.log(galleryItems);

const galleryRef = document.querySelector(".gallery")
galleryRef.insertAdjacentHTML("beforeend", createGalleryItemsMarkup(galleryItems))
galleryRef.addEventListener("click", onGalleryImageClick)