const enter = document.querySelector('#enter');
const modal = document.querySelector('#modal');
const modalOverlay = document.querySelector('#modal-overlay');
const close = document.querySelector('#modal__close-btn');

enter.addEventListener('click', ()=>{
  modal.classList.add('open-modal');
  modalOverlay.classList.add('open-modal');
});

modalOverlay.addEventListener('click', ()=>{
  modal.classList.remove('open-modal');
  modalOverlay.classList.remove('open-modal');
});

close.addEventListener('click', ()=>{
  modal.classList.remove('open-modal');
  modalOverlay.classList.remove('open-modal');
});