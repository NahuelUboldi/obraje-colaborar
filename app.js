//SLIDER
const slider = document.querySelector('.slider');
const arrows = document.querySelectorAll('.arrows > .active');
[...arrows].map((arrow) => {
  arrow.addEventListener('click', () => slider.classList.toggle('translate'));
});

//MODAL LIGHTBOX
const modalLightbox = document.querySelector('#modal-lightbox');
const closeXIcon = document.querySelector('.close-x-icon');
const handleCloseIcon = () => {
  modalLightbox.classList.remove('show-modal');
  setTimeout(() => (modalLightbox.lastElementChild.innerHTML = ''), 500);
};
closeXIcon.addEventListener('click', handleCloseIcon);

//CONSTRUIMOS MÁS INFO
const masinfoBtns = document.querySelectorAll('.masinfo');
const handleMasinfoBtns = (e) => {
  modalLightbox.classList.add('show-modal');
  if (e.currentTarget.classList.contains('secundario')) {
    modalLightbox.lastElementChild.innerHTML = `
        <div class="container">
          <div class="row position-relative">
            <div class="col-md-4 mb-3">
              <img src="./assets/img/slider/construimos-01.jpg" alt="" />
            </div>
            <div class="col-md-8">
              <h3 class="h3 fw-bold">Edificio del Nivel Secundario</h3>
              <hr />
              <p>información sobre el edificio del nivel secundario</p>
            </div>
          </div>
        </div>
        `;
  }
  if (e.currentTarget.classList.contains('jardin')) {
    modalLightbox.lastElementChild.innerHTML = `
        <div class="container">
          <div class="row position-relative">
            <div class="col-md-4 mb-3">
              <img src="./assets/img/slider/construimos-02.jpg" alt="" />
            </div>
            <div class="col-md-8">
              <h3 class="h3 fw-bold">Edificio del Nivel Inicial</h3>
              <hr />
              <p>información sobre el edificio del Nivel Inicial</p>
            </div>
          </div>
        </div>
        `;
  }
};
[...masinfoBtns].map((btn) => {
  btn.addEventListener('click', handleMasinfoBtns);
});

//ESTAMOS CONSTRUYENDO CAROUSEL
const images = document.querySelectorAll('#estamos-construyendo img');
const arrowLeft = document.querySelector('#estamos-construyendo .arrow-left');
const arrowRight = document.querySelector('#estamos-construyendo .arrow-right');
const rowImgContainer = document.querySelector(
  '#estamos-construyendo .img-container .row'
);
const styleProps = window.getComputedStyle(rowImgContainer);

console.log(styleProps.getPropertyValue('transform'));

const handleImageClick = (e) => {
  const imgNum = e.currentTarget.dataset.num;
  modalLightbox.lastElementChild.innerHTML = getModalInnerHTML(imgNum);
  modalLightbox.classList.add('show-modal');
};
let imgCounter = 0;
const handleArrowLeftClick = () => {
  imgCounter -= 1;
  if (imgCounter < 0) imgCounter = 2;
  if (imgCounter === 2)
    rowImgContainer.style.transform = 'translateX(-33.3333%)';

  if (imgCounter === 1) rowImgContainer.style.transform = 'translateX(0%)';

  if (imgCounter === 0)
    rowImgContainer.style.transform = 'translateX(-66.6666%)';
};
const handleArrowRightClick = () => {
  imgCounter += 1;
  if (imgCounter > 2) imgCounter = 0;
  if (imgCounter === 0)
    rowImgContainer.style.transform = 'translateX(-33.3333%)';
  if (imgCounter === 1)
    rowImgContainer.style.transform = 'translateX(-66.6666%)';
  if (imgCounter === 2) rowImgContainer.style.transform = 'translateX(0)';
};

const getModalInnerHTML = (num) => {
  return `
    <div class="container">
    <img src="./assets/img/carousel/${num}-lg.jpg" alt="" />
    </div>
  `;
};
[...images].map((image) => {
  image.addEventListener('click', handleImageClick);
});
arrowLeft.addEventListener('click', handleArrowLeftClick);
arrowRight.addEventListener('click', handleArrowRightClick);

//OBRA GLOBAL
const croquisImg = document.querySelector('.croquis-img');
const handleCroquisClick = () => {
  modalLightbox.classList.add('show-modal');
  modalLightbox.lastElementChild.innerHTML = `
    <div class="container">           
    <img
    src="./assets/img/obra-global/croquis-lg.png"
    alt=""
    />
    </div>
  `;
};
croquisImg.addEventListener('click', handleCroquisClick);
