let h3 = document.querySelector("h3");
let color1 = document.querySelector("#color1");
let color2 = document.querySelector("#color2");
let angle = document.querySelector("#angle");
let body = document.querySelector("body");

function setGradient() {
    h3.innerHTML = `${body.style.background};`;
    body.style.background = `linear-gradient(${angle.value}deg, ${color1.value} , ${color2.value})`;
}

angle.addEventListener("input", () => {
    angle.setAttribute("value", angle.value);
    setGradient();
})

color1.addEventListener("input", () => {
    color1.setAttribute("value", color1.value);
    setGradient();
});

color2.addEventListener("input", () => {
    color2.setAttribute("value", color2.value);
    setGradient();
});

console.log(h3);
console.log(color1);
console.log(color2);