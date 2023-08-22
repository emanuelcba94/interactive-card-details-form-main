// card-front
const cardNumbers = document.querySelector('#card-numbers');
const cardName = document.querySelector('#card-name');
const cardMonth = document.querySelector('#card-month');
const cardYear = document.querySelector('#card-year');
// card-back
const cardCvc = document.querySelector('#card-cvc');
// form
const form = document.querySelector('#form')
const inputs = document.querySelectorAll('input');
// inputs
const inputName = document.querySelector('#input-name');
const inputNumber = document.querySelector('#input-number');
const inputMonth = document.querySelector('#input-month');
const inputYear = document.querySelector('#input-year');
const inputCvc = document.querySelector('#input-cvc');
// Card Complete
const cardComplete = document.querySelector('#card-complete');
const btnConfirm = document.querySelector('#card-confirm');
const btnContinue = document.querySelector('#card-continue');
// errors
const nameError = document.querySelector('.name-error');
const numberError = document.querySelector('.number-error');
const monthYearError = document.querySelector('.monthYear-error');
const cvcError = document.querySelector('.cvc-error');
const yearError = document.querySelector('.year-error');



inputName.addEventListener('input', ()=>{
    cardName.innerText = inputName.value;
    if(inputName.value.length === 0){
        cardName.innerText = 'Jane Appleseed';
    }
})

inputNumber.addEventListener('input', ()=>{
    cardNumbers.innerText = inputNumber.value;
    if(inputNumber.value.length === 0){
        cardNumbers.innerText = '0000 0000 0000 0000';
    }
})

inputMonth.addEventListener('input', ()=>{
    cardMonth.innerText = inputMonth.value;
    if(inputMonth.value.length === 0){
        cardMonth.innerText = '00';
    }
})

inputYear.addEventListener('input', ()=>{
    cardYear.innerText = inputYear.value;
    if(inputYear.value.length === 0){
        cardYear.innerText = '00';
    }
})

inputCvc.addEventListener('input', ()=>{
    cardCvc.innerText = inputCvc.value;
    if(inputCvc.value.length === 0){
        cardCvc.innerText = '000';
    }
})


btnConfirm.addEventListener('click', (e) => {
    e.preventDefault();

    if(
        cardNameValidation() === true && 
        cardNumberValidation() === true && 
        monthYearValidation() === true &&
        yearValidation() === true &&
        cvcValidation() === true
        ) {
            cardNameValidation();
            cardNumberValidation();
            monthYearValidation();
            yearValidation();
            cvcValidation();
            form.classList.add('disabled');
            cardComplete.classList.add('disabled')
        }else{
            cardNameValidation();
            cardNumberValidation();
            monthYearValidation();
            yearValidation();
            cvcValidation();
        }
})

btnContinue.addEventListener('click', () => {
    form.classList.remove('disabled');
    cardComplete.classList.remove('disabled')
    form.reset();
    cardName.innerText = 'Jane Appleseed';
    cardNumbers.innerText = '0000 0000 0000 0000';
    cardMonth.innerText = '00';
    cardYear.innerText = '00';
    cardCvc.innerText = '000';
})


let cardNameValidation = () => {
    if(inputs[0].value.match(/^[A-Za-z ]+$/)){
        cardName.innerHTML = inputName.value;
        inputs[0].style.borderColor = 'hsl(278, 68%, 11%)';
        nameError.style.display = 'none';
        return true 
    }else{
        cardName.innerHTML;
        inputs[0].style.borderColor = 'hsl(0, 100%, 66%)';}
        nameError.style.display = 'block';
        return false 
    }


let cardNumberValidation = () => {
    if(inputs[1].value.match(/^\d+/) && inputNumber.value.length === 16){
        cardNumbers.innerHTML = inputNumber.value.match(/.{1,4}/g).join(" ");
        inputs[1].style.borderColor = 'hsl(278, 68%, 11%)';
        numberError.style.display = 'none';
        return true 
    }else{
        cardNumbers.innerHTML;
        inputs[1].style.borderColor = 'hsl(0, 100%, 66%)';
        numberError.style.display = 'block';
        return false 
    }
}

let monthYearValidation = () => {
    if(inputs[2].value.match(/^\d+/) && inputMonth.value.length === 2){
        cardMonth.innerHTML = inputMonth.value;
        inputs[2].style.borderColor = 'hsl(278, 68%, 11%)';
        monthYearError.style.display = 'none';
        return true 
    }else{
        cardMonth.innerHTML;
        inputs[2].style.borderColor = 'hsl(0, 100%, 66%)';
        monthYearError.style.display = 'block';
        return false 
    }
}

let yearValidation = () => {
    if(inputs[3].value.match(/^\d+/) && inputYear.value.length === 2){
        cardYear.innerHTML = inputYear.value;
        inputs[3].style.borderColor = 'hsl(278, 68%, 11%)';
        monthYearError.style.display = 'none';
        return true 
    }else{
        cardYear.innerHTML;
        inputs[3].style.borderColor = 'hsl(0, 100%, 66%)';
        monthYearError.style.display = 'block';
        return false 
    }
}

let cvcValidation = () => {
    if(inputs[4].value.match(/^\d+/) && inputCvc.value.length === 3){
        cardCvc.innerHTML = inputCvc.value;
        inputs[4].style.borderColor = 'hsl(278, 68%, 11%)';
        cvcError.style.display = 'none';
        return true 
    }else{
        cardCvc.innerHTML;
        inputs[4].style.borderColor = 'hsl(0, 100%, 66%)';
        cvcError.style.display = 'block';
        return false 
    }
}



