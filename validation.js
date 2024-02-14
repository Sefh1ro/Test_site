function validating(formSelector, nameSelector, emailSelector) {
    const form = document.querySelector(formSelector);
  
    const nameInput = form.querySelector(nameSelector);
    nameInput.addEventListener("input", (e) => {
      const inputValue = e.target.value;
      // Разрешаем ввод букв латинского алфавита, кириллицы и пробелов
      e.target.value = inputValue.replace(/[^A-Za-zА-Яа-яЁёІі\s]+/g, "");
    });
  
    const emailInput = form.querySelector(emailSelector);
    emailInput.addEventListener("input", (e) => {
      const inputValue = e.target.value;
      e.target.value = inputValue.replace(/[^A-Za-z0-9\s@.]+/g, "");
    });
  }
  
  validating("#registration-form", "#username", "#usermail");