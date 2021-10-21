	function show(state)
	{
	document.getElementById('window_auth').style.display = state;	
	document.getElementById('gray_blur').style.display = state; 		
	}	

	function show_reg(state)
	{
      document.getElementById('window_reg').style.display = state;	
      document.getElementById('gray_blur').style.display = state; 		
	}


function send_info(){    

	var email = 0;
	var phone = 0;
	var name = document.getElementById('name').value;
	var pass1 = document.getElementById('pass1').value;
	var pass2 = document.getElementById('pass2').value;

	var re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = re.test(myMail);
    if (valid){
    	email++;
 }
    else {
    	document.getElementById('email').style.background = "rgb(255, 199, 199)"; 
   }

    var re = /^\d[\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (valid){
		phone++;
	}
    else{
    	document.getElementById('phone').style.background = "rgb(255, 199, 199)"; 
	}

	if(checkbox.checked && name != '' && pass1 != '' && (pass1 == pass2) && email != 0 && phone != 0)
	{
		console.log("Name: " + document.getElementById('name').value);
		console.log("Email: " + document.getElementById('email').value);
		console.log("Password: " + document.getElementById('pass1').value);
		console.log("Phone: " + document.getElementById('phone').value);
			if(radio1.checked){
            	console.log("Gender: Male");
            }
            else{
            	console.log("Gender: Female");
            }
    }
    else{
    	if(name == "")
    		document.getElementById('name').style.background = "rgb(255, 199, 199)";
    	if(pass1 == "" || (pass1 != pass2)){
    		document.getElementById('pass1').style.background = "rgb(255, 199, 199)";
            document.getElementById('pass2').style.background = "rgb(255, 199, 199)";
        }
    }
}