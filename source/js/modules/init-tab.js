const month = document.querySelector('.main-subscription__month');
const tab = document.querySelector('.main-subscription__tab');

function initTab() {
  month.addEventListener("click", changeValue());
}

function changeValue(evt) {
  evt.preventDefault;
  tab.getElementById('price').innerText = '14000';
};

export {initTab};
