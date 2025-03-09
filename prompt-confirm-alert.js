// window.alert();  confirm()
// window.prompt();  alert()
// window.confirm();  prompt()

// When calling alert(), the logic confirm(), prompt - alert(), confirm() - prompt() should work

const myConfirm = confirm;
const myPrompt = prompt;
const myAlert = alert;

window.alert = function (message) {
  return myConfirm(message);
};

window.prompt = function (message) {
  return myAlert(message);
};

window.confirm = function (message) {
  return myPrompt(message);
};

alert("showing confirm dialog");

prompt("showing alert");

confirm("showing prompt");
