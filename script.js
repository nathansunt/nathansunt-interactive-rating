const rating = document.querySelectorAll('.rate-button');
const submit = document.querySelector('.submit-button');
const mainContainer = document.querySelector('.container');
const finalContainer = document.querySelector('.thank-you');
const userRating = document.getElementById('user-rating');

rating.forEach(element => {
  element.addEventListener('click', () => {
    rating.forEach(btn => {btn.classList.remove('active')});
    element.classList.add('active');
  });
});

submit.addEventListener('click', () => {
  finalContainer.classList.remove('hidden');
  mainContainer.style.display = 'none'
});


// get the innerHTML of the user rate and put it into the span
rating.forEach(rate => {
  rate.addEventListener('click', () => {
    userRating.innerHTML = rate.innerHTML
  })
});