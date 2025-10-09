const myPopup = new Popup({
id: "login-button",
title: "",
content: 
'<iframe src="./Login.html" style="width:100%; height:600px; border:none;" allow="fullscreen"></iframe>',
});
const button = document.querySelector("#login-button");
button.addEventListener("click", () => {
myPopup.show();
});