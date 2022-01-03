function openSideNav() {
  document.getElementById("sidenav").style.width="250px";
  document.getElementByClassName("main").style.marginLeft="250px";
}

function closeSideNav() {
  document.getElementById("sidenav").style.width="0px";
  document.getElementByClassName("main").style.marginLeft="0px";
}

var modalBg = document.querySelector('.modal-bg');
var modal = document.querySelector('.modal');
var btn = document.querySelector('.subscribe');
var x = document.querySelector('.newsletter-closebtn');

btn.addEventListener('click', function(){
  modalBg.classList.add('bg-active');
});

x.addEventListener('click', function(){
  modalBg.classList.remove('bg-active');
});

