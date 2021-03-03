const openButton = document.querySelector(".search-form__open-button");
const form = document.querySelector(".search-form__form");

openButton.onclick = function() {
   form.classList.toggle("search-form__form--visible");
}

