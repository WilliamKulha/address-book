
$(document).ready(function(){
  $("form#newContact").submit(function(event){
    event.preventDefault();
    var contactName = $("input#contactName").val();
    var contactNumber = $("input#contactNumber").val();
    var contactEmail = $("input#contactEmail").val();
    var contactStreetAddress = $("input#contactStreetAddress").val();
    debugger;
  });
});
