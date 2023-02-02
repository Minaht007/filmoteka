// FT-21 Підключити/зверстати Loader (spinner) для асинхронних запитів
// preloader
document.body.onload = function () {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('done')) {
      preloader.classList.add('done');
    }
  }, 1000);
};

// spinner
class Spinner {
  constructor(selector) {
    this.spinner = document.querySelector(selector);
  }
  addSpinner() {
    this.spinner.classList.remove('hidden');
  }
  removeSpinner() {
    this.spinner.classList.add('hidden');
  }
}

// Щоб підключити спінер у своєму файлі:
// 1) import Spinner from "./loader";
// 2) const spinner = new Spinner('.spinner');
// 3) spinner.addSpinner(); - додати спінер
// 4) spinner.removeSpinner(); - зняти спінер
