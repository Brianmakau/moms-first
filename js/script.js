$(document).ready(function(){
    $("#details form ".submit(function(event){
      var namesInput = $("input#names").val();
      var numberInput = $("input#number").val();
      alert("Thankyou" +namesInput+ "for providing your contact details");
      $(".names").append(namesInput);
      $(".number").append(numberInput);

      

        event.preventDefault();
    }));
});