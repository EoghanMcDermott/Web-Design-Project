//Eoghan McDermott - 15345451

function validate(firstname,surname,student_num,age)//function to validate sign up form
{
	if(!isNaN(firstname))//if firstname is a number
	{
		alert("Please enter a valid firstname");
		return;
	}
	 
	if(!isNaN(surname))//if surname is a number
	{
		alert("Please enter a valid surname");
		return;
	}
	
	if(isNaN(age))//if age is not a number
	{
		alert("Please enter your age in digit form");
		return;
	}
	 
	if(isNaN(student_num))//if student number is not a result
	{
		alert("Please properly enter your student number");
		return;
	}
	
	alert("Thanks for signing up!");//signed up successfully
}