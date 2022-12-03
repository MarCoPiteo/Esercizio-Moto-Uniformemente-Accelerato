let width = 900
let height = 600
let circleIteration = 0

let w = 400
let h = 400

let d = 50
let r = d/2

let accelerazioneY = -0.01
let accelerazioneX = -0.01
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
  
  velocita = velocita + accelerazioneX
  x = x + velocita
  
  if (x >= w+r) {
    x = -r
  }
  
  if (x <= -r) {
    x = w+r
  }
}