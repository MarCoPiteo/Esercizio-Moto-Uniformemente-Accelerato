let accelerationInput = document.querySelector("[name=accelerazione]")
    accelerationInput.value = accelerazione

    accelerationInput.addEventListener("input", function(e){
      //console.log(`acceleration changed -> ${accelerationInput.value}`)
      accelerazione = parseFloat(accelerationInput.value)
      console.log(accelerazione)
    })

    let accelerationValue = document.querySelector("#accelerationValue")