function updateTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById('current-time').textContent = timeString;
}


setInterval(updateTime, 1000);

updateTime();
