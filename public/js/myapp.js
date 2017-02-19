(function(){

  var a = ['/img/img1.jpg', '/img/img2.jpg', '/img/img3.jpg'];

  setInterval(function(){
    var i = Math.random() * (3 - 1) + 1;
    bg = document.getElementById('bdiv');
    var chemin = "url(\'" + a[~~i] + "\')";
    console.log(~~i);
    console.log(chemin + " - " + a[~~i]);
    bg.style.background = chemin;

    animate('bdiv', 'bounce');
  }, 3000);




})();

function animate(element_ID, animation) {
      $(element_ID).addClass(animation);
      var wait = window.setTimeout( function(){
          $(element_ID).removeClass(animation)}, 300
      );
}
