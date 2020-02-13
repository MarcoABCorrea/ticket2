function setIcons() {
  var barcode = document.getElementById("barcode")
  var barcodeName = "barcode.png"
  var iconName = "mdv.png"

  var baseUrl =
    "https://raw.githubusercontent.com/MarcoABCorrea/ticket2/master/icons/"
  icon.src = baseUrl + iconName
  barcode.src = baseUrl + barcodeName
}

function startTimer() {
  var sec = 0
  function pad(val) {
    return val > 9 ? val : "0" + val
  }
  setInterval(function() {
    document.getElementById("seconds").innerHTML = pad(++sec % 60)
    document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10))
  }, 1000)
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
  icon.style.webkitAnimation = ""
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function changeAnimationTime() {
  icon.style.setProperty("--animation-time", randomInteger(2, 5) + "s")
}

window.onload = function() {
  var icon = document.getElementById("icon")
  setIcons()
  startTimer()
  move()
}
