let submit = document.querySelector('.submit');
let wrongNumber = document.querySelector('.numbers-only');
let wrongDate = document.querySelector('.blank');


submit.addEventListener('click', ()=>{
    let cardName = document.getElementById('name').value;
    let cardNum = document.getElementById('number').value;
    let cardYy = document.getElementById('yy').value;
    let cardMm = document.getElementById('mm').value;
    let cardCvc = document.getElementById('cvc').value;

    changeOnCard(cardName, cardNum, cardYy +'/'+ cardMm, cardCvc);
    let submition = sumitting(cardNum, cardYy +'/'+ cardMm, cardCvc);
    
    if (submition === 0){
        let completed = document.querySelector('.completed');
        let form = document.querySelector('.form');
        completed.classList.remove('hidden');
        form.classList.add('hidden');

    }
});


function changeOnCard(name, cardNumber, date, cvc){

    let cardName = document.querySelector('.name');
    let cardNum = document.querySelector('.card-number');
    let cardDate = document.querySelector('.date');
    let cardCvc = document.querySelector('.back-of-card');
    cardName.innerText = name;
    cardNum.innerText = cardNumber;
    cardDate.innerText = date;
    cardCvc.innerText = cvc;
}


function sumitting( cardNumber, date, cvc){
    let counter = 0;
    let pattern = /^\d+$/;
    if (pattern.test(cardNumber) == false){
        wrongNumber.classList.remove('hidden');
        counter+= 1;
    }
    if( date === '' || cvc === ''){
        wrongDate.classList.remove('.hidden');
        counter+= 1;
    }
    console.log(counter);
    return counter;

}