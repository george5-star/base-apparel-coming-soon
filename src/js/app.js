const inputEl = document.querySelector(".form__input");
const errorIcon = document.querySelector(".form__error-icon");
const error = document.querySelector(".form__error-message");
const submitBtn = document.querySelector(".form__button");

const regex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (!regex.test(inputEl.value)) {
    error.classList.add("toggleError");
    errorIcon.classList.add("toggleError");
    inputEl.classList.add("toggleInputError");
  } else {
    error.classList.remove("toggleError");
    errorIcon.classList.remove("toggleError");
    inputEl.classList.add("toggleInputError");
    inputEl.value = "";
  }
});
