console.log(document);

// getElementById
const vedikaEl = document.getElementById("h1Element");
vedikaEl.style.backgroundColor = "skyBlue";
vedikaEl.innerText = "Text is changed now";
console.log(vedikaEl);

// getElementsByClassName
const pElement = document.getElementsByClassName("p1");
for (let i = 0; i < pElement.length; i++) {
  const element = pElement[i];
  element.style.color = "pink";
}
console.log(pElement);

// getElementsByTagName
const pElements = document.getElementsByTagName("p");
for (let i = 0; i < pElements.length; i++) {
  const element = pElements[i];
  element.style.color = "green";
}
console.log(pElements);
