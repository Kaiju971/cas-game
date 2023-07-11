const form = document.querySelector("#form");
const pseudo = document.querySelector("#pseudo");
const email = document.querySelector("#email");
const messageInput = document.querySelector("#requête");

let ok = true;

var EMAIL_REGEXP =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

function testInfo() {
  const okEmail = EMAIL_REGEXP.exec(email.value);

  if (pseudo.value === "") {
    ok = false;
    alert( "information incomplète à pseudo!");
  }
  if (messageInput.value === "") {
    ok = false;
    alert( "information incomplète à message!");
  }

  if (!okEmail) {
    ok = false;
    alert(`${email.value} information incomplète à email!`);
  }

  ok ? alert(`Merci, votre message est ${messageInput.value}`) : "";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  testInfo(messageInput);
});