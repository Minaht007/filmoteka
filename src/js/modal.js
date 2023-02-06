
import { onRenderModal } from './renderModal';

const refs = {
  filmGalaryContainer: document.querySelector('.home'),
  closeModalBtn: document.querySelector('.modal-close'),
  modal: document.querySelector('.backdrop'),
};

refs.filmGalaryContainer.addEventListener('click', onFilmCardClick);
refs.closeModalBtn.addEventListener('click', onCloseBtnClick);

function onFilmCardClick(evt) {
  evt.preventDefault();

  if (
    !evt.target.classList.contains('library__item') &&
    !evt.target.classList.contains('library__link') &&
    !evt.target.classList.contains('library__thumb') &&
    !evt.target.classList.contains('library__image') &&
    !evt.target.classList.contains('library__paragraph') &&
    !evt.target.classList.contains('library__movie') &&
    !evt.target.classList.contains('library__info') &&
    !evt.target.classList.contains('library__description') &&
    !evt.target.classList.contains('library__genres') &&
    !evt.target.classList.contains('library__year') &&
    !evt.target.classList.contains('library__rating')
  ) {
    return;
  }
  onRenderModal(evt);
  refs.modal.classList.remove('visually-hidden');
  onMovieCardClick();
  document.body.style.overflow = 'hidden';
}

function onCloseBtnClick() {
  refs.modal.classList.add('visually-hidden');
  document.body.style.overflow = 'auto';
}

function onMovieCardClick(evt) {
  window.addEventListener('keydown', onKeyEscpPress);

  function onKeyEscpPress(evt) {
    if (evt.code !== 'Escape') {
      return;
    }

    onCloseBtnClick();
    window.removeEventListener('keydown', onKeyEscpPress);
  }
  refs.modal.addEventListener('click', onBackdropClick);
  function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
      onCloseBtnClick();
    }
  }
}
