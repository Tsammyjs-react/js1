//function previewFile() {
      //var preview = document.querySelector('img');
      //var file    = document.querySelector('input[type=file]');
      //var reader  = new FileReader();
      //var fi = document.getElementById('file');
      //reader.addEventListener("load", function () {
      //  preview.src = reader.result;
      //}, false);
    
      //if (fi) {
        //reader.readAsDataURL(file);
      //}
    /*<!--var fi = document.getElementById('file');
    for (var i = 0; i <= fi.files.length - 1; i++){
        var view= document.querySelector('img');
        var file    = document.querySelector('input[type=file]').files[i];
        var reader  = new FileReader();

        reader.addEventListener("load", function () {
        view.src = reader.result;
      }, false);
    
      if (file) {
        reader.read
    }
    }//-->*/

//}




var slideIndex = 1;
setInterval(showDivs, 1000);

showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = x.length;}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}