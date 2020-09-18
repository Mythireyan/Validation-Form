const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//ERROR FUNCTION
const error = function(input, message){
	const errorReply = input.parentElement;
	errorReply.className = 'form-control error';
	const small = errorReply.querySelector('small');
	small.textContent = message;
}

// SUCCESS FUNCTION
const success = function(input){
	const successReply = input.parentElement;
	successReply.className = 'form-control success';
}

// CHECK LENGTH FUNCTION 
function checkLength (input, min, max){
	if(input.value.length < min){
		error(input, `${getCapitalized(input)} must be atleast ${min} characters`);
	}else if (input.value.length > max){
		error(input, `${getCapitalized(input)} must be less than ${max} characters`);
	}
}

//PASSWORD MATCH FUNCTION
function passwordMatch(input){
	if(password.value === password2.value){
		success(input)
	}else{
		error(input, 'Password do not match')
	}
}

//checkRequired FUNCTION
function checkRequired(inputArr) {
	inputArr.forEach(function(input){
		if (input.value.trim()=== ''){
			error(input,`${getCapitalized (input)} is required`);
		}else{
			success(input);
		}
	})
}

//MAKING FIRST LETTER CAPITALIZED FUNCTION
function getCapitalized(input){
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//VALID EMAIL
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
    	success(input)
    }else{
    	error(input, 'Invalid email id')
    }
}

//ADD EVENT LISTNERS
form.addEventListener('submit', function(e){
	e.preventDefault();
	
	checkRequired([username, email, password,password2])

	checkLength(username, 5 , 20);
	checkLength(password, 6, 25);
	checkEmail(email);
	passwordMatch(password2)
});