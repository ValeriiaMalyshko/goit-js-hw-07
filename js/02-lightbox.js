import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgEl = document.querySelector("div.gallery");
const imgMarkup = createImgCard(galleryItems);

imgEl.insertAdjacentHTML("beforeend", imgMarkup);


function createImgCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}" onclick="event.preventDefault()">
  <img class="gallery__image" src="${preview}" alt= "Image description" title = "${description}" />
</a>`;
    })
    .join("");
}

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
