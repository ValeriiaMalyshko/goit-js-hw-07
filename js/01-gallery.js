import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgEl = document.querySelector("div.gallery");
const imgMarkup = createImgCard(galleryItems);

imgEl.insertAdjacentHTML("beforeend", imgMarkup);
imgEl.addEventListener("click", onImgElClick);

function createImgCard(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link"
      onclick="event.preventDefault()"
      href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
       />
      </a>
    </div>`;
    })
    .join("");
}

function onImgElClick(event) {
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
`,
    {
      onShow: () => {
    
        window.addEventListener("keydown", onClickEscape);
      },
      onClose: () => window.removeEventListener("keydown", onClickEscape),
    }
  );
  const onClickEscape = (event) => {
    if (event.key === "Escape") {

      instance.close();
    }
  };
  instance.show();
}