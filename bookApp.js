// USER FORM SCRIPT

const myForm = document.querySelector('#my-form');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
    const nameInput = e.target.name.value;
    const emailInput = e.target.email.value;
    // const phoneInput = e.target.phone.value;
   

const myObj= {
        nameInput,
        emailInput,
}
    localStorage.setItem(myObj.emailInput,JSON.stringify(myObj))
    //  let myObj_converted = JSON.stringify(myObj);
    // localStorage.setItem(myObj.emailInput,myObj_converted);
    // let myObj_unconverted =JSON.parse(localStorage.getItem("myObj"))
    // console.log(myObj_unconverted);
    showNewUserOnScreen(myObj)
}

function showNewUserOnScreen(user){
    const parentNode = document.getElementById('listOfPeople');
    const childHTML = `<li> ${user.nameInput} - ${user.emailInput} </li>`

    parentNode.innerHTML = parentNode.innerHTML + childHTML;
}
