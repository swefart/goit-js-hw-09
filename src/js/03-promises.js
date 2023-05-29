import Notiflix from "notiflix";

const formEl = document.querySelector('.form')

formEl.addEventListener('submit', onSubmit)

function onSubmit(e) { 
  e.preventDefault()
  const values = {
    amount: Number(e.target.elements.amount.value),
    delay: Number(e.target.elements.delay.value),
    step: Number(e.target.elements.step.value),
 }
  let { amount, delay, step } = values;

  for (i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
      .catch(({ position, delay }) => {
     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    delay += step;
  }
  
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((res, rej) => {
    setTimeout(() => {
    if (shouldResolve) {
    res({position, delay})
  } else {
    rej({position, delay})
  }
  }, delay)
})
}
