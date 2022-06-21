// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr 
// и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. 
// Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.

// Закрытие с клавиатуры
// ВНИМАНИЕ
// Этот функционал не обязателен при сдаче задания, но будет хорошей дополнительной практикой.

// Добавь закрытие модального окна по нажатию клавиши Escape. Сделай так, чтобы прослушивание 
// клавиатуры было только пока открыто модальное окно. У библиотеки basicLightbox есть метод 
// для программного закрытия модального окна.

import { galleryItems } from './gallery-items.js';
// Change code below this line
import * as basicLightbox from 'basiclightbox'
const gallery = document.querySelector('.gallery');
let modalWindow

function createGalleryItems(){
    return gallery.innerHTML = galleryItems.map(({preview, original, description})=>
    `<a class="gallery__link" href= ${original}>
    <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
  </a>`).join('');
}
createGalleryItems(galleryItems);

gallery.addEventListener('click', onPictureClick)

function onPictureClick(event){
    event.preventDefault();
    if(event.target.nodeName !== 'IMG'){
        return;
    }

const originalImage = event.target.dataset.source;
 modalWindow.basicLightbox.create(`<img src=${originalImage} width="800" height="600">`,
{ showUp:()=>window.addEventListener('keydown', closeModalonEsc),
  hide:()=>window.removeEventListener('keydown', closeModalonEsc)}
  );

  modalWindow.show();
}
function closeModalonEsc(event){
 if(event.code ==='Escape'){
    modalWindow.close()
 }
}

console.log(gallery)
