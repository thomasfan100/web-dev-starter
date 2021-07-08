//npm start
//var keyword
let price = 49.99,
    name = 'Hiking Boots',
    discounted = false;
let name2 = `${name} are Nice`; //using backticks
let person = {
    firstName: 'John',
    lastName: 'Adams'
};
if (1===1){
    price = 50.99;
}
else{
    price = 48.99;
}
price < 10 ? showMessage('yesss') : showMessage('no');
console.log(name2);
//showMessage("Title...");
changePercentOff(32);

const header = document.getElementById('message');
header.style.fontWeight = '100'
const button = document.getElementById('see-review');
button.addEventListener('click',function() {
    const review = document.getElementById('review');
    if(review.classList.contains('d-none')){
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    }
    else{
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
});

