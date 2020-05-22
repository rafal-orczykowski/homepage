var name = prompt("jak masz na imię?");
console.log(`cześć ${name}, miło Cię widzieć`);

const heading = document.querySelector('.header__tittle--js')
heading.innerHTML = `Cześć ${name}, miło Cię widzieć!`

const age = 31;

const showMyProperty = (myProperty) => {
    console.log(`mój wiek to ${myProperty}`);
    myProperty= myProperty*2;

 
}
const Year = showMyProperty(age)

showMyProperty(Year);

function secondProperty(sProperty){
console.log(`mój wiek to ${sProperty}`);
sProperty= sProperty*2;
return sProperty;
}
const myAge = secondProperty(age);

secondProperty(age);
secondProperty(myAge);
