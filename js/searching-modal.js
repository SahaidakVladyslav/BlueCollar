(() => {
  const refs = {
    openModalBtn: document.querySelector('[searching-data-modal-open]'),
    closeModalBtn: document.querySelector('[searching-data-modal-close]'),
    modal: document.querySelector('[searching-data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
