const showFormButton = document.querySelector(".header__btn");
const registrationForm = document.querySelector(".header__inner__form");

showFormButton.addEventListener("click", function() {
  registrationForm.style.display = "block";
});

// const arrowbtn = document.querySelector(".arrow__btn");

// arrowbtn.addEventListener("click", toggleImages);

// function toggleImages() {
//   const imageRow = document.querySelector(".imageRow");
//   if (imageRow.style.display === "none" || imageRow.style.display === "") {
//     imageRow.style.display = "flex";
//   } else {
//     imageRow.style.display = "none";
//   }
// }

document.querySelector("body").addEventListener("click", (event) => {
  if (event.target === showFormButton) {
    registrationForm.style.display = "block";
  } else if (event.target !== registrationForm && !registrationForm.contains(event.target)) {
    registrationForm.style.display = "none";
  }
});


const formClose = document.querySelector(".form__close");

formClose.addEventListener("click", () => {
  if (registrationForm.style.display === "block") {
    registrationForm.style.display = "none";
  } else {
    registrationForm.style.display = "block";
  }
});
