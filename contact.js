const titre = document.querySelector('#titre')
const form = document.querySelector("#form");
const pseudo = document.querySelector("#pseudo");
const email = document.querySelector("#email");
const checkbox = document.querySelector('checkbox')
const requête = document.querySelector("#requête");
const messageInput = document.querySelector("#message");
console.log("messageInput "+messageInput);
const output = document.querySelector("#output");

const re = /^(?:\d{3}|\(\d{3}\))([-/.])\d{3}\1\d{4}$/;

function testInfo(messageInput) {
  const ok = re.exec(messageInput.value);

  output.textContent = ok
    ? alert(`Merci, votre message est ${ok[0]}`)
    : alert(`${messageInput.value} information incomplète!`);
}

form.addEventListener("submit", (event) => {
   

  event.preventDefault();
  testInfo(messageInput);
});
