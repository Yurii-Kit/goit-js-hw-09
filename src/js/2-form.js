const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');

// перевірка даних в сховищі
const savedData = localStorage.getItem('feedback-form-state');
if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || '';
  formData.message = parsedData.message || '';
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

form.addEventListener('input', onFormInput);

function onFormInput(event) {
  formData[event.target.name] = event.target.value; // записуємо введені дані в обєкт

  localStorage.setItem('feedback-form-state', JSON.stringify(formData)); // записуємо введені дані в сховище
}

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  // перевірка на пусті поля
  if (formData.email === '' || formData.message === '') {
    return alert('Fill please all fields');
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
}
