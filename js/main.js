var elNavBtn = document.querySelector(".js-nav-open-btn");

elNavBtn.addEventListener("click", function(){
    elNavBtn.closest(".site-header").classList.toggle("sitenav-open");
})