var elNavBtn = document.querySelector(".js-nav-open-btn");
var elOpenModalBtn = document.querySelector(".js-open-modal");
var elModal = document.querySelector(".modal");
var elCloseModalBtnM = document.querySelector(".js-close-m-btn");
var elCloseModalBtn = document.querySelector(".js-close-btn") 

elNavBtn.addEventListener("click", function(){
    elNavBtn.closest(".site-header").classList.toggle("sitenav-open");
})

elOpenModalBtn.addEventListener("click", function(){
    elModal.classList.add("modal--open");
    elModal.closest(".site-body").classList.add("modal-opened");
});

elCloseModalBtnM.addEventListener("click", function(){
    elModal.classList.remove("modal--open");
    elModal.closest(".site-body").classList.remove("modal-opened");
});

elCloseModalBtn.addEventListener("click", function(){
    elModal.classList.remove("modal--open");
    elModal.closest(".site-body").classList.remove("modal-opened");
});