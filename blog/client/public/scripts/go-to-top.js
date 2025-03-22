document.addEventListener("DOMContentLoaded", () => {
    const goToTopButton = document.getElementById("go-to-top");
    
    goToTopButton.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}))
})