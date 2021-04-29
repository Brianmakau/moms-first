function info( date, time, name, number ){
  this.date = date;
  this.time = time;
  this.name = name;
  this.number= number;
};

function customerDetails() {

  event.preventDefault();
  //Variable declaration
  var newDate = document.getElementById("date").value;
  var newTime = document.getElementById("time").value;
  var newName = document.getElementById("name").value;
  var newNumber= document.getElementById("number").value;
  
  var booked;
  

   if (document.getElementById("date").value === "d1") {
      alert("Please your preffered date:");
  }  
   else if (document.getElementById("time").value === "t1") {
      alert("Please choose your time of prefference:");
  }  
   else if (document.getElementById("name").value === "") {
      alert("Please fill in you name:"); 
  } 
   else if (newNumber === "") {
      alert("Please fill in the space with your phone number:");
      
  } 
   else {

      var newInfo = new info(newDate, newTime, newName, newNumber);



      $(document).ready(function() {
          $("ol").append("<li>" + " Your booking for " + newInfo.date + " at " + newInfo.time + " for  " + newInfo.name + " and contact " + newInfo.number + "</li>");
      });

      alert("Your booking has been recorded and we will get back to you shortly");


  }

  
  document.getElementById("booking").innerHTML =  present ;
  document.getElementById("time").value = "d1";
  document.getElementById("date").value = "t1";
  document.getElementById("name").value = "na1";
  document.getElementById("number").value = '';
  event.preventDefault()
}
$(document).ready(function() {
  $("#toggle").click(function() {
      $("ol").slideUp(500).slideDown(500);
      $("#booking").slideUp(500).slideDown(500);
  });
});