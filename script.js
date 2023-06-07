const searchInput = document.querySelector("#search");
const lemonade = document.querySelectorAll(".lemonades");

searchInput.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();
    
    lemonade.forEach(item => {
        item.querySelector("p").textContent.toLowerCase().includes(word) ? (item.style.display = "block") : (item.style.display = "none");
    })
})