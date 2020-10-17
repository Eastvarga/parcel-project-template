(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      openModalBtnOpen: document.querySelector('[data-modal-open-desktop]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtnOpen.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})()