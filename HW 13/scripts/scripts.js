window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    const plant = document.querySelector('.animated-plant');
    plant.addEventListener('animationend', () => {
      preloader.classList.add('hide');
      setTimeout(() => {
        preloader.remove();
        document.body.classList.remove('loading'); 
      }, 500);
    });
  });

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
