// USER FORM SCRIPT

const myForm = document.querySelector('#my-form');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  

    let myObj = {
     nameInput : e.target.name.value,
     emailInput : e.target.email.value,
     phoneInput : e.target.phone.value
    // localStorage.setItem('name',nameInput);
    // localStorage.setItem('email', emailInput);
    // localStorage.setItem('phone', phoneInput);
};
    let myobj_seialized = JSON.stringify(myObj);
    localStorage.setItem("myObj",myobj_seialized);
    let myObj_deserialized =JSON.parse(localStorage.getItem("myObj"))
    console.log(myObj_deserialized);
    
}
