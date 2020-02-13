var time = 0
var iconNames = [
  "icon_bus.png",
  "icon_s.png",
  "icon_tourist.png",
  "icon_train.png",
  "icon_tram.png"
]

function startTimer() {
  setInterval(setTime, 1000)
}

function setTime() {
  ++time
  var timerLabel = document.getElementById("timer")
  timerLabel.innerHTML = time
}

function move() {
  changeAnimationTime()
  icon.addEventListener("animationiteration", AnimationListener, false)
  icon.classList.add("move-right")
}

function AnimationListener() {
  icon.style.webkitAnimation = "none"
  var currentTime = getComputedStyle(icon).getPropertyValue("--animation-time")
  currentTime = currentTime.slice(0, -1).trim()
  changeAnimationTime()
  setRandomIcon()
  icon.style.webkitAnimation = ""
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function setRandomIcon() {
  var randomIcon = iconNames[randomInteger(0, this.iconNames.length - 1)]
  var baseUrl =
    "https://raw.githubusercontent.com/marcoabcorrea/ticket/master/icons/"
  icon.src = baseUrl + randomIcon
}

function changeAnimationTime() {
  icon.style.setProperty("--animation-time", randomInteger(2, 5) + "s")
}

window.onload = function() {
  var icon = document.getElementById("icon")
  // setRandomIcon()
  // startTimer()
  // move()
}
