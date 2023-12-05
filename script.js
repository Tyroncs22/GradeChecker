document.querySelector('form').addEventListener('submit', checkGrade)

const A = 90
const B = 80
const C = 70
const D = 60
function checkGrade(e) {
    e.preventDefault();
    let myGrade = document.querySelector('input').value;

    let message = "";
    console.log('RUNNING ... ' + myGrade)
    if (myGrade >= A) {

        message += `<li>you have a A!</li>`
    }



    if (myGrade >= B && myGrade < A) {

        message += `<li>you have a B!</li>`
    }



    if (myGrade >= C && myGrade < B) {

        message += `<li>you have a c!</li>`
    }



    if (myGrade >= D && myGrade <C) {

        message += `<li>you have a D!</li>`
    
    }
    



    document.querySelector('#output').innerHTML = message;

}

