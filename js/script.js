

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1200},"pages":[{"id":"page-index","displayName":"index","link":{"linkType":"LinkTypePage","href":"#!page-index"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-chat","displayName":"chat","link":{"linkType":"LinkTypePage","href":"#!page-chat"},"canDelete":true,"canRename":true,"canMove":true,"canProperties":true,"opened":false}]}
function fadeInText() {
  var textElements = document.querySelectorAll('.fade-in');

  for (var i = 0; i < textElements.length; i++) {
    var textElement = textElements[i];
    var positionFromTop = textElement.getBoundingClientRect().top;

    if (positionFromTop - window.innerHeight <= 0) {
      textElement.classList.add('visible');
    } else {
      textElement.classList.remove('visible');
    }
  }
}

// Add event listener to trigger the fade-in effect when scrolling
window.addEventListener('scroll', fadeInText);
