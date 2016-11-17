// Write all your JavaScript code in this file!
// You can use the namespace variable that's defined here.
var namespace = "http://www.w3.org/2000/svg"
var turn = "player1"
function leftuppercircle(){
  if(turn == "player1"){
  var rightCircle = document.createElementNS(namespace, "circle")
  rightCircle.setAttribute("cx", 45)
  rightCircle.setAttribute("cy", 45)
  rightCircle.setAttribute("r", 40)
  rightCircle.setAttribute("fill", "yellow")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rightCircle)
  turn = "player2"
}else{
}}

 function middleuppercircle(){
   if(turn == "player2"){
   var middleCircle = document.createElementNS(namespace, "circle")
   middleCircle.setAttribute("cx", 145)
   middleCircle.setAttribute("cy", 45)
   middleCircle.setAttribute("r", 40)
   middleCircle.setAttribute("fill", "green")
   var canvas = document.getElementById("game-board")
   canvas.appendChild(middleCircle)
   turn = "player1"
 }else{
 }}

function rightuppercircle(){
  if(turn == "player1"){
  var rightCircle = document.createElementNS(namespace, "circle")
  rightCircle.setAttribute("cx", 245)
  rightCircle.setAttribute("cy", 45)
  rightCircle.setAttribute("r", 40)
  rightCircle.setAttribute("fill", "yellow")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rightCircle)
  turn = "player2"
}else{
}}

function leftmiddlecircle(){
  if(turn == "player2"){
  var leftMiddleCircle = document.createElementNS(namespace, "circle")
  leftMiddleCircle.setAttribute("cx", 45)
  leftMiddleCircle.setAttribute("cy", 145)
  leftMiddleCircle.setAttribute("r", 40)
  leftMiddleCircle.setAttribute("fill", "green")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(leftMiddleCircle)
  turn = "player1"
}else{
}}

function middlemiddlecircle(){
  if(turn == "player1"){
  var middleMiddleCircle = document.createElementNS(namespace, "circle")
  middleMiddleCircle.setAttribute("cx", 145)
  middleMiddleCircle.setAttribute("cy", 145)
  middleMiddleCircle.setAttribute("r", 40)
  middleMiddleCircle.setAttribute("fill", "yellow")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(middleMiddleCircle)
  turn = "player2"
}else{
}}

function rightmiddlecircle(){
  if(turn == "player2"){
  var rightMiddleCircle = document.createElementNS(namespace, "circle")
  rightMiddleCircle.setAttribute("cx", 245)
  rightMiddleCircle.setAttribute("cy", 145)
  rightMiddleCircle.setAttribute("r", 40)
  rightMiddleCircle.setAttribute("fill", "green" )
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rightMiddleCircle)
  turn = "player1"
}else{
}}

function leftdowncircle(){
  if(turn == "player1"){
  var leftDownCircle = document.createElementNS(namespace, "circle")
  leftDownCircle.setAttribute("cx", 45)
  leftDownCircle.setAttribute("cy", 245)
  leftDownCircle.setAttribute("r", 40)
  leftDownCircle.setAttribute("fill","yellow")
  var canvas = document.getElementById("game-board")
  canvas.appendChild(leftDownCircle)
  turn = "player2"
}else{
}}

function middledowncircle(){
  if(turn == "player2"){
  var middleDownCircle = document.createElementNS(namespace, "circle")
  middleDownCircle.setAttribute("cx", 145)
  middleDownCircle.setAttribute("cy", 245)
  middleDownCircle.setAttribute("r", 40)
  middleDownCircle.setAttribute("fill", "green" )
  var canvas = document.getElementById("game-board")
  canvas.appendChild(middleDownCircle)
  turn = "player1"
}else{
}}

function rightdowncircle(){
  if(turn == "player1") {
  var rightDownCircle = document.createElementNS(namespace, "circle")
  rightDownCircle.setAttribute("cx", 245)
  rightDownCircle.setAttribute("cy", 245)
  rightDownCircle.setAttribute("r", 40)
  rightDownCircle.setAttribute("fill", "yellow" )
  var canvas = document.getElementById("game-board")
  canvas.appendChild(rightDownCircle)
  turn = "player2"
}
}
