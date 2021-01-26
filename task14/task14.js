var date = new Date();
var hrs = date.getHours();
document.write('<b>Current date: </b> ' + date + '<br>')
new Date();
var nDate = date.setHours(--hrs);
document.write('<b>1 hour ago, it was </b>' + date);