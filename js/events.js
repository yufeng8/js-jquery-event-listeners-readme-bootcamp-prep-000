//define functions here

$(document).ready(function(){

// call functions here

});

function getIt() {
  $("p").on('click', function () {
    alert("Hey!")
  })
}

function frameIt() {
  $("img").on('load',function() {
  })
}

function pressIt() {
  $('form').on('keydown', function(){
    alert("Your form is going to be submitted now.")
  })
}
