
let counter = document.getElementById("counter");
const reset = document.getElementById("reset");
const next = document.getElementById("next");

reset.addEventListener("click", function(){
    counter.textContent = 0;
})
next.addEventListener("click", function(){
    counter.textContent = (parseInt(counter.textContent) + 1)% Number.MAX_SAFE_INTEGER;
})
document.addEventListener("DOMContentLoaded", function(){
    counter.textContent = 0;
});

