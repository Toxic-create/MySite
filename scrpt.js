document.addEventListener("DOMContentLoaded", function() {
  var loaderBar = document.querySelector('.loader-bar');
  var loaderMessage = document.querySelector('.loader-message');

  var width = 0;
  var interval = setInterval(function() {
    width += 1;
    loaderBar.style.width = width + '%';
    if (width >= 100) {
      clearInterval(interval);
      loaderMessage.innerHTML = "Loading complete. Rendering...";
      setTimeout(function() {
        // Redirect to another file after 2 seconds
        window.location.href = "protfolio.html";
      }, 2000);
    } else {
      if (width < 25) {
        loaderMessage.innerHTML = "Loading Profile...";
      } else if (width < 50) {
        loaderMessage.innerHTML = "Loading Files...";
      } else if (width < 75) {
        loaderMessage.innerHTML = "Almost there...";
      } else {
        loaderMessage.innerHTML = "Just Few Seconds...";
      }
    }
  }, 100); // Adjust the speed of the loading bar
});
