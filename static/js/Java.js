let accelerationInput = document.querySelector("[name=accelerazione]")
let accelerationValue = document.querySelector("#accelerationValue")

accelerationInput.value = accelerazione

accelerationInput.addEventListener("input", function(e){
  //console.log(`acceleration changed -> ${accelerationInput.value}`)
  accelerazione = parseFloat(accelerationInput.value)
  console.log(accelerazione)
  accelerationValue.innerHTML = `ACCELERAZIONE: ${accelerazione}`
})

