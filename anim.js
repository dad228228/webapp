window.onload = function() {
  var anchors = document.getElementsByClassName('operation');
  console.log(anchors)
  for (var i = 0; i < anchors.length; i++) {
    anchors[i].addEventListener('active', function() {
      addanim(this);
    });
  }

  function addanim(el) {
    console.log(el)
    el.classList.add('active');
  }

  function endanim(el) {
    el.classList.remove('active');
  }
}