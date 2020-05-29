var nameIn = prompt("jak masz na imię?");
console.log(`cześć ${nameIn}, miło Cię widzieć`);

const heading = document.querySelector(".header__tittle--js");
heading.innerHTML = `Cześć ${nameIn}, miło Cię widzieć!`;
const name = "Rafał";
const age = 31;

const showMyProperty = (myProperty) => {
  console.log(`mój wiek to ${myProperty}`);
  myProperty = myProperty * 2;
  return myProperty;
};
const year = showMyProperty(age);

showMyProperty(year);

function secondProperty(sProperty) {
  console.log(`mój wiek to ${sProperty}`);
  sProperty = sProperty * 5;
  return sProperty;
}
const myAge = secondProperty(age);

secondProperty(age);
secondProperty(myAge);

const greeeting = (querySelectorContent, content) => {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
  console.log(content);
};

greeeting(".header__tittle--js", "witaj ");

const nextGreeting = (name, age) => {
  console.log(`Cześć mam na imię ${name} i mam ${age}lat`);
};

nextGreeting("Paula", 30);
