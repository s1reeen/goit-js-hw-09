const feedbackForm = document.querySelector('.feedback-form');

const storedData =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};
feedbackForm.email.value = storedData.email || '';
feedbackForm.message.value = storedData.message || '';

feedbackForm.addEventListener('input', function (e) {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    const formData = {
      email: feedbackForm.email.value.trim(),
      message: feedbackForm.message.value.trim(),
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }
});
feedbackForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = {
    email: feedbackForm.email.value.trim(),
    message: feedbackForm.message.value.trim(),
  };

  if (formData.email && formData.message) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    feedbackForm.email.value = '';
    feedbackForm.message.value = '';
  }
});