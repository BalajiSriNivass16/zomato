function updateTime() {
  var now = new Date()
  var time = now.toLocaleTimeString()
  var date = now.toLocaleDateString()
  document.getElementById("time").innerText = time
  document.getElementById("date").innerText = date
}setInterval(updateTime, 1000)
updateTime()