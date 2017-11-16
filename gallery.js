var modal = document.getElementById('myModal');
var modal1 = document.getElementById('myModal1');
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var close = document.getElementById('clse');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "inline-block";
}

btn1.onclick = function() {
   modal1.style.display = "inline-block"; 
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

clse.onclick = function(){
   modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal||event.target== modal1) {
        modal.style.display = "none";
        modal1.style.display="none";
    }
}
// The "callback" argument is called with either true or false
// depending on whether the image at "url" exists or not.
