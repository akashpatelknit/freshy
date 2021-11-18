let div = document.querySelectorAll('.box')
console.log(div)
div.forEach(el => {
  let R = Math.trunc(Math.random() * 170);
  let G = Math.trunc(Math.random() * 150);
  let B = Math.trunc(Math.random() * 200);
  el.style.backgroundColor = `rgb(${R},${G},${B})`;
})