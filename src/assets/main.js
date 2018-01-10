let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here}
    if (answer.value == '' || attempt.value == '') {
        setHiddenFields();
    }
    if (!validateInput(input.value)) {
    	return false;
    }
    attempt.value += 1;
    if (getResults(input.value)) {
   		setMessage('You Win! :)');
   		showAnswer(true);
   		showReplay();
   	} else if (attempt.value > 10) {
   		setMessage('You Lose! :(');
   		showAnswer(false);
   		showReplay();
   	} else {
   		setMessage('Incorrect, try again.');
   	}
}

function setHiddenFields() {
    answer.value = Math.floor(Math.random() * 10000).toString();
    while (answer.value.length < 4) {
        answer.value = "0"+ answer.value;
    }
    attempt.value = 0;
}

function setMessage(message) {
	document.getElementById('message').innerHTML = message;
}

function validateInput(input){
	if (input.length == 4) {
		return true;
	} else {
		setMessage('Guesses must be exactly 4 characters long.');
		return false;
	}
}

function getResults(input) {
	var str = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
	for (var i = 0; i < 4 ; i ++) {
		if (input.value.charAt(i) == answer.value.charAt(i)) {
			str += '<span class="glyphicon glyphicon-ok"></span>';
		} else if (answer.value.indexOf(input.value.charAt(i)) > -1) {
			str += '<span class="glyphicon glyphicon-transfer"></span>';
		} else {
			str += '<span class="glyphicon glyphicon-remove"></span>';
		}
	}
	str += '</div></div>';
	document.getElementById('results').innerHTML += str;
	return input.value == answer.value;
}

function showAnswer(b) {
	code.innerHTML = answer.value;
	if (b) {
		document.getElementById('code').className += ' success';
	} else {
		document.getElementById('code').className += ' failure';
	}
}

function showReplay() {
	document.getElementById('replay-div').style.display = "block";
	document.getElementById('guessing-div').styple.display = "none";
}
//implement new functions here