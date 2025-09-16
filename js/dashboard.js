const modalLost = document.querySelector('.modal-lost');
const modalFound = document.querySelector('.modal-found');
const openModalLost = document.querySelector('.modal-btn-report-lost');
const openModalFound = document.querySelector('.modal-btn-report-found');
const closeModalLost = document.querySelector('.close-modal-lost');
const closeModalFound = document.querySelector('.close-modal-found');

openModalLost.addEventListener('click', () => {
    modalLost.showModal();
})

openModalFound.addEventListener('click', () => {
    modalFound.showModal();
})

closeModalLost.addEventListener('click', () => {
    modalLost.close();
})

closeModalFound.addEventListener('click', () => {
    modalFound.close();
})