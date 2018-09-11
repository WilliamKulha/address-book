//var addNewContact = document.createElement('div');
//  addNewContact.innerHTML = '<div class="panel panel-default">' +
//  '<div class="panel-heading">' +
//  '<div class="panel-title">' +
//  '<span class="contactName"></span>' +
//  '</div></div>' +
//  '<div class="panel-body">' +
//  '<p><span class="contactNumber"></span></p>' +
//  '<p><span class="contactEmail"></span></p>' +
//  '<p><span class="contactStreetAddress"></span></p>' +
//  '</div></div>';
//  $(addNewContact).appendto('contacts');

function combineInfo(name, number, email, address) {
  return ("<p class=\"clickable\">" + name + "<br>" + number + "<br>" + email + "<br>" + address + "</p>");
};





$(document).ready(function(){
  $("form#newContact").submit(function(event) {
    event.preventDefault();
    var contactName = $("input#contactName").val();
    var contactNumber = $("input#contactNumber").val();
    var contactEmail = $("input#contactEmail").val();
    var contactStreetAddress = $("input#contactStreetAddress").val();
    var contact = combineInfo(contactName, contactNumber, contactEmail, contactStreetAddress);
    $('#contactList').append(contact);
    $("p.clickable").click(function(){
      this.remove();
    });
  });

});
