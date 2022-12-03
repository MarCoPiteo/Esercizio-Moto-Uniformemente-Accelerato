let width = 900
let height = 600
let circleIteration = 0

let w = 400
let h = 400

let d = 50
let r = d/2

let accelerazione = -0.01
let velocita = 0
let x = 0

function setup() {
  createCanvas(w, h);
  background(255,0,0);
}

function draw() {
  background(255,0,0);
  
  circle(x,h/2,d)
  fill(0,255,0)
  
  velocita = velocita + accelerazione
  x = x + velocita
  
  if (x >= 425) {
    x = -25
  }
  
  if (x <= -25) {
    x = 425
  }
}

accelerationValue.innerHTML = `ACCELERAZIONE: ${accelerazione}`
