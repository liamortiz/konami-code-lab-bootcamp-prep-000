const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  document.body.addEventListener('keydown', (e) => {
    console.log(e.key)
  })
}


var index = 0
function onKeyDownHandler(event) {
  const key = event.key
  
  if (key == codes[index]) {
    index++
    
    if (index == codes.length) {
      alert("Correct")
      index = 0
      
    }else {index = 0}
  }
}

init()