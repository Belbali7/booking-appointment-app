// USER FORM SCRIPT

const myForm = document.querySelector('#my-form');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  

    const nameInput = e.target.name.value;
    const emailInput = e.target.email.value;
    const phoneInput = e.target.phone.value;
    localStorage.setItem('name',nameInput);
    localStorage.setItem('email', emailInput);
    localStorage.setItem('phone', phoneInput);

}