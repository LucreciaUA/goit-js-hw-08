// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

let lightbox;
const gallery = document.querySelector(".gallery")
const item = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a class="gallery__link"  href="${original}">
        <img
        loading="lazy"
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
}).join("");
gallery.insertAdjacentHTML("beforeend", item);
gallery.addEventListener("click", (evt) => evt.preventDefault())

gallery.style.listStyle = "none";
lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionSelector: 'img',
    captionsData: 'alt',
    captionDelay: '250',
    alertErrorMessage: '（╯‵□′）╯︵┴─┴',
    overlay: true,
    overlayOpacity: 0.4,
    navText: ['←','→'],
 });





