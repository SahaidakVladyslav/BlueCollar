(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
// 
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-product-modal-open]'),
    
    openModalBtn2: document.querySelector('[data-product-modal-open2]'),
    openModalBtn3: document.querySelector('[data-product-modal-open3]'),
    openModalBtn4: document.querySelector('[data-product-modal-open4]'),
    openModalBtn5: document.querySelector('[data-product-modal-open5]'),
    openModalBtn6: document.querySelector('[data-product-modal-open6]'),
    openModalBtn7: document.querySelector('[data-product-modal-open7]'),
    openModalBtn8: document.querySelector('[data-product-modal-open8]'),
    openModalBtn9: document.querySelector('[data-product-modal-open9]'),
    
    openModalBtn10: document.querySelector('[data-product-modal-open10]'),
    openModalBtn11: document.querySelector('[data-product-modal-open11]'),
    openModalBtn12: document.querySelector('[data-product-modal-open12]'),

    openModalBtn13: document.querySelector('[data-product-modal-open13]'),
    openModalBtn14: document.querySelector('[data-product-modal-open14]'),
    openModalBtn15: document.querySelector('[data-product-modal-open15]'),
    
    openModalBtn16: document.querySelector('[data-product-modal-open16]'),
    openModalBtn17: document.querySelector('[data-product-modal-open17]'),
    openModalBtn18: document.querySelector('[data-product-modal-open18]'),


    closeModalBtn: document.querySelector('[data-product-modal-close]'),
    modal: document.querySelector('[data-product-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);

  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn3.addEventListener('click', toggleModal);
  refs.openModalBtn4.addEventListener('click', toggleModal);
  refs.openModalBtn5.addEventListener('click', toggleModal);
  refs.openModalBtn6.addEventListener('click', toggleModal);
  refs.openModalBtn7.addEventListener('click', toggleModal);
  refs.openModalBtn8.addEventListener('click', toggleModal);
  refs.openModalBtn9.addEventListener('click', toggleModal);
  refs.openModalBtn10.addEventListener('click', toggleModal);
  refs.openModalBtn11.addEventListener('click', toggleModal);
  refs.openModalBtn12.addEventListener('click', toggleModal);
  refs.openModalBtn13.addEventListener('click', toggleModal);
  refs.openModalBtn14.addEventListener('click', toggleModal);
  refs.openModalBtn15.addEventListener('click', toggleModal);
  
  refs.openModalBtn16.addEventListener('click', toggleModal);
  refs.openModalBtn17.addEventListener('click', toggleModal);
  refs.openModalBtn18.addEventListener('click', toggleModal);

  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
// 
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-desktop-modal-open]'),
    closeModalBtn: document.querySelector('[data-desktop-modal-close]'),
    modal: document.querySelector('[data-desktop-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);


  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();