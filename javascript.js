function validateForm() {
    var x = document.forms["myform"]["Name"].value;
    var y = document.forms["myform"]["Email"].value;
    var z = document.forms["myform"]["Phone"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
    if (y == null || y == "") {
        alert("Email must be filled out");
        return false;
    }
    if(y == '' || y.indexOf('@') == -1 || y.indexOf('.') == -1) {
        alert("Invalid Email");
        return false;
    }  
     var numbers = /^[0-9]+$/;  
      if(!z.match(numbers))   
      {  
      alert('Please input numeric characters only in phone field');  
      return false;  
      }  
}