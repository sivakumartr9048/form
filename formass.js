function validate()
{
	if(document.forms["reg_form"]["fullname"].value =="")
	{
	   document.getElementById("na").innerHTML="first name is required"
		return false
	}
	else if(document.forms["reg_form"]["lastname"].value =="")
	{
		document.getElementById("na").innerHTML="last name is required"
		return false
	}
	else if(document.forms["reg_form"]["address"].value =="")
	{
		document.getElementById("na").innerHTML="address name is required"
		return false
	}
	else if(document.forms["reg_form"]["age"].value =="")
	{
		document.getElementById("na").innerHTML="age  is required"
		return false
	}
	else if(document.forms["reg_form"]["user"].value =="")
	{
		document.getElementById("na").innerHTML="user name is required"
		return false
	}
	else if(document.forms["reg_form"]["pass"].value =="")
	{
		document.getElementById("na").innerHTML="password is required"
		return false
	}
	else if(document.forms["reg_form"]["photo"].value =="")
	{
		document.getElementById("na").innerHTML="file  is required"
		return false
	}
	else{
		return true
	}
}
	